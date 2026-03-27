"use client";

import { motion } from "framer-motion";

export default function Partner() {
  const partners = ["Allianz", "Prudential", "Manulife", "AIA", "AXA Mandiri", "FWD Insurance", "BPJS Kesehatan", "Adamedika", "Fullerton Health", "SOS International"];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Trusted by leading insurance & medical providers</p>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center px-12 py-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter italic">
                {partner}
                <span className="text-blue-600">.</span>
              </span>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
