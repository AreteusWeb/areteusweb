import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Cpu, Microscope, Waves, CheckCircle2 } from 'lucide-react';

const jobDetails = [
  "Develop polymer-based CMUT transducers (no silicon MEMS)",
  "Enable ultra-low-cost wearable sensors and portable ultrasound devices",
  "Work with technologies like photopolymers (SU-8), flexible materials, and acoustic systems"
];

const projects = [
  { icon: Microscope, name: "Raman/SERS blood diagnostics" },
  { icon: Waves, name: "Photoacoustic imaging" },
  { icon: Cpu, name: "Thermoacoustic imaging" }
];

export default function Careers() {
  return (
    <main className="pt-24 md:pt-48 pb-16 md:pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-40 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 md:mb-10">
              Careers at ARETEUS
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-slate-900 mb-6 md:mb-10 tracking-tight leading-[1.1] md:leading-[0.9] font-display">
              Shape the Future of <br className="hidden md:block" /> <span className="text-gradient">Health Monitoring</span>
            </h1>
            <p className="text-base md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
              Join our passionate team and help innovate in wearable health technology. At ARETEUS, we design AI-powered wearable medical sensors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-6 mb-20 md:mb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-900 rounded-[32px] md:rounded-[64px] p-10 md:p-32 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[160px] -z-10" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 md:mb-10">
                Our Vision
              </div>
            <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-12 tracking-tight leading-[1.2] md:leading-[0.95] font-display">
                Transforming Healthcare, <br className="hidden md:block" /> <span className="text-blue-500">Saving Lives</span>
              </h2>
              <p className="text-base md:text-2xl text-slate-400 leading-relaxed mb-6 md:mb-10 font-medium">
                We are developing next-generation heart monitoring technology that surpasses hospital-grade systems. Our wearable ECG integrates with AI capable of detecting heart issues in real-time.
              </p>
              <p className="text-sm md:text-lg text-slate-500 leading-relaxed font-medium">
                We specialize in advanced multi-lead ECG systems embedded in wearable garments, making clinical monitoring invisible and effortless.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.2] md:leading-[1.1]">
                Open Positions
              </h2>
            </div>
            <div className="text-slate-400 font-black text-xs uppercase tracking-widest">
              1 Active Role
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-white p-6 md:p-20 rounded-[32px] md:rounded-[64px] border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-700">
              <div className="mb-8 md:mb-16">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
                  <span className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-blue-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                    Engineering & Physics
                  </span>
                  <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-slate-50 text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-slate-100">
                    <MapPin className="w-3 md:w-3.5 h-3 md:h-3.5" />
                    Juarez, Mexico
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-slate-50 text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest border border-slate-100">
                    <Briefcase className="w-3 md:w-3.5 h-3 md:h-3.5" />
                    Full-time
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-5xl font-black text-slate-900 mb-3 md:mb-6 tracking-tight font-display leading-tight">
                  R&D Physics Engineer
                </h3>
                <p className="text-lg md:text-2xl text-blue-600 font-black font-display tracking-tight">
                  Polymer CMUT Specialist
                </p>
              </div>

              <div className="space-y-10 md:space-y-20">
                <section>
                  <h4 className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 md:mb-10 flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center">
                      <Cpu className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    Role Description
                  </h4>
                  <ul className="space-y-4 md:space-y-8">
                    {jobDetails.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-6 group">
                        <div className="mt-1.5 md:mt-2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500 shadow-sm">
                          <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-slate-300 group-hover:bg-white transition-all duration-500" />
                        </div>
                        <span className="text-base md:text-xl text-slate-600 leading-relaxed font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="p-6 md:p-16 rounded-[24px] md:rounded-[48px] bg-slate-50/50 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-100/30 rounded-full blur-[40px] md:blur-[80px] -z-10" />
                  <h4 className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 md:mb-10 flex items-center gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white flex items-center justify-center shadow-sm">
                      <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    Qualifications
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {[
                      "Master's in Physics (experimental focus)",
                      "Experience in prototyping, hardware, or sensors",
                      "Good English skills",
                      "Willing to relocate within Mexico (Juarez)"
                    ].map((qual, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-5">
                        <div className="mt-0.5 md:mt-1 w-5 h-5 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                          <CheckCircle2 className="w-3 md:w-4 h-3 md:h-4 text-blue-500" />
                        </div>
                        <span className="text-sm md:text-lg text-slate-600 leading-relaxed font-bold">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
