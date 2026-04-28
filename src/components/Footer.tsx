import { HeartPulse, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 pt-12 pb-8 px-6 relative overflow-hidden bg-white">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-10">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-4 group">
              <img 
                src="https://i.imgur.com/x2IeR9Y.png" 
                alt="ARETEUS Logo" 
                className="h-7 md:h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium mb-4 max-w-sm">
              Pioneering the future of intelligent monitoring. Engineering the next evolution of human health.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/areteus/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-20">
            <div>
              <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">Home</Link></li>
                <li><Link to="/partners" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">Partners</Link></li>
                <li><Link to="/careers" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">About Us</Link></li>
                <li><Link to="/contact" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">Contact</Link></li>
                <li><Link to="/store" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">Store</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-3 w-full">
            <p className="text-[10px] text-slate-500 font-medium tracking-tight leading-relaxed">
              <span className="font-bold">Disclaimer:</span> This product is designed for entertainment and educational purposes only. It is not intended for medical diagnosis, treatment, or any healthcare decision-making. Please do not rely on this device for medical advice or diagnosis. Always consult with qualified healthcare professionals for any health-related concerns.
            </p>
            <p className="text-[10px] text-slate-400 font-medium tracking-tight">
              © {new Date().getFullYear()} ARETEUS. Designed for the future of health.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
