"use client";

import { motion, Variants } from "framer-motion"; // Tambahkan Variants di sini
import { Syringe, FlaskConical, Stethoscope, Award, ArrowRight } from "lucide-react";

interface Treatment {
  title: string;
  icon: React.ElementType;
}

interface TreatmentsProps {
  onOpenModal: (type: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Treatments({ onOpenModal }: TreatmentsProps) {
  const treatmentsData: Treatment[] = [
    { title: "VACCINATIONS", icon: Syringe },
    { title: "MEDICAL TESTS", icon: FlaskConical },
    { title: "GENERAL HEALTH PANELS", icon: Stethoscope },
    { title: "PRIVATE WELLNESS TESTS", icon: Award },
  ];

  return (
    <section id="treatments" className="py-24 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-4 lg:sticky lg:top-40 flex flex-col pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-black uppercase tracking-widest mb-6 w-fit shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Medical Solutions
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-[0.95]">
              We&apos;ve Got The <span className="text-blue-600 font-black italic underline decoration-blue-100 underline-offset-8">Treatments</span> You Need.
            </h2>
            <p className="mt-8 text-lg text-slate-500 leading-relaxed max-w-xl font-medium">From vaccinations to advanced screenings, Trishnanda Care Centre brings certified medical expertise right to your doorstep.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-8 space-y-4">
            {treatmentsData.map((item, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenModal(item.title)}
                className="w-full bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex items-center justify-between text-left group hover:bg-slate-50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 hover:border-blue-100"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[20px] bg-slate-50 group-hover:bg-blue-600 transition-all duration-500 flex items-center justify-center border border-slate-100 group-hover:border-blue-600 shadow-sm">
                    <item.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase italic">{item.title}</h3>
                </div>

                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:rotate-45 transition-all duration-500 shadow-sm">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
