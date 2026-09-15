import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Plus, Send, CheckCircle2, Loader2, X } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { HoneypotField } from '@/components/HoneypotField';

export default function ReferralForm() {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [friendEmails, setFriendEmails] = useState(['']);
  const [company, setCompany] = useState('');
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

    if (company.trim()) {
      setStatus('success');
      setReferrerName('');
      setReferrerEmail('');
      setFriendEmails(['']);
      setCompany('');
      return;
    }

    const path = 'referrals';
    try {
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

      try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/send-referral-emails`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            referrerName,
            referrerEmail,
            friendEmails,
            company,
          }),
        });
      } catch (emailError) {
        console.error('Failed to send referral emails:', emailError);
      }

      setStatus('success');
      setReferrerName('');
      setReferrerEmail('');
      setFriendEmails(['']);
      setCompany('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
      setStatus('error');
    }
  };

  return (
    <section className="bg-slate-950 px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-12 lg:flex-row lg:gap-16">
        <div className="flex-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Referral program</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Refer a friend,{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              earn rewards
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            Share the gift of heart health. When your friends make their first purchase, you'll receive a credit towards your next device or subscription.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              'Invite friends via email',
              'They get a special discount',
              "You earn rewards on their first purchase",
            ].map((item, i) => (
              <li key={item} className="flex items-center gap-3.5 text-sm font-medium text-slate-200">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                  {i + 1}
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex-1 rounded-xl border border-white/10 bg-white/5 p-6 sm:p-9"
        >
          <form onSubmit={handleSubmit} className="relative space-y-6">
            <HoneypotField value={company} onChange={setCompany} />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Your name
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden />
                  <input
                    type="text"
                    required
                    value={referrerName}
                    onChange={(e) => setReferrerName(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm font-medium text-white transition-all placeholder:text-slate-500 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Your email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden />
                  <input
                    type="email"
                    required
                    value={referrerEmail}
                    onChange={(e) => setReferrerEmail(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm font-medium text-white transition-all placeholder:text-slate-500 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Friend's emails
              </label>
              {friendEmails.map((email, index) => (
                <div key={index} className="flex gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => handleFriendEmailChange(index, e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm font-medium text-white transition-all placeholder:text-slate-500 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5"
                      placeholder="friend@email.com"
                    />
                  </div>
                  {friendEmails.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFriendField(index)}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-500 transition-colors hover:border-red-500/30 hover:text-red-400"
                      aria-label="Remove friend email"
                    >
                      <X className="h-4 w-4" aria-hidden />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addFriendField}
                className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300 transition-colors hover:text-cyan-200"
              >
                <Plus className="h-3.5 w-3.5" aria-hidden />
                Add another friend
              </button>
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-slate-950 transition hover:bg-slate-100 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : status === 'success' ? (
                <CheckCircle2 className="h-4 w-4" aria-hidden />
              ) : (
                <>
                  Send invitations
                  <Send className="h-4 w-4" aria-hidden />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-300"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-hidden />
                Invitations sent!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
