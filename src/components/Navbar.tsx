import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Technology', path: '/technology' },
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
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-slate-200/80'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3 py-4">
          <img
            src="https://i.imgur.com/x2IeR9Y.png"
            alt="ARETEUS"
            className={cn(
              'transition-all duration-300 object-contain',
              scrolled ? 'h-8' : 'h-9'
            )}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative py-6 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200',
                  active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute left-0 -bottom-px h-px w-full bg-slate-900 origin-left transition-transform duration-300',
                    active ? 'scale-x-100' : 'scale-x-0'
                  )}
                />
              </Link>
            );
          })}

          <Link
            to="/get-started"
            className={cn(
              'relative py-6 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200',
              location.pathname === '/get-started'
                ? 'text-slate-900'
                : 'text-slate-500 hover:text-slate-900'
            )}
          >
            Get Started
            <span
              className={cn(
                'absolute left-0 -bottom-px h-px w-full bg-slate-900 origin-left transition-transform duration-300',
                location.pathname === '/get-started' ? 'scale-x-100' : 'scale-x-0'
              )}
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-200"
          >
            <div className="px-6 py-4 flex flex-col">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'py-3.5 text-base font-medium border-b border-slate-100 transition-colors',
                      active ? 'text-slate-900' : 'text-slate-500'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/get-started"
                className={cn(
                  'py-3.5 text-base font-medium border-b border-slate-100 transition-colors',
                  location.pathname === '/get-started' ? 'text-slate-900' : 'text-slate-500'
                )}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
