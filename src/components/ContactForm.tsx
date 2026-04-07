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
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
            Contact Us
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight leading-[0.95] font-display">
            Let's Start a <br /> <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed mb-16 max-w-md font-medium">
            Have questions about our technology or want to learn more about our partnership? We'd love to hear from you.
          </p>

          <div className="space-y-10">
            <div className="flex items-start gap-8 group">
              <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-2 font-display tracking-tight">Email Us</h4>
                <p className="text-lg text-slate-500 font-medium">Our team typically responds within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-8 group">
              <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-2 font-display tracking-tight">Support</h4>
                <p className="text-lg text-slate-500 font-medium">Available for technical inquiries and assistance.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-white p-12 md:p-20 rounded-[64px] border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-700"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-2">
                  Name
                </label>
                <div className="relative group">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-3xl pl-16 pr-8 py-6 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:bg-white focus:border-blue-600 transition-all text-lg font-medium"
                  />
                </div>
              </div>
  
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-2">
                  Email
                </label>
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-3xl pl-16 pr-8 py-6 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:bg-white focus:border-blue-600 transition-all text-lg font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-2">
                Message
              </label>
              <div className="relative group">
                <MessageSquare className="absolute left-6 top-7 w-5 h-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border border-slate-100 rounded-3xl pl-16 pr-8 py-6 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:bg-white focus:border-blue-600 transition-all text-lg font-medium resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-blue-600 text-white py-8 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-500 active:scale-[0.98] shadow-xl shadow-blue-900/20 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <Loader2 className="w-7 h-7 animate-spin" />
              ) : status === 'success' ? (
                <CheckCircle2 className="w-7 h-7 text-white" />
              ) : (
                <>
                  Send Message
                  <Send className="w-6 h-6" />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-3 text-blue-600 font-black text-sm uppercase tracking-widest"
              >
                <CheckCircle2 className="w-5 h-5" />
                Message sent successfully!
              </motion.div>
            )}
            {status === 'error' && (
              <div className="text-center text-red-500 font-black text-sm uppercase tracking-widest">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
