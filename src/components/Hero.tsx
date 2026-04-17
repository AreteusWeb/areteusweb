import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden bg-grid">
      {/* Background Accents */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-blue-50 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-60" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-slate-100 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-60" 
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 md:mb-10 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            The Future of Health
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] md:leading-[0.9] mb-6 md:mb-10 font-display">
            Pioneering the <br className="hidden sm:block" />
            <span className="text-gradient">Future of Health</span> <br className="hidden sm:block" />
            Technology
          </h1>
          
          <p className="text-base md:text-2xl text-slate-500 leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0">
            At ARETEUS we are pioneering the future of wearable health technology. We specialize in advanced design and development of innovative ECG monitoring systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-[24px] md:rounded-[64px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] md:shadow-[0_80px_160px_-30px_rgba(0,0,0,0.15)] border-[4px] md:border-[12px] border-white bg-white group transition-all duration-700 hover:shadow-[0_100px_200px_-40px_rgba(0,0,0,0.2)]">
            <img 
              src="https://i.imgur.com/nFpWtBe.png" 
              alt="ARETEUS Medical Research" 
              className="w-full h-auto rounded-[20px] md:rounded-[52px] object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
          
          <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-64 md:h-64 bg-blue-200/20 rounded-full blur-[60px] md:blur-[100px] -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
