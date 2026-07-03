import React from 'react';
import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <main className="overflow-x-hidden bg-white px-6 pb-24 pt-32 sm:px-8 sm:pt-40 md:pt-48">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">1. Acceptance of terms</h2>
              <p className="mt-3">
                By accessing or using the ARETEUS website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">2. Use of services</h2>
              <p className="mt-3">
                You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">3. Purchases and payments</h2>
              <p className="mt-3">
                All purchases made through our website are subject to availability. We reserve the right to refuse or cancel any order for any reason. Payments are processed through Stripe, and you agree to provide current, complete, and accurate purchase and account information for all purchases.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">4. Shipping and delivery</h2>
              <p className="mt-3">
                Shipping times are estimates and not guaranteed. ARETEUS is not responsible for delays caused by shipping carriers or customs. Risk of loss and title for items purchased from ARETEUS pass to you upon delivery of the items to the carrier.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">5. Intellectual property</h2>
              <p className="mt-3">
                The content on our website, including text, graphics, logos, and images, is the property of ARETEUS and is protected by copyright and other intellectual property laws. You may not use any of our intellectual property without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">6. Limitation of liability</h2>
              <p className="mt-3">
                ARETEUS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">7. Governing law</h2>
              <p className="mt-3">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which ARETEUS operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">8. Changes to terms</h2>
              <p className="mt-3">
                We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the website after such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">9. Contact us</h2>
              <p className="mt-3">
                If you have any questions about these Terms of Service, please contact us at{' '}
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
