import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = async (userEmail: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
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
    
    const path = 'newsletter_subscriptions';
    try {
      // 1. Save to Firestore
      await addDoc(collection(db, path), {
        email,
        createdAt: serverTimestamp(),
      });

      // 2. Send Automatic Email via Resend Backend
      await sendEmail(email);

      setStatus('success');
      setEmail('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
      setStatus('error');
    }
  };

  return (
    <section className="py-48 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[180px] animate-pulse delay-700" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
            Newsletter
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-[0.9] font-display">
            Stay Updated on the <br /> <span className="text-blue-500">Future of Health</span>
          </h2>
          <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Join our newsletter to receive the latest breakthroughs in wearable ECG technology and health innovation.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto p-3 glass-dark rounded-[40px] border border-white/10 shadow-2xl">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 bg-transparent px-8 py-6 text-white placeholder:text-slate-500 focus:outline-none transition-all text-xl font-medium"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="bg-blue-600 text-white px-12 py-6 rounded-[32px] font-black text-sm uppercase tracking-widest hover:bg-blue-500 active:scale-95 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 shadow-xl shadow-blue-900/40"
            >
              {status === 'loading' ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : status === 'success' ? (
                <CheckCircle2 className="w-6 h-6 text-white" />
              ) : (
                <>
                  Subscribe Now
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex items-center justify-center gap-3 text-blue-400 font-black text-sm uppercase tracking-widest"
            >
              <CheckCircle2 className="w-5 h-5" />
              Thank you! Check your inbox for confirmation.
            </motion.div>
          )}
          {status === 'error' && (
            <div className="mt-8 text-red-400 font-black text-sm uppercase tracking-widest">
              Something went wrong. Please try again.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
