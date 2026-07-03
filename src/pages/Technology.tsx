import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Zap,
  ChevronRight,
  Circle,
  Activity,
  Waves,
  Thermometer,
  HeartPulse,
  Smartphone,
  Dumbbell,
  Target,
  Microscope,
  Layers,
  ArrowRight,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-48px' },
  transition: { duration: 0.4, ease: 'easeOut' },
} as const;

const cardBase =
  'rounded-xl border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300';
const iconSquare =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white';

const sensors = [
  { name: 'ECG', desc: 'Heart activity', icon: Activity },
  { name: 'SpO₂', desc: 'Oxygen saturation', icon: Waves },
  { name: 'PTT', desc: 'Blood pressure estimation', icon: HeartPulse },
  { name: 'EMG', desc: 'Muscle activity', icon: Zap },
  { name: 'Skin temp', desc: 'Surface temperature', icon: Thermometer },
];

const patchFeatures = [
  'Real-time physiological data',
  'Designed for continuous wear',
  'Compact and low-power',
  'Seamless integration with extended systems',
];

const architecture = [
  {
    title: 'Base unit',
    items: ['Power delivery', 'Network coordination', 'Processing and connectivity'],
    dark: true,
  },
  {
    title: 'Distributed nodes',
    items: ['Modular design', 'Specialized functions', 'Integration into garments, straps, or patches'],
    dark: false,
  },
];

const openPlatform = [
  'Open hardware architecture',
  'Open software stack',
  'Custom node development',
  'Scalable ecosystem',
];

const consumer = [
  { title: 'Wellness and body sensing', icon: HeartPulse },
  { title: 'Fitness and performance tracking', icon: Dumbbell },
  { title: 'Sleep & recovery tracking', icon: Activity },
  { title: 'Continuous cardiac monitoring', icon: Zap },
];

const professional = [
  { title: 'Clinical cardiology studies', icon: Microscope },
  { title: 'Athlete biometric analysis', icon: Target },
  { title: 'Remote patient monitoring', icon: Smartphone },
  { title: 'Sports science labs', icon: Dumbbell },
];

export default function Technology() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 px-6 pb-16 pt-32 sm:px-8 sm:pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
              ARETEUS{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:mt-6 sm:text-lg">
              Precision chest-worn sensing for continuous physiological insight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Patch */}
      <section className="border-b border-slate-200 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Device</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                The Patch
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                A lightweight wearable sensing device designed for continuous physiological tracking. It captures key body signals and serves as a compact entry point into the ARETEUS technology platform.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {sensors.map((sensor) => (
                  <div key={sensor.name} className={`${cardBase} flex items-center gap-3 p-4`}>
                    <div className={iconSquare}>
                      <sensor.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{sensor.name}</div>
                      <div className="text-xs text-slate-500">{sensor.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-2.5">
                {patchFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <Circle className="h-1.5 w-1.5 shrink-0 fill-cyan-500 text-cyan-500" aria-hidden />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img
                src="https://i.imgur.com/FyarXK2.png"
                alt="The Patch sensor placement"
                className="aspect-square w-full object-contain p-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-9 text-center md:mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Architecture</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Platform architecture
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              Built around a central base unit connected to distributed wearable nodes, enabling synchronized sensing and flexible system configurations.
            </p>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2">
            {architecture.map((card) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                className={cn(
                  'rounded-xl border p-7 sm:p-8',
                  card.dark ? 'border-slate-800 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-900'
                )}
              >
                <h3 className="font-display text-xl font-semibold">{card.title}</h3>
                <ul className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className={cn('h-1.5 w-1.5 shrink-0 rounded-full', card.dark ? 'bg-cyan-400' : 'bg-slate-900')} />
                      <span className={cn('text-sm', card.dark ? 'text-slate-300' : 'text-slate-600')}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Platform */}
      <section className="border-b border-slate-200 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Ecosystem</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Open platform
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                ARETEUS is designed as an open hardware and software platform, enabling developers and partners to build custom wearable nodes and applications.
              </p>
              <div className="mt-6 space-y-2.5">
                {openPlatform.map((item) => (
                  <div key={item} className={`${cardBase} flex items-center gap-3 p-4`}>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    </div>
                    <span className="text-sm font-medium text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className={`${cardBase} flex aspect-[4/3] flex-col items-center justify-center p-10 text-center`}
            >
              <div className={iconSquare}>
                <Layers className="h-[1.1rem] w-[1.1rem]" aria-hidden />
              </div>
              <div className="mt-5 font-display text-lg font-semibold text-slate-900">Flexible & modular</div>
              <div className="mt-1.5 max-w-xs text-sm text-slate-500">
                Built for expansion and community-driven innovation.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="mb-9 text-center md:mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Applications</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Same platform, different contexts
            </h2>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2">
            <motion.div {...fadeUp} className={`${cardBase} p-7 sm:p-8`}>
              <h3 className="font-display text-lg font-semibold text-slate-900">Consumer</h3>
              <ul className="mt-5 space-y-4">
                {consumer.map((item) => (
                  <li key={item.title} className="flex items-center gap-3.5">
                    <div className={iconSquare}>
                      <item.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-xl border border-slate-800 bg-slate-950 p-7 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-white">Professional</h3>
              <ul className="mt-5 space-y-4">
                {professional.map((item) => (
                  <li key={item.title} className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-cyan-300 border border-white/10">
                      <item.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{item.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Build with the ARETEUS ecosystem
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Join our network of innovators and help redefine how we interact with the human body.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex min-h-[46px] w-full max-w-xs items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-slate-950 transition hover:bg-slate-100 sm:w-auto"
              >
                Get started
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

