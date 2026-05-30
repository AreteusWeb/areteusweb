import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ArrowRight, X } from 'lucide-react';
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
    features: ['12-lead ECG', 'AI insights', '24/7 tracking']
  }
];

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <main className="pt-48 pb-32 overflow-hidden">
      
      {/* HERO */}
      <section className="px-6 mb-16 text-center relative">
        <div className="absolute inset-0 bg-grid opacity-50 -z-10" />

        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-[0.9] font-display">
          ARETEUS <span className="text-gradient">Store</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
          Advanced wearable sensing technology for continuous health tracking.
        </p>
      </section>

      {/* 🔥 PRODUCTS GRID */}
      <section className="px-6 mb-32">
        <div className="max-w-3xl mx-auto">
          
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[32px] border border-slate-100 p-6 shadow-premium flex flex-col"
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* INFO */}
              <div className="flex flex-col flex-1">
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    {product.name}
                  </h3>

                  {/* Temporarily hide price
                  <span className="text-lg md:text-xl text-blue-600 font-semibold">
                    ${product.price}
                  </span>
                  */}
                </div>

                <p className="text-sm md:text-base text-slate-500 mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                {/* Original Buy Now button (kept for future use)
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-auto w-full bg-blue-600 text-white py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-blue-500 transition flex items-center justify-center gap-2"
                >
                  Buy Now
                  <ArrowRight className="w-4 h-4" />
                </button>
                */}

                {/* New disabled button */}
                <button
                  disabled
                  className="mt-auto w-full bg-slate-200 text-slate-500 py-3 rounded-xl text-xs uppercase tracking-widest cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Available soon
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MODAL (sin cambios grandes) */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              className="bg-white rounded-t-[32px] md:rounded-[48px] w-full max-w-4xl p-6 md:p-16 relative"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                <div>
                  <h2 className="text-3xl font-black mb-4">Complete Order</h2>
                  <p className="text-slate-500 mb-8">
                    Securely purchase your {selectedProduct.name}.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl mb-6">
                    <div className="flex justify-between mb-2">
                      <span>{selectedProduct.name}</span>
                      <span>${selectedProduct.price}</span>
                    </div>

                    <div className="flex justify-between border-t pt-3">
                      <span>Total</span>
                      <span className="text-blue-600">${selectedProduct.price}</span>
                    </div>
                  </div>
                </div>

                <Elements stripe={stripePromise}>
                  <CheckoutForm 
                    product={selectedProduct} 
                    onSuccess={() => setSelectedProduct(null)} 
                  />
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