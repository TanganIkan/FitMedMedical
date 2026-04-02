"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Clock, Heart, ArrowRight, Zap, Award, Globe, HeartPulse } from "lucide-react";
import BookingForm from "../components/BookingForm";

const fadeInVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="relative w-full h-screen overflow-hidden group bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105">
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/50 pointer-events-none" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="text-[9px] font-black text-white uppercase tracking-[0.5em] italic">Scroll to Explore</div>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>

        <div className="absolute bottom-12 left-12 z-10 pointer-events-none">
          <h2 className="text-white/10 text-4xl md:text-6xl font-black italic uppercase tracking-tighter transition-colors duration-1000 group-hover:text-white/20">
            Fit Med <span className="opacity-50">Medical.</span>
          </h2>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInVariants} className="text-4xl md:text-6xl font-black tracking-tighter mb-16 italic uppercase text-slate-900">
            One Group, <span className="text-blue-600">Total Care.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="md:col-span-2 bg-white p-12 md:p-16 rounded-[60px] text-slate-950 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative group border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:border-blue-600/20"
            >
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-100 transition-all duration-700" />

              <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center md:items-start">
                <div className="w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-200 group-hover:rotate-6 transition-transform duration-500">
                  <Zap size={44} fill="currentColor" />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <div className="text-5xl font-black italic tracking-tighter text-slate-950 leading-none">FAST</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">Response Team</div>
                </div>
              </div>

              <div className="relative z-10 w-full md:w-2/3">
                <div className="flex gap-3 mb-8">
                  <div className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-100 shadow-sm shadow-blue-100/50">On-Call 24/7</div>
                  <div className="px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full text-[9px] font-black uppercase tracking-widest border border-slate-100 italic">Villa Exclusive</div>
                </div>

                <h3 className="text-4xl md:text-6xl font-black italic uppercase text-slate-950 leading-[0.85] tracking-tighter mb-8">
                  Bali Home <br />
                  <span className="text-blue-600 group-hover:text-slate-950 transition-colors duration-500">Medical Service</span>
                </h3>

                <p className="text-slate-500 font-bold text-lg leading-relaxed italic max-w-xl border-l-4 border-blue-600/10 pl-6 group-hover:border-blue-600 transition-all duration-500">
                  What began as a simple sick leave letter service is now a <span className="text-slate-950">group of medical solutions</span> covering every health need in Bali.
                </p>

                <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Zap size={160} className="text-slate-950" />
                </div>
              </div>
            </motion.div>

            <Link href="/services/iv" className="block group h-full">
              <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="bg-blue-600 p-12 md:p-14 rounded-[60px] text-white flex flex-col min-h-[500px] overflow-hidden relative transition-all duration-500 hover:bg-slate-950 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />

                <div className="flex justify-end relative z-10">
                  <div className="px-4 py-1.5 bg-white/10 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] italic backdrop-blur-sm">Featured Service</div>
                </div>

                <div className="flex-grow flex flex-col justify-center relative z-10">
                  <h3 className="text-4xl md:text-5xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8 group-hover:scale-105 transition-transform duration-500 origin-left">
                    IV Drip <br />
                    <span className="text-blue-200 group-hover:text-blue-400 transition-colors">Ecosystem</span>
                  </h3>
                  <p className="text-blue-50/80 font-bold text-sm md:text-base leading-relaxed max-w-[280px] italic">Specialized recovery drips for Bali Belly, Hangover, and Immunity. Rapid response to your location.</p>
                </div>

                <div className="mt-auto relative z-10 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-transparent transition-all duration-500 shadow-xl">
                    <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] leading-none mb-1.5 opacity-60">Explore</span>
                    <span className="text-[13px] font-black uppercase tracking-[0.1em] text-white">All IV Solutions</span>
                  </div>
                </div>
              </motion.div>
            </Link>

            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="bg-slate-950 p-12 md:p-14 rounded-[60px] text-white flex flex-col justify-between overflow-hidden relative group border border-white/5 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-700" />

              <div className="relative z-10">
                {/* BADGE DIATAS JUDUL */}
                <div className="flex mb-8">
                  <div className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">Live 24/7</div>
                </div>

                <h3 className="text-4xl md:text-5xl font-black italic uppercase leading-[0.85] tracking-tighter">
                  Pharmacy <br />
                  <span className="text-blue-500 group-hover:text-white transition-colors duration-500">Network</span>
                </h3>

                <p className="text-slate-400 mt-8 font-bold text-sm md:text-base leading-relaxed italic max-w-[260px] group-hover:text-slate-200 transition-colors">
                  From lab tests to 24/7 prescription delivery, all managed under one professional roof.
                </p>
              </div>

              <div className="mt-12 relative z-10 flex items-center justify-between">
                <div className="w-16 h-16 rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-blue-600/20">
                  <Globe className="w-8 h-8 transition-transform duration-1000 group-hover:rotate-[360deg]" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col items-end opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">Global Access</span>
                  <div className="flex items-center gap-2 text-white font-black text-[11px] uppercase tracking-widest">
                    Full Catalog <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="md:col-span-2 bg-white p-12 md:p-16 rounded-[60px] border border-slate-100 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:border-blue-600/20"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="w-full md:w-1/2 relative">
                <div className="relative z-10 aspect-[4/3] rounded-[40px] overflow-hidden border-[10px] border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                  <img src="/images/trusted.webp" alt="Medical Team" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60" />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-[32px] shadow-xl z-20 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                  <div className="text-white font-black text-3xl italic leading-none">
                    45k<span className="text-blue-200">+</span>
                  </div>
                  <div className="text-[8px] font-black text-blue-100 uppercase tracking-widest mt-1">Verified Patients</div>
                </div>
              </div>

              <div className="w-full md:w-1/2 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-blue-500" />
                  <span className="text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] italic">Social Proof</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black italic uppercase text-black leading-[0.9] tracking-tighter">
                  Trusted By <br />
                  <span className="text-blue-500">Thousands.</span>
                </h3>

                <p className="text-slate-400 mt-8 font-bold text-base md:text-lg leading-relaxed italic border-l-2 border-white/10 pl-6 group-hover:border-blue-500 transition-colors">
                  We&apos;ve served over <span className="text-blue-500">45,000+ happy patients</span>, bridging the gap between clinical excellence and home comfort.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm italic">Why We Exist?</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-slate-950 mb-10 leading-[0.9]">
                Healthcare Shouldn&apos;t <br /> Be A <span className="text-blue-600">Burden.</span>
              </h2>
              <p className="text-slate-500 font-bold text-lg mb-12 max-w-lg italic">We believe in professional care at exactly when and where you need it, skipping the Bali traffic and long clinic queues.</p>
            </motion.div>

            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInVariants} className="space-y-6 lg:pt-20">
              {["No more 2-hour traffic to the hospital.", "No more language barriers with staff.", "No more endless insurance paperwork.", "No more waiting rooms or clinic queues."].map((text, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-red-200">
                    <span className="text-xs font-black italic">✕</span>
                  </div>
                  <span className="text-slate-700 font-black tracking-tight italic uppercase text-sm md:text-base group-hover:text-blue-600 transition-colors">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="relative bg-slate-950 rounded-[60px] md:rounded-[100px] p-12 md:p-24 overflow-hidden group border-[12px] border-white shadow-2xl shadow-blue-900/10"
          >
            {/* Background Ornament */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex flex-col items-center md:items-start">
                {/* LIVE BADGE */}
                <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 shadow-xl mb-10">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] italic">Active Patient Pulse</span>
                </div>

                <h3 className="text-white text-[12px] font-black uppercase tracking-[0.5em] mb-4 opacity-40">Trusted By Over</h3>

                <div className="text-[100px] md:text-[220px] font-black text-white italic tracking-[-0.08em] leading-none transition-all duration-700 group-hover:tracking-normal group-hover:text-blue-500">
                  45k<span className="text-blue-600 group-hover:text-white">+</span>
                </div>
              </div>

              <div className="max-w-xs text-center md:text-left border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-12">
                <p className="text-white text-2xl md:text-4xl font-black italic tracking-tighter leading-tight mb-6">
                  Real Lives. <br /> <span className="text-blue-500">Real Recovery.</span>
                </p>{" "}
                {/* Pastikan di sini penutupnya </p> sesuai dengan pembukanya */}
                <p className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] leading-relaxed">Successfully delivering professional healthcare directly to villas across the entire Bali region.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 rounded-t-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Swift Response", desc: "Our medical team arrives at your villa within 60 minutes across Bali.", icon: Clock },
              { title: "Certified Pro", desc: "Every doctor and nurse is fully licensed with international clinical standards.", icon: Award },
              { title: "Personal Care", desc: "A tailored medical ecosystem focused on solving your single health problem.", icon: Heart },
            ].map((v, i) => (
              <motion.div key={i} initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInVariants} className="text-center group">
                <div className="w-20 h-20 bg-white/5 rounded-[32px] mx-auto flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-white italic uppercase mb-4 tracking-tighter">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white border-t border-slate-50">
        <BookingForm />
      </div>
    </main>
  );
}
