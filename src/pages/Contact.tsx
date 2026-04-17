import SubscriptionForm from '@/components/SubscriptionForm';
import ContactForm from '@/components/ContactForm';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="pt-48 pb-32 overflow-hidden">
      <section className="px-6 mb-20 relative text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[0.9] font-display">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            We're here to help. Reach out to us for any inquiries about our technology or partnerships.
          </p>
        </motion.div>
      </section>
      
      <ContactForm />
      <SubscriptionForm />
    </main>
  );
}
