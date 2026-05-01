import { motion } from 'motion/react'; 
import { Briefcase, MapPin, Clock } from 'lucide-react';

const jobDetails = [
  "Design hardware and PCBs (rigid and flexible) using KiCad",
  "Write and debug firmware (ESP32, Arduino / ESP-IDF)",
  "Assemble and solder SMT prototypes",
  "Build wearable devices including fabric integration",
  "Work across hardware and software in fast R&D cycles"
];

const qualifications = [
  "Hands-on experience with real projects (embedded systems, PCBs, wearables)",
  "Strong self-motivation and work ethic",
  "Good English communication skills",
  "Degree not required — projects matter more",
  "Available full-time on-site (Ciudad Juárez)"
];

export default function Careers() {
  return (
    <main className="pt-24 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      
      {/* HERO */}
      <section className="px-6 mb-16 md:mb-28 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight font-display">
              Build the Future of <br className="hidden md:block" /> 
              <span className="text-gradient">Wearable Technology</span>
            </h1>

            <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto">
              Join our R&D team and work on real hardware, real systems, and next-generation wearable technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-20 md:py-28 mb-16 md:mb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="text-blue-500 text-[11px] font-medium tracking-[0.25em] uppercase mb-8">
            Our Vision
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
            Advanced Wearable Systems
          </h2>

          <p className="text-base md:text-xl text-slate-400 leading-relaxed">
            We are building next-generation wearable systems that combine sensing, hardware, and intelligent software into real-world products.
          </p>
        </div>
      </section>

      {/* JOB */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 md:p-10 rounded-[28px] md:rounded-[48px] border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500">
              
              {/* TOP */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">

                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-widest">
                    HARDWARE
                  </span>

                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] text-slate-500 font-bold tracking-widest">
                    <MapPin className="w-3 h-3" />
                    CD. JUÁREZ
                  </span>

                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] text-slate-500 font-bold tracking-widest">
                    <Briefcase className="w-3 h-3" />
                    FULL-TIME
                  </span>

                  {/* 👇 AQUÍ VA LO DE 48HRS BIEN PUESTO */}
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest">
                    <Clock className="w-3 h-3" />
                    MON–SAT · 48 HRS
                  </span>

                </div>

                <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-2 font-display">
                  Junior Hardware Engineer
                </h3>

                <p className="text-sm text-blue-600 font-semibold">
                  Hands-on · Fast growth · Real products
                </p>
              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-10">

                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
                    What You’ll Do
                  </h4>

                  <ul className="space-y-3">
                    {jobDetails.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
                    Requirements
                  </h4>

                  <ul className="space-y-3">
                    {qualifications.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* WHY */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 leading-relaxed">
                  You’ll work on real products, learn fast across hardware and software, and grow quickly.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                <p className="text-sm text-slate-500">
                  Apply with your projects at:
                  <span className="ml-2 text-blue-600 font-semibold">
                    info@areteus.us
                  </span>
                </p>

                <a
                  href="mailto:info@areteus.us"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:scale-[1.03] active:scale-[0.97] transition-all"
                >
                  Apply
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}