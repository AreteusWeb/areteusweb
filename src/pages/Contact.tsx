import SubscriptionForm from '@/components/SubscriptionForm';
import ContactForm from '@/components/ContactForm';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="overflow-x-hidden bg-white pb-24">
      <section className="border-b border-slate-200 px-6 pb-16 pt-32 text-center sm:px-8 sm:pt-40 md:pb-20 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              touch
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:mt-6 sm:text-lg">
            We're here to help. Reach out to us for any inquiries about our technology or partnerships.
          </p>
        </motion.div>
      </section>

      <ContactForm />
      <SubscriptionForm />
    </main>
  );
}
