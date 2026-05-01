import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  Circle,
  Activity,
  Waves,
  Thermometer,
  Network,
  Binary,
  Monitor,
  HeartPulse,
  Brain,
  Smartphone,
  Dumbbell,
  Target,
  Microscope,
  ArrowRight
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-48px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function Technology() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO */}
      <section className="relative flex min-h-[50vh] flex-col justify-center bg-grid px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pt-40 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 h-48 w-48 -translate-y-1/2 rounded-full bg-blue-200/35 blur-3xl sm:h-72 sm:w-72 md:top-1/3 md:h-[28rem] md:w-[28rem]" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-200/25 blur-3xl sm:h-56 sm:w-56" />
        </div>

        <div className="mx-auto w-full max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl md:text-8xl">
              Technology
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[1.125rem] leading-relaxed text-slate-600 md:text-2xl">
              From single-node sensing to full-body wearable networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CHESTPAD */}
      <section className="scroll-mt-24 px-4 py-20 bg-white sm:px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-6xl">ChestPad</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                ChestPad is a lightweight wearable sensing device designed for continuous physiological monitoring. It captures key body signals and serves as a compact entry point into the Areteus technology platform.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'ECG', desc: 'Heart activity', icon: Activity },
                  { name: 'SpO₂', desc: 'Oxygen saturation', icon: Waves },
                  { name: 'PTT', desc: 'Blood pressure estimation', icon: HeartPulse },
                  { name: 'EMG', desc: 'Muscle activity', icon: Zap },
                  { name: 'Skin Temp', desc: 'Surface temperature', icon: Thermometer },
                ].map((sensor) => (
                  <div key={sensor.name} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                      <sensor.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{sensor.name}</div>
                      <div className="text-xs text-slate-500">{sensor.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                {[
                  'Real-time physiological data',
                  'Designed for continuous wear',
                  'Compact and low-power',
                  'Seamless integration with extended systems'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-slate-700">
                    <Circle className="h-2 w-2 fill-blue-600 text-blue-600" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeUp}
              className="relative aspect-square overflow-hidden rounded-[40px] bg-slate-100 border border-slate-200 shadow-2xl"
            >
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium p-12 text-center group">
                <img 
                  src="https://i.imgur.com/FyarXK2.png" 
                  alt="ChestPad Sensor Placement"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BODY NETWORK */}
      <section className="scroll-mt-24 px-4 py-20 bg-slate-50 sm:px-6 md:py-32">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-6xl">Body Network</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              The Body Network connects multiple wearable nodes across the body into a unified system for sensing, interaction, and computation.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Multiple Nodes', desc: 'Connects multiple nodes across the body', icon: Network },
                { title: 'Synchronization', desc: 'Synchronizes sensing and interaction', icon: Zap },
                { title: 'Modular', desc: 'Supports modular expansion', icon: Layers },
                { title: 'Unified Control', desc: 'Enables full-body data and control', icon: Cpu },
              ].map((cap) => (
                <div key={cap.title} className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8">
              <h4 className="font-display text-xl font-bold text-slate-900 mb-6">Node Types</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'Physiological', icon: HeartPulse },
                  { name: 'Motion/IMU', icon: Binary },
                  { name: 'Displays/Touch', icon: Monitor },
                  { name: 'Audio/AI', icon: Brain },
                ].map((node) => (
                  <div key={node.name} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <node.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-slate-800">{node.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeUp}
            className="order-1 lg:order-2 relative aspect-[3/4] overflow-hidden rounded-[60px] bg-slate-900 border border-slate-800 shadow-3xl"
          >
             <div className="absolute inset-0 bg-blue-600/10 blur-[100px]" />
             <div className="flex items-center justify-center h-full">
                <img 
                  src="https://i.imgur.com/LcMM8uj.jpeg" 
                  alt="Body Network Visualization"
                  className="h-full w-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PLATFORM ARCHITECTURE */}
      <section className="px-4 py-20 bg-white sm:px-6 md:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-6xl">Platform Architecture</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              The platform is built around a central base unit connected to distributed wearable nodes, enabling synchronized sensing and flexible system configurations.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Base Unit',
                items: ['Power delivery', 'Network coordination', 'Processing and connectivity'],
                color: 'bg-slate-950 text-white border-slate-800'
              },
              {
                title: 'Distributed Nodes',
                items: ['Modular design', 'Specialized functions', 'Integration into garments, straps, or patches'],
                color: 'bg-white text-slate-900 border-slate-200'
              }
            ].map((card) => (
              <motion.div 
                key={card.title}
                {...fadeUp}
                className={`p-8 md:p-12 rounded-[40px] border shadow-premium ${card.color}`}
              >
                <h3 className="font-display text-2xl md:text-3xl font-black mb-8">{card.title}</h3>
                <ul className="space-y-4">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <div className={`h-2 w-2 rounded-full ${card.color.includes('text-white') ? 'bg-cyan-400' : 'bg-blue-600'}`} />
                      <span className="font-medium text-lg opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POWER & COMMUNICATION */}
      <section className="px-4 py-20 bg-slate-950 sm:px-6 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-6xl">Unified Power & Communication</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              A shared 2-wire architecture enables both power delivery and data communication across all nodes.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Low Power Mode',
                voltage: '~3.3V',
                features: ['Optimized for sensors', 'Efficient continuous operation'],
                icon: Zap
              },
              {
                title: 'High Power Mode',
                voltage: '~12V',
                features: ['Supports displays, audio, AI', 'Higher capability nodes'],
                icon: ShieldCheck
              }
            ].map((mode) => (
              <motion.div 
                key={mode.title}
                {...fadeUp}
                className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-400">
                    <mode.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-black text-cyan-400 font-display">{mode.voltage}</div>
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-6 tracking-tight">{mode.title}</h3>
                <ul className="space-y-3">
                  {mode.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-slate-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OPEN PLATFORM */}
      <section className="px-4 py-20 bg-white sm:px-6 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
             <motion.div {...fadeUp}>
                <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-6xl leading-[0.9]">Open Platform</h2>
                <p className="mt-8 text-lg leading-relaxed text-slate-600">
                  Areteus is designed as an open hardware and software platform, enabling developers and partners to build custom wearable nodes and applications.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4">
                  {[
                    'Open hardware architecture',
                    'Open software stack',
                    'Custom node development',
                    'Scalable ecosystem'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-slate-900">{item}</span>
                    </div>
                  ))}
                </div>
             </motion.div>

             <motion.div 
               {...fadeUp}
               className="bg-slate-50 border border-slate-200 rounded-[50px] p-12 aspect-[4/3] flex flex-col items-center justify-center text-center overflow-hidden relative shadow-inner"
             >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-3xl bg-white shadow-premium flex items-center justify-center mb-8">
                     <Layers className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-xl font-black font-display text-slate-900 mb-2">Flexible & Modular</div>
                  <div className="text-slate-500 max-w-xs">Built for expansion and community-driven innovation.</div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS */}
      <section className="px-4 py-20 bg-slate-50 sm:px-6 md:py-32 border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-6xl">Applications</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Same platform thinking, different deployment contexts.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Consumer */}
            <motion.div 
              {...fadeUp}
              className="bg-white p-10 md:p-16 rounded-[60px] border border-slate-100 shadow-premium"
            >
              <h3 className="font-display text-3xl font-black text-slate-900 mb-10 tracking-tight">Consumer</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Wellness and body sensing', icon: HeartPulse },
                  { title: 'Fitness and performance tracking', icon: Dumbbell },
                  { title: 'Movement and posture awareness', icon: Target },
                  { title: 'AI-assisted wearable interaction', icon: Smartphone }
                ].map((item) => (
                  <li key={item.title} className="flex items-center gap-6 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-slate-700 text-lg sm:text-xl leading-tight">{item.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Professional */}
            <motion.div 
              {...fadeUp}
              className="bg-slate-900 p-10 md:p-16 rounded-[60px] border border-slate-800 shadow-3xl text-white overflow-hidden relative"
            >
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
              <h3 className="font-display text-3xl font-black text-white mb-10 tracking-tight relative z-10">Professional</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  { title: 'Research platforms', icon: Microscope },
                  { title: 'Rehabilitation systems', icon: Network },
                  { title: 'Training and ergonomics', icon: Activity },
                  { title: 'Industrial applications', icon: Smartphone }
                ].map((item) => (
                  <li key={item.title} className="flex items-center gap-6 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-slate-400 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all border border-white/5">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-slate-100 text-lg sm:text-xl leading-tight">{item.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-800 bg-slate-950 px-4 py-14 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-black leading-[1.05] text-white sm:text-5xl md:text-7xl">
              Build with the Areteus Ecosystem
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
               Join our network of innovators and help redefine how we interact with the human body.
            </p>
            <div className="mt-10 sm:mt-12">
              <Link
                to="/contact"
                className="inline-flex min-h-[56px] w-full max-w-xs items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-slate-100 sm:w-auto active:scale-95 shadow-2xl"
              >
                Get Started
                <ArrowRight className="h-5 w-5 opacity-80" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
