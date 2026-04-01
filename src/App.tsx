import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Careers from '@/pages/Careers';
import Partners from '@/pages/Partners';
import Contact from '@/pages/Contact';
import Store from '@/pages/Store';
import { motion, AnimatePresence } from 'motion/react';
import { FirebaseProvider } from '@/components/FirebaseProvider';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <FirebaseProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
                <Route path="/partners" element={<PageWrapper><Partners /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/store" element={<PageWrapper><Store /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </FirebaseProvider>
    </ErrorBoundary>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
