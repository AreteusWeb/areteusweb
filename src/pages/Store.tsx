import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Zap, ArrowRight, X } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';
import ReferralForm from '@/components/ReferralForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

const products = [
  {
    id: 'areteus-chestpad',
    name: 'ARETEUS Chestpad',
    price: 123,
    description: 'Clinical-grade 12-lead ECG wearable for professional athletes and cardiac patients.',
    image: 'https://i.imgur.com/FyarXK2.png',
    features: ['12-lead ECG', 'AI Diagnostics', '24/7 Monitoring']
  }
];

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <main className="pt-48 pb-32 overflow-hidden">
      <section className="px-6 mb-20 relative text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-50 -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-8xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight leading-[0.9] font-display">
            ARETEUS <span className="text-gradient">Store</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Invest in your heart health with our clinical-grade wearable technology.
          </p>
        </motion.div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[48px] md:rounded-[64px] border border-slate-100 p-6 md:p-12 shadow-premium overflow-hidden flex flex-col md:flex-row gap-10 md:gap-16 items-center"
            >
              <div className="w-full md:w-1/2 aspect-square rounded-[32px] md:rounded-[48px] overflow-hidden shadow-xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <h3 className="text-2xl md:text-5xl font-black text-slate-900 font-display tracking-tight">{product.name}</h3>
                  <span className="text-xl md:text-3xl font-black text-blue-600">${product.price}</span>
                </div>
                <p className="text-base md:text-lg text-slate-500 mb-6 md:mb-10 font-medium leading-relaxed">{product.description}</p>
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 md:gap-4 text-slate-600 font-bold">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-50 flex items-center justify-center">
                        <Zap className="w-3 md:w-3.5 h-3 md:h-3.5 text-blue-600" />
                      </div>
                      <span className="text-sm md:text-base">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-blue-600 text-white py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-sm uppercase tracking-widest hover:bg-blue-500 active:scale-[0.98] shadow-xl shadow-blue-900/20 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3"
                >
                  Buy Now
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-slate-900/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white rounded-t-[32px] md:rounded-[64px] w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto p-6 md:p-20 relative"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all z-10"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
                    Checkout
                  </div>
                  <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 font-display tracking-tight">Complete Order</h2>
                  <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-12 font-medium">Securely purchase your {selectedProduct.name}.</p>
                  
                  <div className="bg-slate-50 p-6 md:p-10 rounded-[24px] md:rounded-[40px] border border-slate-100 mb-8 md:mb-12 shadow-sm">
                    <div className="flex justify-between mb-3 md:mb-4">
                      <span className="text-base md:text-lg text-slate-500 font-medium">{selectedProduct.name}</span>
                      <span className="text-base md:text-lg text-slate-900 font-black">${selectedProduct.price}</span>
                    </div>
                    <div className="flex justify-between pt-4 md:pt-6 border-t border-slate-200">
                      <span className="text-lg md:text-xl text-slate-900 font-black">Total Amount</span>
                      <span className="text-xl md:text-2xl text-blue-600 font-black">${selectedProduct.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pb-12 md:pb-0">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm 
                      product={selectedProduct} 
                      onSuccess={() => setSelectedProduct(null)} 
                    />
                  </Elements>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ReferralForm />
    </main>
  );
}
