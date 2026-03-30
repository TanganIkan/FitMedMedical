"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Award, Briefcase, Verified, Phone, Stethoscope, Heart, Instagram, Linkedin } from "lucide-react";

import { teamData } from "../lib/team-data";

type FilterType = "all" | "doctor" | "nurse";

type StaffMember = (typeof teamData)[0];

export default function DoctorPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const filteredTeam = filter === "all" ? teamData : teamData.filter((t) => t.type === filter);

  return (
    <section className="py-40 bg-slate-50 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-100/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm italic"
            >
              Certified Professionals
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-slate-950 leading-[0.85]">
              Doctors <br /> <span className="text-blue-600">& Nurses.</span>
            </h1>
          </div>

          <div className="flex bg-white p-2 rounded-[32px] shadow-xl shadow-slate-900/5 border border-slate-100 relative">
            {(["all", "doctor", "nurse"] as FilterType[]).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`relative px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors z-10 ${filter === type ? "text-white" : "text-slate-400 hover:text-slate-950"}`}
              >
                {filter === type && <motion.div layoutId="activeFilter" className="absolute inset-0 bg-slate-950 rounded-full -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                {type}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((staff) => (
              <motion.div
                key={staff.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedStaff(staff)}
                className="bg-white p-6 rounded-[50px] border border-slate-200 shadow-sm cursor-pointer group hover:shadow-2xl hover:shadow-blue-900/10 transition-all"
              >
                <div className="aspect-square rounded-[36px] overflow-hidden mb-6 relative">
                  <img src={staff.image} alt={staff.name} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-[13px] font-black italic uppercase text-slate-950 leading-tight px-2 group-hover:text-blue-600 transition-colors">{staff.name}</h3>
                <div className="flex items-center gap-2 mt-3 px-2">
                  {staff.type === "doctor" ? <Stethoscope size={12} className="text-blue-600" /> : <Heart size={12} className="text-emerald-500" />}
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{staff.role}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedStaff && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedStaff(null)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" />

              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.9 }}
                className="relative w-full max-w-5xl bg-white rounded-[60px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20"
              >
                <button onClick={() => setSelectedStaff(null)} className="absolute top-8 right-8 z-20 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all shadow-sm">
                  <X size={20} />
                </button>

                <div className="w-full md:w-[42%] p-10 md:p-14 bg-slate-50 flex flex-col items-center justify-center border-r border-slate-100">
                  <div className="w-full aspect-square rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl mb-8 relative">
                    <img src={selectedStaff.image} alt={selectedStaff.name} className="w-full h-full object-cover" />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 p-5 rounded-3xl text-white shadow-lg shadow-blue-600/40 animate-pulse">
                      <Verified size={28} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black italic uppercase text-slate-950 text-center leading-[0.9] tracking-tighter mb-4">{selectedStaff.name}</h3>
                  <div className="px-5 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] italic border border-blue-100">License: {selectedStaff.str}</div>
                </div>

                <div className="w-full md:w-[58%] p-10 md:p-14 flex flex-col justify-between bg-white">
                  <div className="space-y-12">
                    <div className="grid grid-cols-2 gap-10">
                      <div>
                        <div className="flex items-center gap-2 text-blue-600 mb-4 font-black uppercase text-[10px] tracking-widest italic">
                          <GraduationCap size={16} /> Education
                        </div>
                        <p className="text-slate-950 font-black italic text-base leading-tight">{selectedStaff.education}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-blue-600 mb-4 font-black uppercase text-[10px] tracking-widest italic">
                          <Award size={16} /> Certifications
                        </div>
                        <p className="text-slate-950 font-black italic text-base leading-tight">{selectedStaff.certifications.join(", ")}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-blue-600 mb-4 font-black uppercase text-[10px] tracking-widest italic">
                        <Briefcase size={16} /> Experience ({selectedStaff.experience})
                      </div>
                      <p className="text-slate-500 font-bold italic text-base leading-relaxed pl-6 border-l-4 border-slate-100">{selectedStaff.bio}</p>
                    </div>
                  </div>

                  <div className="mt-14 pt-10 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                        <Instagram size={18} />
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                        <Linkedin size={18} />
                      </div>
                    </div>
                    <button className="bg-slate-950 text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest italic flex items-center gap-4 hover:bg-blue-600 transition-all active:scale-95 shadow-2xl shadow-slate-950/20">
                      <Phone size={16} fill="currentColor" />
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
