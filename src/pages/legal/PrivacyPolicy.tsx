import React from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 mb-12 text-lg">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                At ARETEUS, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you make a purchase, sign up for our newsletter, or contact us. This includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Personal Identifiers:</strong> Name, email address, and shipping address.</li>
                <li><strong>Order Information:</strong> Details about the products you purchase and your transaction history.</li>
                <li><strong>Communication Data:</strong> Information provided in contact forms or support requests.</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> We do not store your credit card information. All payments are processed securely by <strong>Stripe</strong>, a third-party payment processor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Process and fulfill your orders.</li>
                <li>Send order confirmations and shipping updates.</li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Send newsletters and promotional materials (only if you have opted in).</li>
                <li>Improve our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Sharing Your Information</h2>
              <p>
                We do not sell your personal information. We only share your information with trusted third-party service providers who assist us in operating our website and conducting our business, such as:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Stripe:</strong> For secure payment processing.</li>
                <li><strong>Resend:</strong> For sending transactional and marketing emails.</li>
                <li><strong>Firebase:</strong> For hosting our website and managing our database.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:info@areteus.us" className="text-blue-600 hover:underline">info@areteus.us</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@areteus.us" className="text-blue-600 hover:underline">info@areteus.us</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
