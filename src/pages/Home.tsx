import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Circle,
  Dumbbell,
  Activity,
  Layers,
  Microscope,
  Radio,
  HeartPulse,
  TabletSmartphone,
  Target,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: 'easeOut' },
} as const;

const patchSensors = ['ECG', 'SpO2', 'Temperature', 'Blood pressure'];

const platformFeatures = [
  {
    title: 'Real-time monitoring',
    description: 'Live streams tuned for research review and performance labs.',
    icon: Radio,
  },
  {
    title: 'Multi-sensor system',
    description: 'Unified architecture from chest-centric to distributed nodes.',
    icon: Layers,
  },
  {
    title: 'High precision data',
    description: 'Calibration-minded engineering for trustworthy measurements.',
    icon: Target,
  },
  {
    title: 'Cross-platform integration',
    description: 'Fits into existing tools, workflows, and deployment models.',
    icon: TabletSmartphone,
  },
];

const howSteps = [
  {
    step: '01',
    title: 'Wear your Patch',
    description: 'Place the Patch comfortably on your chest.',
    icon: HeartPulse,
  },
  {
    step: '02',
    title: 'Connect your Patch',
    description: 'Complete a quick setup to connect your Patch.',
    icon: TabletSmartphone,
  },
  {
    step: '03',
    title: 'View your data',
    description: 'Monitor your cardiovascular health from your phone.',
    icon: Activity,
  },
];

const useCases = [
  { title: 'Wellness', icon: HeartPulse },
  { title: 'Sports performance', icon: Dumbbell },
  { title: 'Research & biomechanics', icon: Microscope },
  { title: 'Cardiac monitoring', icon: Activity },
];

// Shared card treatment so every section reads as one system
const cardBase =
  'rounded-xl border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300';
const iconSquare =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white';

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero — quiet, typographic, no decorative blobs */}
      <section className="px-6 pb-16 pt-32 sm:px-8 sm:pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto w-full max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="font-display text-[2.25rem] font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl sm:font-bold md:text-7xl">
              Next-Generation{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Wearable Health Technology
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:mt-6 sm:text-lg">
              Pioneering intelligent sensing systems—advanced design and development for wearables that serve both research rigor and real world performance.
            </p>
            <div className="mx-auto mt-9 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                to="/store"
                className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-medium text-white transition hover:bg-slate-700 sm:flex-initial sm:min-w-[168px]"
              >
                Explore products
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 sm:flex-initial sm:min-w-[168px]"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-slate-200 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Built for signal quality
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              ARETEUS focuses on wearable hardware and signal integrity — minimal friction, maximum clarity, so teams can trust what they measure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products — the one bold, signature moment on the page */}
      <section id="products" className="scroll-mt-24 border-b border-slate-200 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-9 text-center md:mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Products</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Chest-centered vitals
            </h2>
          </motion.div>

          <motion.article
            {...fadeUp}
            className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950"
          >
            <div className="grid gap-0 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-stretch">
              <div className="border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:border-white/10">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                  Research · fitness
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">The Patch</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                  Continuous cardiopulmonary insight from a chest-focused wearable, built for research environments and demanding training alike.
                </p>
                <ul className="mt-6 space-y-2.5" role="list">
                  {patchSensors.map((label) => (
                    <li key={label} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <Circle className="h-1.5 w-1.5 shrink-0 fill-cyan-400 text-cyan-400" aria-hidden />
                      {label}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Link
                    to="/store"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 text-sm font-medium text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
                  >
                    Explore product
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[16/11] min-h-[200px] bg-slate-900 sm:aspect-auto lg:min-h-full">
                <img
                  src="https://i.imgur.com/FyarXK2.png"
                  alt="The Patch"
                  className="h-full w-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Platform features */}
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-9 text-center md:mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Platform</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Shared engineering principles
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {platformFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.03 }}
                className={`${cardBase} p-6`}
              >
                <div className={iconSquare}>
                  <item.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-slate-200 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-9 text-center md:mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">How it works</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              From Patch to insight
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {howSteps.map((step, index) => (
              <motion.div
                key={step.step}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                className={`${cardBase} p-6`}
              >
                <div className="flex items-center justify-between">
                  <div className={iconSquare}>
                    <step.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                  </div>
                  <span className="text-xs font-medium tabular-nums text-slate-300">{step.step}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing customers CTA */}
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            {...fadeUp}
            className={`${cardBase} flex flex-col items-center gap-5 p-7 text-center sm:flex-row sm:justify-between sm:p-9 sm:text-left`}
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Existing customers
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-slate-900">
                Already have your Patch?
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                Set it up in a few minutes and start monitoring your cardiovascular health.
              </p>
            </div>
            <Link
              to="/get-started"
              className="inline-flex min-h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-medium text-white transition hover:bg-slate-700 sm:w-auto"
            >
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="border-b border-slate-200 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-9 text-center md:mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Where it applies</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Same platform, different contexts
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {useCases.map((item, idx) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: idx * 0.03 }}
                className={`${cardBase} flex flex-col items-start gap-3 p-5`}
              >
                <div className={iconSquare}>
                  <item.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                </div>
                <h3 className="font-display text-sm font-semibold text-slate-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Transform how you track the human body
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Tell us about your use case — we'll help you evaluate fit.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex min-h-[46px] w-full max-w-xs items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-slate-950 transition hover:bg-slate-100 sm:w-auto"
              >
                Contact us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
