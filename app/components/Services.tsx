"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { servicesData } from "../lib/services-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function ServicesExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="services-explorer" className="py-24 overflow-hidden min-h-[850px] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm"
          >
            Medical Solutions
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.9]">
            {selectedCategory ? "Explore" : "Certified Medical"} <span className="text-blue-600 italic underline decoration-blue-100 underline-offset-8">At Your Door.</span>
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesData.map((cat, index) => {
                // --- PERBAIKAN DI SINI ---
                // Simpan icon ke variabel CapitalCase supaya React bisa ngerender sebagai komponen
                const IconComponent = cat.icon;

                return (
                  <TiltCard key={cat.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-[48px] p-8 border border-slate-100 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col items-center text-center h-full hover:-translate-y-2 group"
                      style={{ transform: "translateZ(50px)" }}
                    >
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        {/* Panggil variabel IconComponent di sini */}
                        <IconComponent size={32} strokeWidth={2} />
                      </div>

                      <h3 className="text-lg font-black text-slate-900 mb-8 tracking-tight uppercase italic leading-tight">{cat.title}</h3>

                      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full space-y-2.5 mb-10">
                        {cat.subServices.slice(0, 5).map((sub, i) => (
                          <motion.div key={i} variants={itemVariants} className="flex items-center gap-2.5 bg-blue-600 text-white p-3.5 rounded-2xl text-[9px] font-black uppercase tracking-[0.15em] shadow-lg shadow-blue-600/10">
                            <ChevronRight size={12} strokeWidth={3} className="opacity-70" />
                            <span className="truncate">{sub.name}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      <Link
                        href={`/services/${cat.id}`}
                        className="mt-auto w-full py-5 border-2 border-slate-200 text-blue-600 rounded-[24px] font-black text-center text-[9px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95 shadow-sm"
                      >
                        View All Services
                      </Link>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
