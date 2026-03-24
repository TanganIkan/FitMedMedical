"use client";

import { motion, Variants } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export default function OurTeam() {
  const team = [
    {
      name: "dr. I Gede Wahyu Drana P., S.Ked",
      role: "General Practitioner",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Ns. Putu Agus S., S.Kep",
      role: "Emergency Nurse Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "dr. Ni Made Indah P., S.Ked",
      role: "Medical Consultant",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* --- DYNAMIC BACKGROUND SHAPES --- */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">Professional Care</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] max-w-3xl">
            Meet Our <span className="text-blue-600 italic underline decoration-blue-100 underline-offset-8">Expert</span> Medical Team.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants} // Sekarang aman karena ada type Variants di atas
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl mb-8 border-[12px] border-white transition-all duration-700 group-hover:shadow-blue-600/10 group-hover:-translate-y-4 group-hover:rotate-1">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-10 gap-4 translate-y-4 group-hover:translate-y-0">
                  <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xl">
                    <Instagram className="w-5 h-5" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xl">
                    <Linkedin className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              <div className="text-center px-4">
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2 transition-colors group-hover:text-blue-600">{member.name}</h3>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[10px] uppercase tracking-widest shadow-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
