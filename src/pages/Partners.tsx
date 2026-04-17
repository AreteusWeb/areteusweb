import { motion } from 'motion/react';
import { Handshake, Building2, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerBenefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Scale your medical solutions across international markets with our integrated platform."
  },
  {
    icon: Building2,
    title: "Institutional Integration",
    description: "Seamlessly connect wearable data with existing systems and infrastructures."
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Collaborate with professionals across healthcare, research, and technology."
  }
];

export default function Partners() {
  return (
    <main className="pt-40 pb-24 overflow-hidden">
      <section className="px-6 mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />

        <div className="max-w-6xl mx-auto">

          {/* HERO CENTRADO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[0.95] font-display">
              Collaborate with <br /> <span className="text-gradient">Visionary</span> Professionals
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              We believe in the power of partnership to accelerate smarter and more accessible healthcare solutions.
            </p>
          </motion.div>

          {/* BENEFITS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-28">
            {partnerBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                  <benefit.icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* STRATEGY */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 mb-32"
          >
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1] font-display">
                Strategic <span className="text-gradient">Collaboration</span>
              </h2>

              <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8">
                We collaborate with partners to integrate both our wearable health monitoring systems and full-body tracking technology into real-world environments, enabling new possibilities across healthcare, performance, and research.
              </p>

              {/* TAGS FIXED */}
              <div className="flex flex-wrap justify-start gap-2 max-w-sm">
                {[
                  'Research Institutions',
                  'Healthcare Providers',
                  'Tech Distributors'
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-600 text-xs whitespace-nowrap"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex-1 max-w-md w-full relative">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white group">
                <img 
                  src="https://www.medicaldesignandoutsourcing.com/wp-content/uploads/2023/06/Artificial-Intelligence-Medtech-Web.jpg" 
                  alt="Strategic Collaboration" 
                  className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100 rounded-full blur-[80px] -z-10" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-20 md:py-28 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-8 border border-white/10">
            <Handshake className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white font-display">
            Become a Partner
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-8">
            Whether you are a healthcare provider, research institution, or technology distributor, we want to hear from you.
          </p>

          {/* BOTÓN */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-2xl text-sm font-medium hover:bg-slate-100 transition"
          >
            Contact Us
          </Link>

        </motion.div>
      </section>
    </main>
  );
}