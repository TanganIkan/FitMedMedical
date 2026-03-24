"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, CheckCircle2, ShieldCheck, UserCheck, Clock3, HeartPlus } from "lucide-react";

export default function Hero() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "24/7 Availability",
      desc: "Our medical team is ready to serve your health needs anytime, day or night.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: UserCheck,
      title: "Expert Medical Team",
      desc: "Care provided directly by licensed doctors and certified professional nurses.",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: Clock3,
      title: "Rapid Response",
      desc: "Reliable and punctual medical services delivered directly to your location.",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: HeartPlus,
      title: "Immediate Assistance",
      desc: "Fast medical intervention when you need it most, ensuring peace of mind.",
      color: "bg-rose-100 text-rose-700",
    },
  ];

  return (
    <section className="relative bg-slate-50 min-h-screen overflow-hidden pt-36 pb-20">
      <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="absolute top-0 right-0 w-1/2 h-full hidden lg:block z-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="text-blue-600 fill-current opacity-[0.03]">
          <path d="M0,0 L1000,0 L1000,1000 C600,1000 0,600 0,0 Z"></path>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 w-fit shadow-sm"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>Bali Medical Home Service</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl font-extrabold text-slate-950 tracking-tighter sm:text-5xl md:text-6xl leading-[0.95] max-w-xl"
            >
              <span className="block">Medical Care Provided by</span>
              <span className="block text-blue-600">
                Professionals <span className="text-slate-950">in</span>
              </span>
              <span className="block">Your Home.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-6 text-base text-slate-600 sm:text-xl max-w-xl leading-relaxed">
              Trishnanda Care Centre provides top-quality healthcare services that are fast, reliable, and supervised by a team of medical experts, delivered directly to your villa, hotel, or residence in Bali.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-12 flex flex-wrap gap-4 items-center">
              <Link
                href="#booking"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                Make an appointment →
              </Link>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Supervised by a Specialist</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="mt-16 lg:mt-0 lg:col-span-5 relative z-20">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgb(0,0,0,0.15)] border-8 border-white group">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                alt="Tim Medis Trishnanda"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Background Decor Anim */}
            <motion.div
              animate={{ rotate: [-12, -8, -12], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-100 rounded-3xl -rotate-12 z-[-1]"
            />
          </motion.div>
        </div>

        {/* HIGHLIGHTS - ON SCROLL ANIMATION */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 group"
            >
              <div className={`w-20 h-20 mb-6 rounded-[24px] ${item.color} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <item.icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed px-2 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
