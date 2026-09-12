import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const checklist = [
  'Have your ARETEUS Patch nearby.',
  'Enable Bluetooth on your phone, tablet, or computer.',
  'Have the QR code that came with your device, or your Device ID.',
];

const cardBase = 'rounded-xl border border-slate-200 bg-white';
const iconSquare = 'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: 'easeOut' },
} as const;

export default function GetStarted() {
  return (
    <main className="overflow-x-hidden bg-white pb-24">
      {/* Hero */}
      <section className="border-b border-slate-200 px-6 pb-16 pt-32 text-center sm:px-8 sm:pt-40 md:pb-20 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Get started</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
            Set up your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              ARETEUS Patch
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:mt-6 sm:text-lg">
            Setting up your Patch only takes a few minutes. Before you begin, make sure everything is ready.
          </p>
        </motion.div>
      </section>

      {/* Checklist */}
      <section className="px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-xl">
          <motion.div {...fadeUp} className={`${cardBase} p-6 sm:p-9`}>
            <h2 className="font-display text-lg font-semibold text-slate-900">Before you begin</h2>
            <div className="mt-6 space-y-5">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3.5">
                  <div className={iconSquare}>
                    <ShieldCheck className="h-4 w-4" aria-hidden />
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-4 pt-2 text-center sm:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-md">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Ready to begin?
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
            First connect your Patch to the internet. Then you can open the app.
          </p>

          <a
            href="https://setup.areteus.com"
            target="_self"
            className="mt-8 inline-flex min-h-[52px] w-full max-w-sm items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-base font-semibold text-white transition hover:bg-slate-700 sm:min-h-[56px] sm:text-lg"
          >
            Connect to internet
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
          <p className="mt-2 text-xs text-slate-400">setup.areteus.com</p>

          <p className="mt-8 text-sm leading-relaxed text-slate-400">
            Already connected your Patch to the internet?
          </p>
          <button
            type="button"
            disabled
            className="mt-3 inline-flex min-h-[46px] w-full max-w-sm cursor-not-allowed items-center justify-center rounded-full bg-slate-100 px-7 text-sm font-medium text-slate-400"
          >
            Open the app — available soon
          </button>
        </motion.div>
      </section>
    </main>
  );
}
