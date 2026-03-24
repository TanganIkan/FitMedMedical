"use client";

import { motion } from "framer-motion";
import { Stethoscope, Syringe, Activity, FlaskConical, Home, HeartPulse } from "lucide-react";

export default function ServicesGrid() {
  const allServices = [
    {
      title: "IV Vitamin Therapy",
      desc: "Immune booster, hydration, and energy recovery directly at your place.",
      icon: Syringe,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Doctor on Call",
      desc: "Professional medical consultation by licensed doctors 24/7 in Bali.",
      icon: Stethoscope,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Home Care Nursing",
      desc: "Dedicated nursing care for post-surgery or elderly at your home.",
      icon: Home,
      color: "text-orange-600 bg-orange-50",
    },
    {
      title: "Lab Test & Screening",
      desc: "Blood tests, PCR, and general health checkups with fast results.",
      icon: FlaskConical,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Physiotherapy",
      desc: "Recovery and rehabilitation sessions with expert therapists.",
      icon: Activity,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Emergency Care",
      desc: "Instant medical assistance for urgent health situations.",
      icon: HeartPulse,
      color: "text-red-600 bg-red-50",
    },
  ];

  // Variasi animasi untuk container (Parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-slate-50">
      {/* Animated Background SVG */}
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="absolute inset-y-0 left-0 w-1/2 hidden lg:block z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="text-blue-600 fill-current opacity-[0.03] transform rotate-180">
          <path d="M0,0 L1000,0 L1000,1000 C600,1000 0,600 0,0 Z"></path>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Animation */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">Our Expertise</div>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95]">
            Comprehensive <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Medical Services</span> for Your Wellbeing.
          </h3>
        </motion.div>

        {/* Animated Grid Container */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-10 rounded-[40px] shadow-sm bg-white border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 hover:border-blue-100"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium text-sm mb-6">{service.desc}</p>

              <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
