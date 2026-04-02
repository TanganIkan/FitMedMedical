import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none">
          <path d="M500,500 L0,500 L500,0 Z" fill="currentColor" className="text-blue-500" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-blue-600/20 text-white">F</div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                Fit Med <span className="text-blue-500">Medical</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8 font-medium italic">Providing premium medical services directly to your doorstep in Bali. Certified professionals, trusted healthcare, 24/7.</p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-blue-500 italic">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Doctors", href: "/doctor" },
                { name: "Journal", href: "/blog" },
                { name: "About Us", href: "/about" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors font-bold text-sm flex items-center gap-2 group italic uppercase tracking-wider">
                    <span className="w-0 h-[2px] bg-blue-500 transition-all group-hover:w-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-blue-500 italic">Medical Services</h4>
            <ul className="space-y-4">
              {["IV Drip Therapy", "Home Care Service", "Lab Medical Test", "Doctor Consultation"].map((item) => (
                <li key={item} className="text-slate-400 font-bold text-sm cursor-default flex items-center gap-2 italic uppercase tracking-wider">
                  <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-blue-500 italic">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <Link href="https://wa.me/6285743333986" target="_blank">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 italic">WhatsApp 24/7</p>
                  <p className="text-sm font-bold text-slate-200">+62 85 743 333 986</p>
                </Link>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 italic">Our Base</p>
                  <p className="text-sm font-bold text-slate-200">Denpasar, Bali, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest italic">© {currentYear} Fit Med Medical Centre. Built with ❤️ in Bali.</p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-500 hover:text-blue-500 text-[10px] font-black uppercase tracking-widest transition-colors italic">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-blue-500 text-[10px] font-black uppercase tracking-widest transition-colors italic">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
