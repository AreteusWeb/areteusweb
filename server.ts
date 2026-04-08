import express from "express";
import cors from "cors";
import Stripe from 'stripe';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

const templates = {
  contactAdmin: (name: string, email: string, message: string) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">New Contact Submission</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;"><strong>From:</strong> ${name} (${email})</p>
      <div style="background: #f8fafc; padding: 24px; border-radius: 16px; margin-top: 24px;">
        <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0;">${message}</p>
      </div>
    </div>
  `,
  contactUser: (name: string) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">We've received your message</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Thank you for reaching out to ARETEUS. Our team has received your message and will get back to you as soon as possible.</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `,
  orderConfirmation: (name: string, productName: string, amount: number) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">Order Confirmed</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Thank you for your purchase of the <strong>${productName}</strong>.</p>
      <div style="background: #f8fafc; padding: 24px; border-radius: 16px; margin-top: 24px;">
        <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0;"><strong>Total Amount:</strong> $${amount}</p>
      </div>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">We'll notify you when your order ships.</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `,
  referralReferrer: (name: string, friendEmails: string[]) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">Referral Invitations Sent</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">We've sent invitations to your friends: <strong>${friendEmails.join(', ')}</strong>.</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">You'll receive a credit towards your next purchase once they make their first order!</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `,
  referralFriend: (referrerName: string) => `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f1f5f9; border-radius: 24px;">
      <h1 style="font-size: 24px; font-weight: 900; color: #0f172a; margin-bottom: 24px;">You've been invited to ARETEUS</h1>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Hi,</p>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6;">Your friend <strong>${referrerName}</strong> thinks you'd love ARETEUS clinical-grade heart health wearables.</p>
      <div style="margin-top: 32px;">
        <a href="https://areteus.us" style="background: #2563eb; color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Visit Store</a>
      </div>
      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-top: 32px;">Best regards,<br>The ARETEUS Team</p>
    </div>
  `,
  subscription: (email: string) => `
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

  app.use(cors({
    origin: [
      "http://localhost:5173",
      "https://project-37274da8-813d-4f1e-8b9.web.app",
      "https://areteus.us"
    ]
  }));

  app.use(express.json());

  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;
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

  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    try {
      await resend.emails.send({
        from: 'ARETEUS <noreply@areteus.com>',
        to: 'info@areteus.us',
        //to: 'web@areteus.us', for testing purposes
        subject: `New Contact Submission from ${name}`,
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

  app.post("/api/send-order-confirmation", async (req, res) => {
    const { name, email, productName, amount } = req.body;
    try {
      await resend.emails.send({
        from: 'ARETEUS <noreply@areteus.com>',
        to: email,
        subject: 'Order Confirmed - ARETEUS',
        html: templates.orderConfirmation(name, productName, amount),
      });
      res.status(200).json({ message: "Order confirmation sent" });
    } catch (error) {
      console.error('[RESEND] Order confirmation error:', error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  app.post("/api/send-referral-emails", async (req, res) => {
    const { referrerName, referrerEmail, friendEmails } = req.body;
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
          subject: `${referrerName} invited you to ARETEUS`,
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
    const { amount, customerEmail } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: 'usd',
        receipt_email: customerEmail,
        automatic_payment_methods: { enabled: true },
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