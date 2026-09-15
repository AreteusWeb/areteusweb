import express from "express";
import cors from "cors";
import Stripe from 'stripe';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import rateLimit from 'express-rate-limit';
import escapeHtml from 'escape-html';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

/** Rate limit for public email endpoints. Override with EMAIL_RATE_LIMIT_MAX / EMAIL_RATE_LIMIT_WINDOW_MS. */
const EMAIL_RATE_LIMIT_WINDOW_MS = Number(process.env.EMAIL_RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000;
const EMAIL_RATE_LIMIT_MAX = Number(process.env.EMAIL_RATE_LIMIT_MAX) || 5;

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidEmail(value: unknown): value is string {
  return typeof value === 'string' &&
    value.length <= 254 &&
    EMAIL_REGEX.test(value.trim());
}

/** Strip CR/LF to avoid email header injection in subjects. */
function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function escapeText(value: string): string {
  return escapeHtml(value.trim());
}

function isHoneypotTriggered(body: unknown): boolean {
  if (!body || typeof body !== 'object') return false;
  const company = (body as Record<string, unknown>).company;
  return typeof company === 'string' && company.trim().length > 0;
}

type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

function validateSubscribe(body: unknown): ValidationResult<{ email: string }> {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body' };
  }
  const { email } = body as Record<string, unknown>;
  if (!isValidEmail(email)) {
    return { ok: false, error: 'A valid email address is required (max 254 characters)' };
  }
  return { ok: true, data: { email: email.trim().toLowerCase() } };
}

function validateContact(body: unknown): ValidationResult<{ name: string; email: string; message: string }> {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body' };
  }
  const { name, email, message } = body as Record<string, unknown>;

  if (!isNonEmptyString(name) || name.trim().length > 100) {
    return { ok: false, error: 'Name is required and must be at most 100 characters' };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: 'A valid email address is required (max 254 characters)' };
  }
  if (!isNonEmptyString(message) || message.trim().length > 2000) {
    return { ok: false, error: 'Message is required and must be at most 2000 characters' };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    },
  };
}

function validateReferral(body: unknown): ValidationResult<{
  referrerName: string;
  referrerEmail: string;
  friendEmails: string[];
}> {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body' };
  }
  const { referrerName, referrerEmail, friendEmails } = body as Record<string, unknown>;

  if (!isNonEmptyString(referrerName) || referrerName.trim().length > 100) {
    return { ok: false, error: 'Referrer name is required and must be at most 100 characters' };
  }
  if (!isValidEmail(referrerEmail)) {
    return { ok: false, error: 'A valid referrer email is required' };
  }
  if (!Array.isArray(friendEmails) || friendEmails.length < 1 || friendEmails.length > 10) {
    return { ok: false, error: 'friendEmails must be an array of 1 to 10 emails' };
  }

  const cleaned: string[] = [];
  for (const item of friendEmails) {
    if (!isValidEmail(item)) {
      return { ok: false, error: 'Each friend email must be a valid email address' };
    }
    cleaned.push(item.trim().toLowerCase());
  }

  return {
    ok: true,
    data: {
      referrerName: referrerName.trim(),
      referrerEmail: referrerEmail.trim().toLowerCase(),
      friendEmails: cleaned,
    },
  };
}

const templates = {
  contactAdmin: (name: string, email: string, message: string) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">New Contact Submission</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;"><strong>From:</strong> ${escapeText(name)} (${escapeText(email)})</p>
      <div style="background: #f8fafc; padding: 24px; border-radius: 16px; margin-top: 24px;">
        <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeText(message)}</p>
      </div>
    </div>
  `,
  contactUser: (name: string) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">We've received your message</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Hi ${escapeText(name)},</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Thank you for reaching out to ARETEUS. Our team has received your message and will get back to you as soon as possible.</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `,
  orderConfirmation: (name: string, productName: string, amount: number) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">Order Confirmed</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Hi ${escapeText(name)},</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Thank you for your purchase of the <strong>${escapeText(productName)}</strong>.</p>
      <div style="background: #f8fafc; padding: 24px; border-radius: 16px; margin-top: 24px;">
        <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0;"><strong>Total Amount:</strong> $${escapeText(String(amount))}</p>
      </div>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">We'll notify you when your order ships.</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `,
  referralReferrer: (name: string, friendEmails: string[]) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">Referral Invitations Sent</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Hi ${escapeText(name)},</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">We've sent invitations to your friends: <strong>${friendEmails.map(escapeText).join(', ')}</strong>.</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">You'll receive a credit towards your next purchase once they make their first order!</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `,
  referralFriend: (referrerName: string) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">You've been invited to ARETEUS</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Hi,</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Your friend <strong>${escapeText(referrerName)}</strong> thinks you'd love ARETEUS clinical-grade heart health wearables.</p>
      <div style="margin-top: 32px;">
        <a href="https://areteus.us" style="background: #2563eb; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Visit Store</a>
      </div>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `,
  subscription: (_email: string) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">Welcome to ARETEUS</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Thank you for subscribing to our newsletter. You'll be the first to hear about our latest innovations in heart health technology.</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `
};

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Needed so rate limiting uses the real client IP behind reverse proxies (Cloud Run, etc.)
  app.set('trust proxy', 1);

  app.use(cors({
    origin: [
      "http://localhost:5173",
      "https://areteus.com",
      "https://www.areteus.com",
      "https://areteus.us"
    ]
  }));

  app.use(express.json({ limit: '32kb' }));

  const emailRateLimiter = rateLimit({
    windowMs: EMAIL_RATE_LIMIT_WINDOW_MS,
    max: EMAIL_RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please try again later.' },
  });

  app.post("/api/subscribe", emailRateLimiter, async (req, res) => {
    if (isHoneypotTriggered(req.body)) {
      console.warn('[HONEYPOT] Blocked subscribe attempt from', req.ip);
      return res.status(200).json({ message: 'Subscription successful' });
    }

    const parsed = validateSubscribe(req.body);
    if (parsed.ok === false) {
      return res.status(400).json({ error: parsed.error });
    }

    const { email } = parsed.data;
    try {
      await resend.emails.send({
        from: 'ARETEUS <noreply@areteus.com>',
        to: email,
        subject: 'Welcome to ARETEUS',
        html: templates.subscription(email),
      });
      res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error('[RESEND] Subscription error:', error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  app.post("/api/contact", emailRateLimiter, async (req, res) => {
    if (isHoneypotTriggered(req.body)) {
      console.warn('[HONEYPOT] Blocked contact attempt from', req.ip);
      return res.status(200).json({ message: 'Message sent successfully' });
    }

    const parsed = validateContact(req.body);
    if (parsed.ok === false) {
      return res.status(400).json({ error: parsed.error });
    }

    const { name, email, message } = parsed.data;
    try {
      await resend.emails.send({
        from: 'ARETEUS <noreply@areteus.com>',
        to: 'info@areteus.us',
        subject: sanitizeHeader(`New Contact Submission from ${name}`),
        html: templates.contactAdmin(name, email, message),
      });
      await resend.emails.send({
        from: 'ARETEUS <noreply@areteus.com>',
        to: email,
        subject: 'We received your message',
        html: templates.contactUser(name),
      });
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error('[RESEND] Contact error:', error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Disabled while store checkout is "Available Soon" / Stripe sandbox-only.
  // Re-enable with auth + Stripe webhook verification when product sales go live.
  app.post("/api/send-order-confirmation", emailRateLimiter, (_req, res) => {
    res.status(503).json({
      error: 'Order confirmation emails are temporarily disabled until checkout is live.',
    });
  });

  app.post("/api/send-referral-emails", emailRateLimiter, async (req, res) => {
    if (isHoneypotTriggered(req.body)) {
      console.warn('[HONEYPOT] Blocked referral attempt from', req.ip);
      return res.status(200).json({ message: 'Referral emails sent' });
    }

    const parsed = validateReferral(req.body);
    if (parsed.ok === false) {
      return res.status(400).json({ error: parsed.error });
    }

    const { referrerName, referrerEmail, friendEmails } = parsed.data;
    try {
      await resend.emails.send({
        from: 'ARETEUS <noreply@areteus.com>',
        to: referrerEmail,
        subject: 'Referral Invitations Sent',
        html: templates.referralReferrer(referrerName, friendEmails),
      });
      const friendPromises = friendEmails.map((friendEmail: string) =>
        resend.emails.send({
          from: 'ARETEUS <noreply@areteus.com>',
          to: friendEmail,
          subject: sanitizeHeader(`${referrerName} invited you to ARETEUS`),
          html: templates.referralFriend(referrerName),
        })
      );
      await Promise.all(friendPromises);
      res.status(200).json({ message: "Referral emails sent" });
    } catch (error) {
      console.error('[RESEND] Referral error:', error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  app.post("/api/create-payment-intent", async (req, res) => {
    const { amount, customerEmail, productId, priceId } = req.body;
    try {
      let amountInCents = Math.round(amount * 100);
      let resolvedPriceId: string | undefined;

      if (typeof priceId === 'string' && priceId.trim()) {
        resolvedPriceId = priceId.trim();
      } else if (typeof productId === 'string') {
        const productPriceMap: Record<string, string | undefined> = {
          'areteus-the-patch': process.env.STRIPE_PRICE_ID_CHESTPAD,
        };
        resolvedPriceId = productPriceMap[productId];
      }

      if (resolvedPriceId) {
        const stripePrice = await stripe.prices.retrieve(resolvedPriceId);
        if (stripePrice.unit_amount) {
          amountInCents = stripePrice.unit_amount;
        }
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: 'usd',
        receipt_email: customerEmail,
        automatic_payment_methods: { enabled: true },
        metadata: {
          productId: productId || 'unknown-product',
          priceId: resolvedPriceId || 'manual-amount',
        },
      });
      res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error('[STRIPE] Error creating payment intent:', error);
      res.status(500).send({ error: error.message });
    }
  });

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
