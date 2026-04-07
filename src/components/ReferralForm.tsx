import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Plus, Send, CheckCircle2, Loader2, X } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ReferralForm() {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [friendEmails, setFriendEmails] = useState(['']);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const addFriendField = () => {
    setFriendEmails([...friendEmails, '']);
  };

  const removeFriendField = (index: number) => {
    setFriendEmails(friendEmails.filter((_, i) => i !== index));
  };

  const handleFriendEmailChange = (index: number, value: string) => {
    const newEmails = [...friendEmails];
    newEmails[index] = value;
    setFriendEmails(newEmails);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!referrerEmail || friendEmails.some(e => !e)) return;

    setStatus('loading');

    const path = 'referrals';
    try {
      // Save each referral individually
      const promises = friendEmails.map(friendEmail => 
        addDoc(collection(db, path), {
          referrerName,
          referrerEmail,
          friendEmail,
          status: 'pending',
          createdAt: serverTimestamp(),
        })
      );

      await Promise.all(promises);

      // 2. Send Referral Emails via Resend Backend
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/send-referral-emails`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            referrerName,
            referrerEmail,
            friendEmails,
          }),
        });
      } catch (emailError) {
        console.error('Failed to send referral emails:', emailError);
      }

      setStatus('success');
      setReferrerName('');
      setReferrerEmail('');
      setFriendEmails(['']);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
      setStatus('error');
    }
  };

  return (
    <section className="py-40 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
            Referral Program
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight leading-[0.95] font-display">
            Refer a Friend, <br /> <span className="text-blue-500">Earn Rewards</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-12 font-medium">
            Share the gift of heart health. When your friends make their first purchase, you'll receive a credit towards your next device or subscription.
          </p>
          
          <ul className="space-y-6">
            {[
              "Invite friends via email",
              "They get a special discount",
              "You earn rewards on their first purchase"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-lg font-bold text-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white">
                  {i + 1}
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-2xl bg-white/5 backdrop-blur-md p-12 rounded-[64px] border border-white/10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Your Name</label>
                <div className="relative group">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={referrerName}
                    onChange={(e) => setReferrerName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-8 py-5 focus:outline-none focus:ring-4 focus:ring-blue-600/20 focus:bg-white/10 focus:border-blue-600 transition-all font-medium"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Your Email</label>
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={referrerEmail}
                    onChange={(e) => setReferrerEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-8 py-5 focus:outline-none focus:ring-4 focus:ring-blue-600/20 focus:bg-white/10 focus:border-blue-600 transition-all font-medium"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Friend's Emails</label>
              {friendEmails.map((email, index) => (
                <div key={index} className="relative group flex gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => handleFriendEmailChange(index, e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-8 py-5 focus:outline-none focus:ring-4 focus:ring-blue-600/20 focus:bg-white/10 focus:border-blue-600 transition-all font-medium"
                      placeholder="friend@email.com"
                    />
                  </div>
                  {friendEmails.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFriendField(index)}
                      className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-red-500/20 hover:text-red-500 transition-all"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addFriendField}
                className="flex items-center gap-3 text-blue-400 font-black text-[10px] uppercase tracking-widest px-4 py-2 hover:text-blue-300 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Another Friend
              </button>
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-blue-600 text-white py-6 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-blue-500 active:scale-[0.98] shadow-xl shadow-blue-900/40 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : status === 'success' ? (
                <CheckCircle2 className="w-6 h-6 text-white" />
              ) : (
                <>
                  Send Invitations
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-3 text-blue-400 font-black text-sm uppercase tracking-widest"
              >
                <CheckCircle2 className="w-5 h-5" />
                Invitations sent!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
