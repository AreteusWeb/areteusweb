import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Heart,
  RefreshCw,
  Shield,
  Smartphone,
  Users,
  Move3D,
  Workflow,
  RadioTower,
  Stethoscope,
  Dumbbell,
  Microscope,
  Gamepad2
} from 'lucide-react';

const productOverview = [
  {
    name: 'ChestPad',
    description: 'Focused wearable chest sensor for continuous, reliable cardiopulmonary monitoring.',
    image: 'https://i.imgur.com/FyarXK2.png',
    benefits: ['Chest-focused monitoring', 'Fast setup and simple workflow', 'Real-time vital insights']
  },
  {
    name: 'ARETEUS Full Body Tracker',
    description: 'Distributed full-body motion tracking platform for VR, biomechanics, and advanced health analytics.',
    image: 'https://i.imgur.com/LcMM8uj.jpeg',
    benefits: ['Full-body motion visibility', 'Distributed wearable sensor nodes', 'Low-latency live data']
  }
];

const areteusFeatures = [
  { text: 'Full-body tracking', icon: Move3D },
  { text: 'Distributed sensors', icon: Workflow },
  { text: 'Real-time data stream', icon: RadioTower },
  { text: 'OTA firmware updates', icon: RefreshCw }
];

const chestpadFeatures = [
  { text: 'Chest-centered sensing for cleaner signal quality', icon: Heart },
  { text: 'Simple, wearable-first experience from setup to monitoring', icon: Shield },
  { text: 'Real-time vital data for clinicians, athletes, and users', icon: Activity }
];

const useCases = [
  { title: 'Healthcare', icon: Stethoscope },
  { title: 'Sports Performance', icon: Dumbbell },
  { title: 'Research & Biomechanics', icon: Microscope },
  { title: 'VR / Motion Tracking', icon: Gamepad2 }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-36 md:pt-48 pb-24 md:pb-32 px-6 bg-grid">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-60 -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              ARETEUS Technology Platform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] md:leading-[0.95] mb-6 md:mb-10 font-display">
              Next-Generation <span className="text-gradient">Wearable Sensing</span> Technology
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-2xl text-slate-500 leading-relaxed mb-10 md:mb-14 font-medium">
              ARETEUS builds premium sensing systems for focused chest monitoring and full-body motion intelligence across healthcare, sports, and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-5 tracking-tight font-display">
              Two Products. <span className="text-gradient">One Platform Vision.</span>
            </h2>
            <p className="text-base md:text-xl text-slate-500 font-medium">
              Choose the product that fits your sensing needs, from focused chest monitoring to distributed full-body tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {productOverview.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group bg-white border border-slate-200 rounded-[28px] md:rounded-[40px] p-6 md:p-9 shadow-[0_16px_60px_-30px_rgba(15,23,42,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_80px_-35px_rgba(15,23,42,0.35)] transition-all duration-500"
              >
                <div className="rounded-2xl md:rounded-[28px] overflow-hidden border border-slate-100 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight font-display mb-4">{product.name}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">{product.description}</p>
                <ul className="space-y-3 mb-8">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <Activity className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="text-sm md:text-base font-semibold">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/store"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-500 transition-colors duration-300"
                >
                  View Product
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARETEUS Dedicated Feature Section */}
      <section className="py-24 md:py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20" />
        <div className="absolute top-0 right-0 w-[720px] h-[720px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              ARETEUS System
            </div>
            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05] font-display">
              Full Body Tracking <span className="text-blue-400">Without Compromise</span>
            </h2>
            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 font-medium leading-relaxed">
              Built for advanced motion intelligence, ARETEUS combines distributed wearable nodes and centralized control for accurate, scalable full-body data capture.
            </p>
            <ul className="space-y-4">
              {areteusFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-100">{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="rounded-[28px] md:rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <img
                src="https://i.imgur.com/LcMM8uj.jpeg"
                alt="ARETEUS Full Body Tracker visual"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ChestPad Dedicated Feature Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-[28px] md:rounded-[40px] overflow-hidden border border-slate-100 shadow-premium">
              <img
                src="https://i.imgur.com/FyarXK2.png"
                alt="ChestPad wearable sensor"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              ChestPad
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.05] font-display">
              Focused Chest Monitoring for <span className="text-gradient">Everyday Precision</span>
            </h2>
            <p className="text-base md:text-xl text-slate-500 font-medium leading-relaxed mb-8">
              ChestPad delivers a streamlined wearable experience for high-fidelity chest monitoring, built for ease of use and reliable real-time insight.
            </p>
            <ul className="space-y-4">
              {chestpadFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-700">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold">{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-5 tracking-tight font-display">
              Applications Across High-Impact Domains
            </h2>
            <p className="text-base md:text-xl text-slate-500 font-medium">
              Both products are built to support practical outcomes in medicine, performance, immersive technology, and science.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight font-display">{useCase.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-28 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05] font-display">
            Build the Future of Wearable Sensing
          </h2>
          <p className="text-base md:text-xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto">
            Partner with ARETEUS to deploy next-generation sensing systems designed for performance, precision, and scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/store"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-500 transition-colors duration-300"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contact Us
              <Users className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
