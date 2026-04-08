import React from 'react';
import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Terms of Service</h1>
          <p className="text-slate-500 mb-12 text-lg">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the ARETEUS website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purchases and Payments</h2>
              <p>
                All purchases made through our website are subject to availability. We reserve the right to refuse or cancel any order for any reason. Payments are processed through Stripe, and you agree to provide current, complete, and accurate purchase and account information for all purchases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Shipping and Delivery</h2>
              <p>
                Shipping times are estimates and not guaranteed. ARETEUS is not responsible for delays caused by shipping carriers or customs. Risk of loss and title for items purchased from ARETEUS pass to you upon delivery of the items to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
              <p>
                The content on our website, including text, graphics, logos, and images, is the property of ARETEUS and is protected by copyright and other intellectual property laws. You may not use any of our intellectual property without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p>
                ARETEUS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which ARETEUS operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the website after such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@areteus.us" className="text-blue-600 hover:underline">info@areteus.us</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
