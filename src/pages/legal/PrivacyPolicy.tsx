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
          <p className="mt-3 text-sm text-slate-500">Last updated: 12/09/2026</p>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">1. Introduction</h2>
              <p className="mt-3">
                This Privacy Policy explains how ARETEUS (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects, uses,
                discloses, and safeguards information across all of our properties, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Our website (areteus.com and related pages)</li>
                <li>Our device setup flow (setup.areteus.com)</li>
                <li>Our application, which connects to the ARETEUS Patch device (&quot;the App&quot;)</li>
              </ul>
              <p className="mt-4">
                This is a single policy that applies everywhere you interact with ARETEUS. Some
                sections apply only if you use the App and the Patch device, since that involves
                additional, more sensitive information. Those sections are labeled clearly below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">2. Information We Collect</h2>

              <h3 className="mt-6 font-display text-base font-semibold text-slate-900">
                2.1 Information collected on our website (all visitors)
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-slate-900">Personal identifiers:</strong> name, email
                  address, and shipping address, if you make a purchase.
                </li>
                <li>
                  <strong className="text-slate-900">Order information:</strong> details about
                  products you purchase and your transaction history.
                </li>
                <li>
                  <strong className="text-slate-900">Communication data:</strong> information you
                  provide in contact forms or support requests.
                </li>
              </ul>
              <p className="mt-4">
                We do not store your credit card information. Payments are processed securely by{' '}
                <strong className="text-slate-900">Stripe</strong>, a third-party payment processor.
              </p>

              <h3 className="mt-8 font-display text-base font-semibold text-slate-900">
                2.2 Information collected if you use the App and Patch device
              </h3>
              <p className="mt-3">
                If you create an ARETEUS account and use the App, we additionally collect:
              </p>

              <p className="mt-5 font-medium text-slate-900">Account and profile information</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Email address, display name, account creation date</li>
                <li>The MAC address of your registered Patch device(s)</li>
                <li>
                  Your body weight (used only to estimate calorie burn — you control when this is
                  entered and can update it at any time)
                </li>
              </ul>

              <p className="mt-5 font-medium text-slate-900">Health and biometric data</p>
              <p className="mt-3">
                This is the core purpose of the App. While your Patch device is connected, we
                process:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Electrocardiogram (ECG) waveform data (multiple leads)</li>
                <li>Respiration waveform</li>
                <li>
                  A photoplethysmogram (PPG) waveform, used to estimate blood oxygen (SpO2)
                </li>
                <li>
                  Derived metrics calculated from the above: heart rate, SpO2 percentage,
                  respiration rate, a heart-rate-variability estimate, and a recovery/readiness
                  score
                </li>
              </ul>
              <p className="mt-4">
                Some of these are engineering estimates, not certified medical measurements — the
                App is explicitly not a diagnostic medical device and is not intended for use by
                clinicians. Raw waveform data is stored in short (~10 second) chunks in our cloud
                storage, associated with your device.
              </p>

              <p className="mt-5 font-medium text-slate-900">AI Coach conversations</p>
              <p className="mt-3">If you use the AI Coach chat feature, we store:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>The text of your messages and the AI&apos;s replies</li>
                <li>
                  A snapshot of your vitals at the time of each message (heart rate, SpO2,
                  respiration rate, temperature field if available, recovery score), used to give
                  the AI relevant context
                </li>
                <li>
                  Metadata about any tools the AI used to answer you (e.g., an image, video, or
                  product link it retrieved)
                </li>
              </ul>
              <p className="mt-4">
                If you use <strong className="text-slate-900">Voice &amp; Video</strong> with the AI
                Coach, your microphone audio and camera frames are streamed live to our AI provider
                (Google, via Gemini Live) to generate a real-time response. This live stream is not
                stored by us unless you choose to <strong className="text-slate-900">record</strong>{' '}
                the session, in which case the recording is saved to your account.
              </p>

              <p className="mt-5 font-medium text-slate-900">Alerts and events</p>
              <p className="mt-3">
                If the App detects a vital sign outside an expected range, it creates an
                alert/event record containing the type of alert, severity, the relevant vital sign
                values, and a timestamp. You can delete your own alert history from within the App
                at any time.
              </p>

              <h3 className="mt-8 font-display text-base font-semibold text-slate-900">
                2.3 Information we do not currently collect
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  We do not collect step count, GPS/location data, or body temperature today — our
                  device does not yet transmit this data. If that changes, we will update this
                  policy before collecting it.
                </li>
                <li>
                  We do not run third-party analytics or tracking tools (e.g., no Google Analytics,
                  Meta Pixel, or similar) inside the App.
                </li>
                <li>
                  We do not currently ask for or verify your age when you create an account.{' '}
                  <strong className="text-slate-900">
                    The App and Patch device are intended for adult use only (18+).
                  </strong>{' '}
                  If you believe a minor has created an account, please contact us at the address
                  below.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">
                3. How We Use Your Information
              </h2>
              <p className="mt-3">We use the information above to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Create and maintain your account</li>
                <li>
                  Operate the core function of the App: displaying your live vitals and history
                  back to you
                </li>
                <li>
                  Power the AI Coach feature, including generating conversational responses and
                  automated insight summaries about your vitals
                </li>
                <li>Send order confirmations, shipping updates, and respond to support requests</li>
                <li>Send newsletters or promotional materials, only if you&apos;ve opted in</li>
                <li>Maintain and improve the security and reliability of our services</li>
              </ul>
              <p className="mt-4">
                We do <strong className="text-slate-900">not</strong> use your health data to build
                advertising profiles, and we do not sell your personal or health information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">
                4. How We Share Your Information
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We share information only with service
                providers who help us operate our business and the App:
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="pb-3 pr-4 font-semibold text-slate-900">Provider</th>
                      <th className="pb-3 pr-4 font-semibold text-slate-900">What they receive</th>
                      <th className="pb-3 font-semibold text-slate-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="align-top">
                    <tr className="border-b border-slate-100">
                      <td className="py-3 pr-4 font-medium text-slate-900">Stripe</td>
                      <td className="py-3 pr-4">Payment details</td>
                      <td className="py-3">Processing purchases on our website</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 pr-4 font-medium text-slate-900">Resend</td>
                      <td className="py-3 pr-4">Email address</td>
                      <td className="py-3">Sending order and account emails</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 pr-4 font-medium text-slate-900">
                        Firebase / Google Cloud (Firestore, Authentication, Cloud Storage, Cloud
                        Run)
                      </td>
                      <td className="py-3 pr-4">
                        Account data, vitals history, AI Coach conversations, alert history
                      </td>
                      <td className="py-3">
                        Hosting our database, authentication, and backend infrastructure
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 pr-4 font-medium text-slate-900">
                        Google Vertex AI / Gemini
                      </td>
                      <td className="py-3 pr-4">
                        Your AI Coach messages, a snapshot of your current vitals, and (if you use
                        Voice &amp; Video) live audio and camera frames
                      </td>
                      <td className="py-3">
                        Generating AI Coach responses and automated vitals insights
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 pr-4 font-medium text-slate-900">
                        Google Search (via our AI Coach)
                      </td>
                      <td className="py-3 pr-4">Search terms derived from your conversation</td>
                      <td className="py-3">
                        Allowing the AI Coach to look up current information when relevant
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 pr-4 font-medium text-slate-900">Unsplash / YouTube</td>
                      <td className="py-3 pr-4">
                        Generic search terms (e.g., an exercise name)
                      </td>
                      <td className="py-3">
                        Letting the AI Coach show you a relevant image or video
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-slate-900">Vercel</td>
                      <td className="py-3 pr-4">Standard web traffic/hosting logs</td>
                      <td className="py-3">Hosting our website and App front-end</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                We only share what&apos;s needed for each provider to do its job. For example, our
                image and video search tools receive a search term, not your account or health
                information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">
                5. Where Your Information Is Stored
              </h2>
              <p className="mt-3">
                Our backend services run on Google Cloud in the{' '}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[13px] text-slate-800">
                  us-central1
                </code>{' '}
                region. Our website is hosted on Vercel&apos;s global infrastructure. If you are
                located outside the United States, your information may be transferred to and
                processed in the United States.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">
                6. Data Retention and Deletion
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  You can log out, remove a registered device from your account, delete your own
                  alert history, and stop or delete AI Coach voice/video recordings at any time
                  from within the App.
                </li>
                <li>
                  <strong className="text-slate-900">
                    We do not currently offer a fully automated &quot;delete my account&quot; option
                  </strong>{' '}
                  that removes all of your data (profile, vitals history, and AI Coach history) in
                  one step. If you would like your account and associated data deleted, please
                  email us at the address below and we will process your request manually.
                </li>
                <li>
                  We do not currently have an automatic expiration (time limit) on stored waveform
                  data or AI Coach recordings. We are working to define a formal retention schedule
                  for this data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">7. Your Rights</h2>
              <p className="mt-3">
                Depending on where you live, you may have the right to access, correct, or request
                deletion of your personal information, including your health data. To exercise
                these rights, contact us at{' '}
                <a
                  href="mailto:info@areteus.us"
                  className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600"
                >
                  info@areteus.us
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">8. Security</h2>
              <p className="mt-3">
                We use industry-standard measures to protect your information, including encrypted
                connections (HTTPS/WSS) between your device, the App, and our servers, and access
                controls that restrict your account data to your account only. However, no method
                of transmission or storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>
              <p className="mt-4">
                If a security incident affects your health information, we will notify you in
                accordance with applicable law, including, where applicable, the FTC&apos;s Health
                Breach Notification Rule.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">
                9. Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                Our services are intended for use by adults (18 years or older) and are not
                directed at children. We do not knowingly collect information from anyone under 18.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">
                10. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. We will update the &quot;Last
                updated&quot; date at the top of this page when we do. Material changes affecting
                how we handle health data will be communicated to App users directly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-slate-900">11. Contact Us</h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy or how we handle your information,
                contact us at{' '}
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
