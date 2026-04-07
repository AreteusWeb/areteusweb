import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { db, handleFirestoreError, OperationType } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface CheckoutFormProps {
  product: {
    id: string;
    name: string;
    price: number;
  };
  onSuccess: () => void;
}

export default function CheckoutForm({ product, onSuccess }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setStatus('loading');

    try {
      // 1. Create Payment Intent on the server
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: product.price, customerEmail: formData.email }),
      });

      const { clientSecret, error: backendError } = await response.json();

      if (backendError) {
        throw new Error(backendError);
      }

      // 2. Confirm Payment with Stripe
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) as any,
          billing_details: {
            name: formData.name,
            email: formData.email,
          },
        },
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      if (paymentIntent.status === 'succeeded') {
        // 3. Check for Referral
        let referrerEmail = null;
        const referralQuery = query(
          collection(db, 'referrals'),
          where('friendEmail', '==', formData.email),
          where('status', '==', 'pending')
        );
        const referralSnap = await getDocs(referralQuery);
        
        if (!referralSnap.empty) {
          const referralDoc = referralSnap.docs[0];
          referrerEmail = referralDoc.data().referrerEmail;
          
          // Update referral status
          await updateDoc(doc(db, 'referrals', referralDoc.id), {
            status: 'converted',
            convertedAt: serverTimestamp(),
          });
          
          console.log(`[REFERRAL] Conversion tracked for referrer: ${referrerEmail}`);
        }

        // 4. Save Order to Firestore
        const orderPath = 'orders';
        await addDoc(collection(db, orderPath), {
          customerName: formData.name,
          customerEmail: formData.email,
          address: formData.address,
          amount: product.price,
          status: 'completed',
          referrerEmail,
          productId: product.id,
          createdAt: serverTimestamp(),
        });

        // 5. Send Order Confirmation Email
        try {
          await fetch(`${import.meta.env.VITE_API_URL}/api/send-order-confirmation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              productName: product.name,
              amount: product.price,
            }),
          });
        } catch (emailError) {
          console.error('Failed to send order confirmation email:', emailError);
        }

        setStatus('success');
        setTimeout(() => {
          onSuccess();
        }, 3000);
      }
    } catch (error: any) {
      console.error('Checkout Error:', error);
      setErrorMessage(error.message || 'An unexpected error occurred.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 font-display">Order Confirmed!</h3>
        <p className="text-slate-500 font-medium">Thank you for your purchase. You will receive a confirmation email shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Full Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:bg-white focus:border-blue-600 transition-all font-medium"
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Email Address</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:bg-white focus:border-blue-600 transition-all font-medium"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Shipping Address</label>
          <textarea
            required
            rows={3}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:bg-white focus:border-blue-600 transition-all font-medium resize-none"
            placeholder="123 Health St, Wellness City, 12345"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Card Details</label>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus-within:ring-4 focus-within:ring-blue-600/5 focus-within:bg-white focus-within:border-blue-600 transition-all">
            <CardElement 
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#0f172a',
                    '::placeholder': { color: '#94a3b8' },
                    fontFamily: 'Inter, sans-serif',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-sm font-bold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || !stripe}
        className="w-full bg-blue-600 text-white py-6 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-blue-500 active:scale-[0.98] shadow-xl shadow-blue-900/20 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50"
      >
        {status === 'loading' ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          `Pay $${product.price}`
        )}
      </button>
    </form>
  );
}
