import { motion } from 'motion/react';
import { Handshake, Building2, Globe, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerBenefits = [
  {
    icon: Globe,
    title: 'Global reach',
    description: 'Scale your wellness and research solutions across international markets with our integrated platform.',
  },
  {
    icon: Building2,
    title: 'Institutional integration',
    description: 'Seamlessly connect wearable data with existing systems and infrastructures.',
  },
  {
    icon: Users,
    title: 'Expert network',
    description: 'Collaborate with professionals across wellness, research, and technology.',
  },
];

const partnerTypes = ['Research institutions', 'Researchers & developers', 'Tech distributors'];

const cardBase =
  'rounded-xl border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300';
const iconSquare =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: 'easeOut' },
} as const;

export default function Partners() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero */}
      <section className="px-6 pb-16 pt-32 sm:px-8 sm:pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
              Collaborate with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                visionary
              </span>{' '}
              professionals
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:mt-6 sm:text-lg">
              We believe in the power of partnership to accelerate smarter, more accessible wellness and sensing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-t border-slate-200 bg-slate-50 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {partnerBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className={`${cardBase} p-6`}
              >
                <div className={iconSquare}>
                  <benefit.icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="border-b border-slate-200 px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-14">
            <motion.div {...fadeUp} className="flex-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Strategy</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Strategic collaboration
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                We collaborate with partners to integrate both our wearable body sensing systems and full-body tracking technology into real-world environments, enabling new possibilities across wellness, performance, and research.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {partnerTypes.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="w-full flex-1 overflow-hidden rounded-xl border border-slate-200"
            >
              <img
                src="https://www.medicaldesignandoutsourcing.com/wp-content/uploads/2023/06/Artificial-Intelligence-Medtech-Web.jpg"
                alt="Strategic collaboration"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <motion.div {...fadeUp}>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-300">
              <Handshake className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Become a partner
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Whether you're a research institution, developer, or technology distributor, we want to hear from you.
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
