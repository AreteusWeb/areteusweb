import React from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <main className="overflow-x-hidden bg-white px-6 pb-24 pt-32 sm:px-8 sm:pt-40 md:pt-48">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">1. Introduction</h2>
              <p className="mt-3">
                At ARETEUS, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">2. Information we collect</h2>
              <p className="mt-3">
                We collect information that you provide directly to us when you make a purchase, sign up for our newsletter, or contact us. This includes:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li><strong className="text-slate-900">Personal identifiers:</strong> Name, email address, and shipping address.</li>
                <li><strong className="text-slate-900">Order information:</strong> Details about the products you purchase and your transaction history.</li>
                <li><strong className="text-slate-900">Communication data:</strong> Information provided in contact forms or support requests.</li>
              </ul>
              <p className="mt-4">
                <strong className="text-slate-900">Important:</strong> We do not store your credit card information. All payments are processed securely by <strong className="text-slate-900">Stripe</strong>, a third-party payment processor.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">3. How we use your information</h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Process and fulfill your orders.</li>
                <li>Send order confirmations and shipping updates.</li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Send newsletters and promotional materials (only if you have opted in).</li>
                <li>Improve our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">4. Sharing your information</h2>
              <p className="mt-3">
                We do not sell your personal information. We only share your information with trusted third-party service providers who assist us in operating our website and conducting our business, such as:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li><strong className="text-slate-900">Stripe:</strong> For secure payment processing.</li>
                <li><strong className="text-slate-900">Resend:</strong> For sending transactional and marketing emails.</li>
                <li><strong className="text-slate-900">Firebase:</strong> For hosting our website and managing our database.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">5. Your rights</h2>
              <p className="mt-3">
                Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at{' '}
                <a href="mailto:info@areteus.us" className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600">
                  info@areteus.us
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">6. Security</h2>
              <p className="mt-3">
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">7. Contact us</h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:info@areteus.us" className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600">
                  info@areteus.us
                </a>
                .
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
