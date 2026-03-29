"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Are you actually available 24/7?",
    answer: "Yes, Fit Med Medical provides 24/7 on-call services for home visits and online consultations across Bali. Our medical team is ready whenever you need us.",
  },
  {
    question: "Can I use insurance for treatment?",
    answer: "We provide a medical report and official invoice that you can use to claim reimbursement from your international or local insurance provider.",
  },
  {
    question: "Is the treatment safe? Are you licensed?",
    answer: "Absolutely. All our doctors and nurses are fully licensed (STR) and experienced in providing clinical-grade care in home settings. We follow strict medical protocols.",
  },
  {
    question: "Do your doctors speak English?",
    answer: "Yes, our medical team is fluent in English to ensure clear communication and professional care for both local and international patients.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm"
          >
            Support
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter">
            Frequently Asked <span className="text-blue-600 italic underline decoration-blue-100 underline-offset-8">Questions (FAQ).</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[32px] border transition-all duration-300 ${activeIndex === index ? "bg-blue-50/50 border-blue-100 shadow-lg shadow-blue-900/5" : "bg-white border-slate-100 hover:border-blue-200"}`}
            >
              <button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="w-full px-8 py-6 flex items-center justify-between text-left group">
                <span className={`text-[15px] md:text-lg font-bold transition-colors ${activeIndex === index ? "text-blue-600" : "text-slate-800"}`}>{item.question}</span>
                <div className={`p-2 rounded-full transition-all ${activeIndex === index ? "bg-blue-600 text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600"}`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed text-[14px] md:text-base">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
