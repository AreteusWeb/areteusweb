import Hero from '@/components/Hero';
import { motion } from 'motion/react';
import { Heart, Activity, Smartphone, Shield, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Heart,
    title: "Clinical-Grade",
    description: "Hospital-quality ECG monitoring in a wearable format."
  },
  {
    icon: Activity,
    title: "Real-Time AI",
    description: "Instant detection of heart issues using advanced algorithms."
  },
  {
    icon: Smartphone,
    title: "Seamless App",
    description: "Track your health discreetly at home, work, or on the go."
  },
  {
    icon: Shield,
    title: "Secure Data",
    description: "Your health information is encrypted and private."
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      
      {/* Features Grid */}
      <section className="py-40 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            >
              Our Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 tracking-tight font-display leading-[1.1]"
            >
              Advanced Technology for <span className="text-gradient">Better Health</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-slate-500 font-medium"
            >
              We combine medical expertise with cutting-edge engineering to create the next generation of health monitoring.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white p-8 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-blue-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center text-slate-400 mb-6 md:mb-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 tracking-tight font-display">{feature.title}</h3>
                  <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-40 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 order-2 lg:order-1 relative"
          >
            <div className="relative z-10 rounded-[32px] md:rounded-[64px] overflow-hidden border-[6px] md:border-[12px] border-white/5 shadow-2xl">
              <img 
                src="https://i.imgur.com/df0VCgf.png" 
                alt="Health Integration" 
                className="w-full object-cover aspect-[4/5] scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              Lifestyle Integration
            </div>
            <h2 className="text-3xl md:text-7xl font-black mb-6 md:mb-10 tracking-tight leading-[0.95] font-display">
              Seamlessly Integrated into Your <span className="text-blue-500">Lifestyle</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 md:mb-12 font-medium">
              Track your heart health discreetly and effortlessly at home, at work, or on the go. We are dedicated to making healthcare smarter and more accessible.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {[
                { text: 'Discreet Design', icon: Shield },
                { text: 'Long Battery Life', icon: Zap },
                { text: 'Instant Alerts', icon: Activity },
                { text: 'Doctor Reports', icon: Smartphone }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 md:gap-5 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-slate-200">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              Intelligence
            </div>
            <h2 className="text-3xl md:text-7xl font-black text-slate-900 mb-6 md:mb-10 tracking-tight leading-[0.95] font-display">
              Advanced <span className="text-gradient">AI-Powered</span> Diagnostics
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-12 font-medium">
              Our proprietary algorithms analyze ECG data in real-time, identifying potential anomalies before they become critical. Experience hospital-grade monitoring from the comfort of your home.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[32px] md:rounded-[64px] overflow-hidden shadow-premium border-[6px] md:border-[12px] border-white bg-white">
              <img 
                src="https://picsum.photos/seed/medical-ai/1200/1500" 
                alt="AI Diagnostics" 
                className="w-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
