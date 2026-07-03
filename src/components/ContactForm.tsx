import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2, User, Mail, MessageSquare } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = async (data: typeof formData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Resend Error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const path = 'contact_submissions';
    try {
      // 1. Save to Firestore
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // 2. Send Email via Resend Backend
      await sendEmail(formData);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
      setStatus('error');
    }
  };

  return (
    <section className="border-b border-slate-200 px-6 py-14 sm:px-8 md:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Let's start a conversation
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-[15px]">
            Have questions about our technology or want to learn more about our partnership? We'd love to hear from you.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Mail className="h-[1.1rem] w-[1.1rem]" aria-hidden />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-slate-900">Email us</h4>
                <p className="mt-0.5 text-sm text-slate-500">Our team typically responds within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                <MessageSquare className="h-[1.1rem] w-[1.1rem]" aria-hidden />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-slate-900">Support</h4>
                <p className="mt-0.5 text-sm text-slate-500">Available for technical inquiries and assistance.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-slate-200 bg-white p-6 sm:p-9 lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Name
                </label>
                <div className="group relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-slate-900" aria-hidden />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-medium text-slate-900 transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Email
                </label>
                <div className="group relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-slate-900" aria-hidden />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-medium text-slate-900 transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Message
              </label>
              <div className="group relative">
                <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-slate-300 transition-colors group-focus-within:text-slate-900" aria-hidden />
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-medium text-slate-900 transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-slate-900 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : status === 'success' ? (
                <CheckCircle2 className="h-4 w-4" aria-hidden />
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" aria-hidden />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-500" aria-hidden />
                Message sent successfully!
              </motion.div>
            )}
            {status === 'error' && (
              <div className="text-center text-sm font-medium text-red-500">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
