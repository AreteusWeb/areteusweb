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
          <p className="mt-3 text-sm text-slate-500">Last updated: 12/09/2026</p>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">1. What Are Cookies?</h2>
              <p className="mt-3">
                Cookies are small text files stored on your device when you visit a website. They
                help websites function properly and, in some cases, remember information about your
                visit.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">
                2. Cookies We Currently Use
              </h2>
              <p className="mt-3">
                <strong className="text-slate-900">Essential cookies only.</strong> Today, this
                website does not use analytics, advertising, or personalization cookies. The only
                cookies set come from our payment processor:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-900">Stripe:</strong> When you use our checkout
                  page, Stripe (our payment processor) may set cookies on your device. These are
                  used for fraud prevention and to securely process your payment. We do not control
                  these cookies directly — see{' '}
                  <a
                    href="https://stripe.com/cookies-policy/legal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600"
                  >
                    Stripe&apos;s own Cookie Policy
                  </a>{' '}
                  for details.
                </li>
              </ul>
              <p className="mt-4">We do not currently use:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Analytics or performance cookies (e.g., Google Analytics)</li>
                <li>Advertising or ad-retargeting cookies</li>
                <li>Functionality cookies to remember your preferences</li>
                <li>A persistent shopping cart cookie</li>
              </ul>
              <p className="mt-4">
                If this changes — for example, if we add analytics to improve the site — we will
                update this policy first and, where required by law, ask for your consent before
                those cookies are set.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">3. Firebase</h2>
              <p className="mt-3">
                We use Firebase (a Google service) to power parts of this site&apos;s backend, such
                as contact and newsletter forms. As currently configured, this does not set a login
                session cookie in your browser, because the website does not have a public login
                feature. If we add account login to the website in the future, this section will be
                updated to describe any resulting session storage.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">4. Managing Cookies</h2>
              <p className="mt-3">
                Most web browsers let you control or block cookies through their settings. Since
                this site currently only sets essential payment-processing cookies via Stripe,
                blocking cookies may prevent you from completing a purchase, but will not otherwise
                affect your ability to browse the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">
                5. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Cookie Policy if the cookies and tools we use on this site
                change. We will post the updated policy here and revise the &quot;Last updated&quot;
                date above.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">6. Contact Us</h2>
              <p className="mt-3">
                If you have questions about this Cookie Policy, contact us at{' '}
                <a
                  href="mailto:info@areteus.us"
                  className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600"
                >
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
