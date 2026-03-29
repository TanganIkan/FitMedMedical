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
      color: "bg-red-100 text-red-700",
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
          <div className="lg:col-span-6 flex flex-col justify-center z-20">
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
              className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.95] max-w-2xl"
            >
              <span className="block mb-2">Medical Care by</span>
              <span className="relative inline-block text-blue-600 mb-2">
                Professionals
                <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1, duration: 0.8 }} className="absolute bottom-0 left-0 h-2 bg-blue-100 -z-10 rounded-full" />
              </span>
              <span className="block">
                in Your <span className="text-slate-400">Home.</span>
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-6 text-base text-slate-600 sm:text-xl max-w-xl leading-relaxed">
              Fit Med Medical Care Centre provides top-quality healthcare services that are fast, reliable, and supervised by a team of medical experts, delivered directly to your villa, hotel, or residence in Bali.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-12 flex flex-wrap gap-4 items-center">
              <Link
                href="https://wa.me/6281234567890"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-slate-900 transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-2xl shadow-slate-900/20 group italic"
              >
                <div className="relative">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 animate-pulse rounded-full group-hover:border-blue-600 transition-colors" />
                </div>

                <span>Free Consultation</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-500">→</span>
              </Link>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Supervised by a Specialist</span>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-16 lg:mt-0 lg:col-span-6 relative z-10 flex items-center justify-center">
            <div className="relative w-full max-w-none group">
              <div
                className="relative"
                style={{
                  maskImage: "linear-gradient(to bottom, black 70%, transparent 98%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 98%)",
                }}
              >
                <img src="/images/hero.png" alt="Tim Medis FIT MED MEDICAL" className="w-full h-auto object-contain transform scale-[1.0] origin-bottom transition-transform duration-1000 hover:scale-[1.03]" />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-blue-400/10 rounded-full blur-[130px] -z-10 pointer-events-none" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 bg-white/90 backdrop-blur-md p-5 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-50 hidden md:flex items-center gap-4 z-30"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Verified</p>
                  <p className="text-lg font-black text-slate-900 italic">Licensed Doctors</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

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
