import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobDetails = [
  'Design hardware and PCBs (rigid and flexible) using KiCad',
  'Write and debug firmware (ESP32, Arduino / ESP-IDF)',
  'Assemble and solder SMT prototypes',
  'Build wearable devices including fabric integration',
  'Work across hardware and software in fast R&D cycles',
];

const qualifications = [
  'Hands-on experience with real projects (embedded systems, PCBs, wearables)',
  'Strong self-motivation and work ethic',
  'Good English communication skills',
  'Degree not required — projects matter more',
  'Available full-time on-site (Ciudad Juárez)',
];

const tags = [
  { label: 'Hardware', icon: null, accent: true },
  { label: 'Cd. Juárez', icon: MapPin, accent: false },
  { label: 'Full-time', icon: Briefcase, accent: false },
  { label: 'Mon–Sat · 48 hrs', icon: Clock, accent: false },
];

const cardBase = 'rounded-xl border border-slate-200 bg-white';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: 'easeOut' },
} as const;

export default function Careers() {
  return (
    <main className="overflow-x-hidden bg-white pb-24">
      {/* Hero */}
      <section className="border-b border-slate-200 px-6 pb-16 pt-32 text-center sm:px-8 sm:pt-40 md:pb-20 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
            Build the future of
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              wearable technology
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:mt-6 sm:text-lg">
            Join our R&D team and work on real hardware, real systems, and next-generation wearable technology.
          </p>
        </motion.div>
      </section>

      {/* Vision */}
      <section className="border-b border-slate-200 bg-slate-950 px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300/80">Our vision</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Advanced wearable systems
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
              We're building next-generation wearable systems that combine sensing, hardware, and intelligent software into real-world products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job */}
      <section className="px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp} className={`${cardBase} p-6 sm:p-9`}>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${tag.accent ? 'bg-slate-900 text-white' : 'border border-slate-200 text-slate-500'
                    }`}
                >
                  {tag.icon && <tag.icon className="h-3 w-3" aria-hidden />}
                  {tag.label}
                </span>
              ))}
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Junior Hardware Engineer
            </h3>
            <p className="mt-1.5 text-sm font-medium text-cyan-600">
              Hands-on · Fast growth · Real products
            </p>

            <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 md:grid-cols-2 md:gap-10">
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  What you'll do
                </h4>
                <ul className="mt-4 space-y-3">
                  {jobDetails.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Requirements
                </h4>
                <ul className="mt-4 space-y-3">
                  {qualifications.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-sm leading-relaxed text-slate-500">
                You'll work on real products, learn fast across hardware and software, and grow quickly.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-500">
                Apply with your projects (GitHub, videos, photos) at{' '}
                <span className="font-semibold text-slate-900">info@areteus.us</span>
              </p>
              <a
                href="mailto:info@areteus.us"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Apply
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
