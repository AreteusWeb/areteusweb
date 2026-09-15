import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { HoneypotField } from '@/components/HoneypotField';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = async (userEmail: string, honeypot: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, company: honeypot }),
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
    if (!email) return;

    setStatus('loading');

    if (company.trim()) {
      setStatus('success');
      setEmail('');
      setCompany('');
      return;
    }

    const path = 'newsletter_subscriptions';
    try {
      await addDoc(collection(db, path), {
        email,
        createdAt: serverTimestamp(),
      });

      await sendEmail(email, company);

      setStatus('success');
      setEmail('');
      setCompany('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
      setStatus('error');
    }
  };

  return (
    <section className="bg-slate-950 px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Newsletter</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Stay updated on the{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              future of health
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Join our newsletter to receive the latest breakthroughs in wearable ECG technology and health innovation.
          </p>

          <form
            onSubmit={handleSubmit}
            className="relative mx-auto mt-9 flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-2 sm:flex-row"
          >
            <HoneypotField value={company} onChange={setCompany} />
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-medium text-slate-950 transition hover:bg-slate-100 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : status === 'success' ? (
                <CheckCircle2 className="h-4 w-4" aria-hidden />
              ) : (
                <>
                  Subscribe
                  <Send className="h-4 w-4" aria-hidden />
                </>
              )}
            </button>
          </form>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-300"
            >
              <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-hidden />
              Thank you! Check your inbox for confirmation.
            </motion.div>
          )}
          {status === 'error' && (
            <div className="mt-6 text-sm font-medium text-red-400">
              Something went wrong. Please try again.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
