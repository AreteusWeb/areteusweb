import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Circle,
  Database,
  Dumbbell,
  Activity,
  Layers,
  Microscope,
  Radio,
  HeartPulse,
  TabletSmartphone,
  Target,
  Watch,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 10 }, // less movement
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }, // remove glitch
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

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero — no eyebrow chips; typography-only hierarchy */}
      <section className="relative flex min-h-[min(100svh,52rem)] flex-col justify-center bg-grid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:min-h-0 md:py-28 md:pt-40 lg:py-36 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 h-48 w-48 -translate-y-1/2 rounded-full bg-blue-200/35 blur-3xl sm:h-72 sm:w-72 md:top-1/3 md:h-[28rem] md:w-[28rem]" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-200/25 blur-3xl sm:h-56 sm:w-56" />
        </div>

        <div className="mx-auto w-full max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl lg:text-8xl">
              Next-Generation{' '}
              <span className="text-gradient">Wearable Health Technology</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600 sm:mt-5 sm:text-lg md:text-xl md:leading-relaxed">
              Pioneering intelligent sensing systems—advanced design and development for wearables that serve both research rigor and real world performance.
            </p>
            <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <Link
                to="/store"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-[15px] font-medium text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99] sm:flex-initial sm:min-w-[180px]"
              >
                Explore products
                <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-6 py-3.5 text-[15px] font-medium text-slate-800 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white active:scale-[0.99] sm:flex-initial sm:min-w-[180px]"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About — single column, no badge */}
      <section className="border-y border-slate-200/90 bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">Built for innovation</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              ARETEUS focuses on wearable hardware and signal quality—minimal friction, maximum clarity, so teams can trust what they measure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products — única sección de productos (sin duplicar más abajo) */}
      <section id="products" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-8 text-center sm:mb-10 md:mb-12">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-6xl">Products</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:mt-3 sm:text-base">
              Chest-centered vitals engineered for research and real-world performance.
            </p>
          </motion.div>

          {/* The Patch */}
          <motion.article
            {...fadeUp}
            className="mb-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_20px_50px_-22px_rgba(2,6,23,0.65)] sm:mb-10 sm:rounded-3xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_10%_20%,rgba(34,211,238,0.12),transparent_55%)]" />
            <div className="relative grid gap-0 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-stretch">
              <div className="border-b border-white/10 p-5 sm:p-7 md:p-9 lg:border-b-0 lg:border-r lg:border-white/10">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-cyan-200/80 sm:text-xs">Research · fitness</p>
                <h3 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl md:text-4xl">The Patch</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:mt-3 sm:text-[15px]">
                  Continuous cardiopulmonary insight from a chest-focused wearable appropriate for research environments and demanding training.
                </p>
                <ul className="mt-5 space-y-2 sm:mt-6" role="list">
                  {patchSensors.map((label) => (
                    <li
                      key={label}
                      className="flex items-start gap-2.5 text-sm text-slate-100 sm:text-[15px]"
                    >
                      <Circle className="mt-1 h-2 w-2 shrink-0 fill-cyan-400 text-cyan-400" aria-hidden />
                      {label}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 sm:mt-8">
                  <Link
                    to="/store"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-[15px] font-medium text-slate-950 transition hover:bg-cyan-300 sm:w-auto sm:px-6"
                  >
                    Explore product
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[16/11] min-h-[180px] bg-slate-900 sm:aspect-auto sm:min-h-[220px] lg:min-h-full">
                <img
                  src="https://i.imgur.com/FyarXK2.png"
                  alt="The Patch"
                  className="h-full w-full object-cover object-center opacity-[0.97]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Platform features — distinct from product duplication */}
      <section className="border-t border-slate-200/90 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-8 text-center md:mb-11">
            <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl md:text-6xl">Platform</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:text-base">Shared engineering principles across ARETEUS systems.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
            {platformFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.03 }}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 transition hover:border-slate-300 hover:shadow-md sm:p-6 md:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <item.icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900 sm:text-lg">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-8 text-center md:mb-11">
            <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl md:text-6xl">How it works</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:text-base">From Patch to insights.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 lg:gap-6">
            {howSteps.map((step, index) => (
              <motion.div
                key={step.step}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 sm:p-6"
              >
                <span className="text-[10px] font-semibold tabular-nums text-slate-400">{step.step}</span>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-blue-600 shadow-sm">
                    <step.icon className="h-4 w-4" aria-hidden />
                  </div>
                  <h3 className="font-display text-base font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Customers Onboarding CTA - Standalone Section */}
      <section className="border-t border-b border-slate-200/60 bg-slate-50/40 px-4 py-14 sm:px-6 sm:py-18 md:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-slate-200/85 bg-white p-6 sm:p-8 md:p-10 shadow-sm"
          >
            {/* Subtle premium light blob */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100/25 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-100/15 blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  Existing Customers
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-slate-900 sm:text-2xl">
                  Already have your Patch?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  Set up your Patch in just a few minutes and start monitoring your cardiovascular health.
                </p>
              </div>
              <Link
                to="/get-started"
                className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-1.5 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99] w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="h-4 w-4 opacity-80" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications — domains, not product specs again */}
      <section className="border-t border-slate-200/90 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-8 text-center md:mb-10">
            <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl md:text-6xl">Where it applies</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:text-base">Same platform thinking, different deployment contexts.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {useCases.map((item, idx) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: idx * 0.03 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-4 sm:flex-col sm:items-start sm:gap-4 sm:px-5 sm:py-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <item.icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
                </div>
                <h3 className="font-display text-sm font-semibold text-slate-900 sm:text-base">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-800 bg-slate-950 px-4 py-14 sm:px-6 sm:py-18 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-6xl">
              Transform the way you track the human body
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">Tell us about your use case, we’ll help you evaluate fit.</p>
            <div className="mt-8 sm:mt-9">
              <Link
                to="/contact"
                className="inline-flex min-h-[48px] w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-[15px] font-medium text-slate-950 transition hover:bg-slate-100 sm:w-auto"
              >
                Contact us
                <ArrowRight className="h-4 w-4 opacity-80" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
