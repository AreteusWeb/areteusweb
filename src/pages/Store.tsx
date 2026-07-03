import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, X } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';
import ReferralForm from '@/components/ReferralForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

const products = [
  {
    id: 'areteus-the-patch',
    name: 'The Patch',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_ID_CHESTPAD || '',
    price: 123,
    description: 'Advanced 12-lead ECG wearable for athletes and fitness enthusiasts interested in continuous body sensing.',
    image: 'https://i.imgur.com/FyarXK2.png',
    features: ['12-lead ECG', 'AI insights', '24/7 tracking'],
  },
];

const cardBase =
  'rounded-xl border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300';
const iconSquare =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white';

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <main className="overflow-x-hidden bg-white pb-24">
      {/* Hero */}
      <section className="border-b border-slate-200 px-6 pb-16 pt-32 text-center sm:px-8 sm:pt-40 md:pb-20 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
            ARETEUS{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Store
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:mt-6 sm:text-lg">
            Advanced wearable sensing technology for continuous health tracking.
          </p>
        </motion.div>
      </section>

      {/* Products */}
      <section className="px-6 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-md">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className={`${cardBase} flex flex-col p-5`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-slate-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{product.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100">
                        <Zap className="h-3 w-3 text-slate-500" aria-hidden />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Original Buy Now button (kept for future use)
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-auto w-full bg-blue-600 text-white py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-blue-500 transition flex items-center justify-center gap-2"
                >
                  Buy Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                */}

                <button
                  disabled
                  className="mt-7 flex min-h-[46px] w-full cursor-not-allowed items-center justify-center rounded-full bg-slate-100 text-xs font-medium uppercase tracking-widest text-slate-400"
                >
                  Available soon
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl rounded-t-xl bg-white p-6 md:rounded-xl md:p-12"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:text-slate-900"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Checkout</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900">
                    Complete order
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    Securely purchase your {selectedProduct.name}.
                  </p>

                  <div className={`${cardBase} mt-6 p-5`}>
                    <div className="flex justify-between text-sm text-slate-700">
                      <span>{selectedProduct.name}</span>
                      <span>${selectedProduct.price}</span>
                    </div>
                    <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-sm font-semibold text-slate-900">
                      <span>Total</span>
                      <span>${selectedProduct.price}</span>
                    </div>
                  </div>
                </div>

                <Elements stripe={stripePromise}>
                  <CheckoutForm product={selectedProduct} onSuccess={() => setSelectedProduct(null)} />
                </Elements>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ReferralForm />
    </main>
  );
}
