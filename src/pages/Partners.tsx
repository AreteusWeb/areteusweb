import { motion } from 'motion/react';
import { Handshake, Building2, Globe, Users } from 'lucide-react';

const partnerBenefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Scale your medical solutions across international markets with our integrated platform."
  },
  {
    icon: Building2,
    title: "Institutional Integration",
    description: "Seamlessly connect wearable data with existing hospital management systems."
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Join a community of visionary medical professionals and technology pioneers."
  }
];

export default function Partners() {
  return (
    <main className="pt-48 pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 mb-40 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mb-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              Partnerships
            </div>
            <h1 className="text-4xl md:text-8xl font-black text-slate-900 mb-6 md:mb-10 tracking-tight leading-[0.9] font-display">
              Collaborate with <br /> <span className="text-gradient">Visionary</span> Professionals
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium">
              We believe in the power of partnership to accelerate the transition to smarter, more accessible healthcare. Join us in redefining the future of cardiology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-40">
            {partnerBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-12 rounded-[32px] md:rounded-[64px] bg-white border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 group"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 bg-slate-50 rounded-xl md:rounded-3xl flex items-center justify-center text-slate-400 shadow-sm mb-8 md:mb-12 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <benefit.icon className="w-6 h-6 md:w-10 md:h-10" />
                </div>
                <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-4 md:mb-6 font-display tracking-tight">{benefit.title}</h3>
                <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-center gap-24 mb-40"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                Strategy
              </div>
              <h2 className="text-3xl md:text-7xl font-black text-slate-900 mb-6 md:mb-10 tracking-tight leading-[0.95] font-display">
                Strategic <span className="text-gradient">Collaboration</span> for Better Health
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-12 font-medium">
                We work closely with industry leaders to integrate our advanced ECG technology into diverse medical ecosystems. Our partnerships are built on shared values of innovation, precision, and patient-centric care.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {['Research Institutions', 'Healthcare Providers', 'Tech Distributors'].map((tag, i) => (
                  <div key={i} className="px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-slate-600 font-black text-[10px] uppercase tracking-widest">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[32px] md:rounded-[64px] overflow-hidden shadow-premium border-[6px] md:border-[12px] border-white bg-white group">
                <img 
                  src="https://www.medicaldesignandoutsourcing.com/wp-content/uploads/2023/06/Artificial-Intelligence-Medtech-Web.jpg" 
                  alt="Strategic Collaboration" 
                  className="w-full object-cover aspect-[4/5] transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] -z-10" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-900 rounded-[32px] md:rounded-[64px] p-10 md:p-32 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[160px] -z-10" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center text-blue-400 mx-auto mb-8 md:mb-12 border border-white/10 shadow-2xl">
                <Handshake className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <h2 className="text-3xl md:text-7xl font-black mb-6 md:mb-10 tracking-tight leading-[0.95] font-display">Become a Partner</h2>
              <p className="text-lg md:text-2xl text-slate-400 font-medium mb-8 md:mb-12">
                Whether you are a healthcare provider, research institution, or technology distributor, we want to hear from you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
