"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Heart, ShieldCheck, Users, MapPin, Award, Activity } from "lucide-react";

// --- KOMPONEN COUNTER INTERNAL ---
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

// --- DATA STATS ---
const stats = [
  { label: "Patients Served", value: 5000, suffix: "+", icon: Users },
  { label: "Years Experience", value: 10, suffix: "+", icon: Award },
  { label: "Medical Staff", value: 25, suffix: "+", icon: Heart },
  { label: "Bali Coverage", value: 100, suffix: "%", icon: MapPin },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-black uppercase tracking-widest mb-8">
            Our Story
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-8">
            Redefining <span className="text-blue-600 italic">Healthcare</span> <br />
            in the Heart of Bali.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed">
            Trishnanda Care Centre was born from a simple mission: to bridge the gap between quality medical expertise and the comfort of your own home.
          </motion.p>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1584512603306-644342556018?auto=format&fit=crop&q=80&w=800" alt="Medical care in Bali" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-[32px] text-white shadow-xl hidden md:block">
                <p className="text-4xl font-black mb-1">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Certified Staff</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4 text-balance italic">The Trishnanda Legacy</h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Founded in Denpasar, we started as a small team of dedicated doctors who believed that healing begins with peace of mind. Today, we have grown into Bali&apos;s most trusted home medical service provider.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <Activity className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-black text-slate-900 mb-2 uppercase text-[10px] tracking-widest">Our Mission</h4>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed">Providing fast, reliable, and professional medical services at your doorstep 24/7.</p>
                </div>
                <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-black text-slate-900 mb-2 uppercase text-[10px] tracking-widest">Our Vision</h4>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed">To be the leading innovator in personalized home healthcare across Indonesia.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (ANIMATED) --- */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                  <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 flex items-center">
                  <Counter value={stat.value} />
                  <span className="text-blue-500">{stat.suffix}</span>
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE VALUES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Our Core <span className="text-blue-600 italic">Values</span>
            </h2>
            <p className="mt-6 text-slate-500 font-medium italic">The principles that guide every medical visit we make.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Human-First Empathy",
                desc: "We don't just treat symptoms; we care for people with heart and understanding.",
                icon: "❤️",
                color: "bg-rose-50",
              },
              {
                title: "Medical Excellence",
                desc: "Every procedure is performed by licensed professionals following strict medical protocols.",
                icon: "⭐",
                color: "bg-blue-50",
              },
              {
                title: "Absolute Integrity",
                desc: "Transparent pricing and honest consultations. No hidden costs, just pure care.",
                icon: "🤝",
                color: "bg-emerald-50",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[40px] ${value.color} border border-white shadow-sm hover:shadow-2xl transition-all duration-500`}
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[50px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-6">
                  Your Health, Our <br /> <span className="text-blue-200 italic">Priority.</span> Always.
                </h2>
                <p className="text-blue-100 text-lg font-medium leading-relaxed mb-8">Whether you are a traveler enjoying Bali or a local resident in need of care, we ensure medical assistance is just a call away.</p>
                <ul className="space-y-4">
                  {["Licensed Doctors", "Fast Arrival in 30-60 Mins", "Hygienic & Modern Equipment"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] border border-white/20">
                  <h4 className="text-xl font-black mb-2">Need Medical Help?</h4>
                  <p className="text-sm opacity-80 mb-6 font-medium">Contact our 24/7 hotline for immediate consultation or home visit booking.</p>
                  <a href="https://wa.me/628973969711" className="inline-block w-full py-4 bg-white text-blue-600 text-center font-black rounded-2xl shadow-xl hover:scale-[1.02] transition-transform active:scale-95">
                    Contact WhatsApp 24/7
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
