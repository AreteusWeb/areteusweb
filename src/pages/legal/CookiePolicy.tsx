import React from 'react';
import { motion } from 'motion/react';

export default function CookiePolicy() {
  return (
    <main className="overflow-x-hidden bg-white px-6 pb-24 pt-32 sm:px-8 sm:pt-40 md:pt-48">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">1. What are cookies?</h2>
              <p className="mt-3">
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">2. How we use cookies</h2>
              <p className="mt-3">We use cookies for the following purposes:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li><strong className="text-slate-900">Essential cookies:</strong> These are necessary for the website to function properly. They include cookies that allow you to log in to secure areas of our website and use the shopping cart.</li>
                <li><strong className="text-slate-900">Performance and analytics cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.</li>
                <li><strong className="text-slate-900">Functionality cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">3. Third-party cookies</h2>
              <p className="mt-3">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. These third parties include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li><strong className="text-slate-900">Stripe:</strong> To facilitate secure payments and prevent fraud.</li>
                <li><strong className="text-slate-900">Firebase:</strong> To manage user authentication and session states.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">4. Managing cookies</h2>
              <p className="mt-3">
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">5. Changes to this policy</h2>
              <p className="mt-3">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">6. Contact us</h2>
              <p className="mt-3">
                If you have any questions about our Cookie Policy, please contact us at{' '}
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
