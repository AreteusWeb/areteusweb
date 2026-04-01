import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, HeartPulse } from 'lucide-react';
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6',
        scrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-full',
        scrolled ? 'glass shadow-premium' : 'bg-transparent'
      )}>
        <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
          <img 
            src="https://i.imgur.com/x2IeR9Y.png" 
            alt="ARETEUS Logo" 
            className={cn('transition-all duration-500 object-contain', scrolled ? 'h-10' : 'h-14')}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-slate-50',
                location.pathname === link.path ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-blue-50 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-900 transition-colors hover:bg-slate-100" 
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
            className="absolute top-full left-6 right-6 mt-4 glass rounded-[40px] p-8 flex flex-col gap-3 md:hidden shadow-2xl border border-white/40"
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
                    'text-xl font-black py-4 px-6 rounded-3xl transition-all duration-300 flex items-center justify-between group',
                    location.pathname === link.path 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  {link.name}
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500',
                    location.pathname === link.path ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-blue-600 group-hover:text-white'
                  )}>
                    <HeartPulse size={16} className={cn(location.pathname === link.path ? 'text-white' : '')} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
