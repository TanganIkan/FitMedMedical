"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, Home, ChevronDown, Heart, Syringe, Beaker, Stethoscope, Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsMobileOpen(false);
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ];

  const servicesMenu = [
    { title: "LABORATORY SERVICES", href: "/services/lab", icon: Beaker },
    { title: "HOME CARE SERVICES", href: "/services/home-care", icon: Heart },
    { title: "IV DRIP THERAPY", href: "/services/iv", icon: Syringe },
    { title: "DOCTOR CONSULTATION", href: "/services/doctor", icon: Stethoscope },
  ];

  const otherLinks = [
    { name: "Doctors", href: "/doctor" },
    { name: "Journal", href: "/blog" },
  ];

  return (
    <header className="fixed top-6 w-full z-[100] px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 px-6 py-3 flex items-center justify-between transition-all duration-300">
          <button onClick={() => setIsMobileOpen(true)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-900 hover:bg-blue-50 transition-all">
            <Menu size={20} />
          </button>

          <Link href="/" className="hidden lg:flex items-center gap-2 group shrink-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0 overflow-hidden">
              <Image src="/images/Logo/fitmed-logo.png" alt="Logo Fit Med Medical" fill className="object-contain transition-transform duration-300 group-hover:scale-110" priority />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter italic uppercase">
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
                className={`px-4 py-2 text-[13px] font-bold transition-all rounded-full flex items-center gap-1 uppercase tracking-wide ${isServicesOpen || pathname.startsWith("/services") ? "text-blue-600 bg-blue-50/50" : "text-slate-500"}`}
              >
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-[40px] shadow-2xl border border-slate-50 p-4"
                  >
                    <div className="grid gap-2">
                      {servicesMenu.map((item) => (
                        <Link key={item.title} href={item.href} className="flex items-center gap-4 p-3.5 rounded-[24px] hover:bg-blue-50 transition-all group text-left">
                          <div className="w-11 h-11 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all shrink-0">
                            <item.icon size={20} className="text-blue-600" />
                          </div>
                          <div>
                            <div className="text-[11px] font-black text-slate-900 uppercase italic tracking-wider">{item.title}</div>
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
                <Link href={link.href} className={`px-4 py-2 text-[13px] font-bold transition-all rounded-full uppercase tracking-wide ${pathname.startsWith(link.href) ? "text-blue-600 bg-blue-50/50" : "text-slate-500"}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Book Now (TETAP DI KANAN) */}
          <Link
            href="https://wa.me/62085743333986"
            target="_blank"
            className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full text-[10px] font-black shadow-lg hover:bg-slate-950 transition-all italic uppercase tracking-widest"
          >
            <Phone size={14} className="hidden xs:block" />
            Book Now
          </Link>
        </nav>

        {/* MOBILE SIDEBAR (SLIDE FROM LEFT) */}
        <AnimatePresence>
          {isMobileOpen && (
            <>
              {/* Dark Overlay Backdrop */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[150] lg:hidden" />

              {/* Sidebar Panel */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-[85%] max-w-xs bg-white z-[200] lg:hidden shadow-2xl flex flex-col p-8 overflow-y-auto"
              >
                {/* Header Sidebar */}
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xl font-black text-slate-950 italic uppercase tracking-tighter">Fit Med.</span>
                  <button onClick={() => setIsMobileOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <X size={20} />
                  </button>
                </div>

                {/* Main Links List */}
                <div className="space-y-2 mb-10">
                  {[...navLinks, ...otherLinks].map((link) => (
                    <Link key={link.name} href={link.href} className="flex items-center justify-between py-4 border-b border-slate-50 group">
                      <span className="text-lg font-black italic uppercase text-slate-900 tracking-tight">{link.name}</span>
                      <ArrowRight size={18} className="text-blue-600" />
                    </Link>
                  ))}
                </div>

                {/* Services Section */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Our Services</p>
                  <div className="grid gap-3">
                    {servicesMenu.map((item) => (
                      <Link key={item.title} href={item.href} className="p-4 bg-slate-50 rounded-[24px] flex items-center gap-4 group active:scale-95 transition-all">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                          <item.icon size={20} />
                        </div>
                        <span className="text-[10px] font-black text-slate-900 uppercase italic leading-none">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Sidebar */}
                <div className="mt-auto pt-10">
                  <Link href="https://wa.me/62085743333986" className="w-full py-5 bg-blue-600 text-white rounded-[24px] font-black text-[11px] uppercase tracking-widest italic flex items-center justify-center gap-3">
                    <Phone size={16} /> Emergency Booking
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
