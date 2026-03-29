"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, Home, ChevronDown, Heart, Syringe, Beaker, Stethoscope } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ];

  const servicesMenu = [
    {
      title: "LABORATORY SERVICES",
      description: "Comprehensive blood & diagnostic tests",
      href: "/services/lab",
      icon: Beaker,
    },
    {
      title: "HOME CARE SERVICES",
      description: "Professional medical care at your home",
      href: "/services/home-care",
      icon: Heart,
    },
    {
      title: "IV DRIP THERAPY",
      description: "Hydration & vitamin boost treatments",
      href: "/services/iv",
      icon: Syringe,
    },
    {
      title: "DOCTOR CONSULTATION",
      description: "Expert medical advice & check-ups",
      href: "/services/doctor",
      icon: Stethoscope,
    },
  ];

  const otherLinks = [
    { name: "Doctors & Nurses", href: "/doctor" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header className="fixed top-6 w-full z-[100] px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 px-6 py-3 flex items-center justify-between transition-all duration-300">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 pl-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200">
              <span className="text-white font-bold text-lg -rotate-3 italic">F</span>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter hidden sm:block italic uppercase">
              Fit Med Medical<span className="text-blue-600">.</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-[13px] font-bold transition-all rounded-full flex items-center gap-2 uppercase tracking-wide
                    ${pathname === link.href ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-blue-600 hover:bg-slate-50"}`}
                >
                  {link.name === "Home" && <Home size={14} />}
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button
                className={`px-4 py-2 text-[13px] font-bold transition-all rounded-full flex items-center gap-1 uppercase tracking-wide
                  ${isServicesOpen || pathname.startsWith("/services") ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-blue-600 hover:bg-slate-50"}`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-50 p-4"
                  >
                    <div className="grid gap-2">
                      {servicesMenu.map((item) => (
                        <Link key={item.title} href={item.href} className="flex items-center gap-4 p-3.5 rounded-[24px] hover:bg-blue-50 transition-all group text-left">
                          <div className="w-11 h-11 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-md group-hover:shadow-blue-200/20 transition-all shrink-0">
                            <item.icon size={20} className="text-blue-600" />
                          </div>
                          <div>
                            <div className="text-[11px] font-black text-slate-900 leading-none mb-1.5 uppercase italic tracking-wider">{item.title}</div>
                            <div className="text-[10px] text-slate-400 font-bold leading-tight">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {otherLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="px-4 py-2 text-[13px] font-bold text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all rounded-full uppercase tracking-wide">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="https://wa.me/6281935250752"
            target="_blank"
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-3.5 rounded-full text-[10px] font-black shadow-2xl shadow-slate-900/10 hover:bg-slate-900 hover:shadow-blue-600/20 transition-all duration-500 active:scale-95 group relative overflow-hidden"
          >
            <div className="relative z-10">
              <Phone size={14} className="group-hover:rotate-12 transition-transform duration-500" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:border-blue-600 animate-pulse transition-colors" />
            </div>

            <span className="relative z-10 italic uppercase tracking-[0.25em] ml-1">Book Now</span>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
