"use client";

import { motion, Variants } from "framer-motion";
import { Instagram, Linkedin, Users, Activity, Shield, Award } from "lucide-react";
import Link from "next/link";

import { teamData } from "../lib/team-data";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function OurTeam() {
  const featuredTeam = teamData.slice(0, 8);

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">Expertise</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
            Meet our 25 <span className="text-blue-600 italic underline decoration-blue-100 underline-offset-8">Professional</span> Doctors & Nurses.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredTeam.map((member, index) => (
            <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} className="group flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-[40px] overflow-hidden shadow-xl mb-6 border-8 border-white group-hover:rotate-2 group-hover:scale-105 transition-all duration-500">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700" />

                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-lg cursor-pointer">
                      <Instagram size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-lg cursor-pointer">
                      <Linkedin size={14} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-[13px] font-black text-slate-900 tracking-tight mb-2 italic uppercase group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/doctor"
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-900/20 group"
          >
            <Users className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Explore Our Full Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
