import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const platformLinks = [
  { name: 'Home', path: '/' },
  { name: 'Partners', path: '/partners' },
  { name: 'Careers', path: '/careers' },
  { name: 'Technology', path: '/technology' },
];

const companyLinks = [
  { name: 'About us', path: '/' },
  { name: 'Contact', path: '/contact' },
  { name: 'Store', path: '/store' },
];

const legalLinks = [
  { name: 'Privacy policy', path: '/privacy' },
  { name: 'Terms of service', path: '/terms' },
  { name: 'Cookie policy', path: '/cookies' },
];

const linkClass = 'text-xs font-medium text-slate-500 transition-colors hover:text-slate-900';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 pb-8 pt-14 sm:px-8 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-1 gap-10 md:mb-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src="https://i.imgur.com/x2IeR9Y.png"
                alt="ARETEUS"
                className="h-7 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Pioneering the future of intelligent sensing. Engineering the next evolution of human health.
            </p>
            <a
              href="https://www.linkedin.com/company/areteus/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ARETEUS on LinkedIn"
              className="mt-5 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-slate-900 hover:text-slate-900"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3 md:pl-16">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Platform</h4>
              <ul className="mt-4 space-y-2.5">
                {platformLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Company</h4>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Legal</h4>
              <ul className="mt-4 space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-[11px] leading-relaxed text-slate-400">
            <span className="font-semibold text-slate-500">Disclaimer:</span> This product is a general-purpose wearable technology platform intended for wellness, fitness, and research use only. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or medical condition. The information provided by this system should not be used for medical or health-related decision-making. Always consult a qualified professional for advice.
          </p>
          <p className="mt-3 text-[11px] text-slate-400">
            © {new Date().getFullYear()} ARETEUS. Designed for the future of health.
          </p>
        </div>
      </div>
    </footer>
  );
}
