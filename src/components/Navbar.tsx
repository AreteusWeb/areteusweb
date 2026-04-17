import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, HeartPulse, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Store', path: '/store' },
  { name: 'Careers', path: '/careers' },
  { name: 'Partners', path: '/partners' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6',
        scrolled ? 'py-3 md:py-4' : 'py-5 md:py-7'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-2xl md:rounded-full border',
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-slate-200 shadow-[0_18px_70px_-35px_rgba(15,23,42,0.45)] px-4 md:px-6 py-2.5'
          : 'bg-white/70 backdrop-blur-lg border-slate-200/80 px-4 md:px-6 py-3'
      )}>
        <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02] active:scale-[0.99]">
          <img 
            src="https://i.imgur.com/x2IeR9Y.png" 
            alt="ARETEUS Logo" 
            className={cn('transition-all duration-500 object-contain', scrolled ? 'h-9 md:h-10' : 'h-11 md:h-12')}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'relative px-4 lg:px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full',
                location.pathname === link.path
                  ? 'text-slate-900'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-white rounded-full border border-slate-200 shadow-sm -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors hover:bg-slate-200" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-4 right-4 md:left-6 md:right-6 mt-3 bg-white/95 backdrop-blur-xl rounded-3xl p-5 flex flex-col gap-2 md:hidden shadow-2xl border border-slate-200"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.1, duration: 0.5 }}
              >
                <Link
                  to={link.path}
                  className={cn(
                    'text-lg font-semibold py-3.5 px-4 rounded-2xl transition-all duration-300 flex items-center',
                    location.pathname === link.path 
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
