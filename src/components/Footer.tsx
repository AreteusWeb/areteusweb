import { HeartPulse, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 pt-48 pb-16 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-30 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 mb-24 md:mb-32">
          <div className="lg:col-span-5 max-w-sm">
            <Link to="/" className="inline-block mb-8 md:mb-10 group">
              <img 
                src="https://i.imgur.com/x2IeR9Y.png" 
                alt="ARETEUS Logo" 
                className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium mb-8 md:mb-10">
              Pioneering the future of wearable health technology. Clinical-grade heart monitoring, seamlessly integrated into your lifestyle.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="https://www.linkedin.com/company/areteus/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:pl-20">
            <div>
              <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8 md:mb-10">Platform</h4>
              <ul className="space-y-4 md:space-y-6">
                <li><Link to="/" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">Home</Link></li>
                <li><Link to="/store" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">Store</Link></li>
                <li><Link to="/partners" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">Partners</Link></li>
                <li><Link to="/careers" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8 md:mb-10">Company</h4>
              <ul className="space-y-4 md:space-y-6">
                <li><Link to="/" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">About Us</Link></li>
                <li><Link to="/contact" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8 md:mb-10">Legal</h4>
              <ul className="space-y-4 md:space-y-6">
                <li><a href="#" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">Terms of Service</a></li>
                <li><a href="#" className="text-base md:text-lg text-slate-500 hover:text-blue-600 transition-colors font-medium">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} ARETEUS. Designed for the future of health.
          </p>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Clinical Grade
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              AI Powered
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Wearable Tech
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
