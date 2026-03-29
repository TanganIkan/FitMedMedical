"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "../lib/services-data";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allSubServices = servicesData?.flatMap((cat: any) => cat.subServices || []) ?? [];

  const handleBooking = (platform: "whatsapp" | "telegram") => {
    if (!name || !selectedService) {
      alert("Please fill in your name and choose a service!");
      return;
    }

    const message = `Halo Fit Med Medical, saya *${name}* ingin booking layanan *${selectedService}*. Mohon informasi jadwalnya.`;
    const url = platform === "whatsapp" ? `https://wa.me/6289602695075?text=${encodeURIComponent(message)}` : `https://t.me/FitMedMedical?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm"
          >
            Reservation
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.9]">
            Book A Visit At <span className="text-blue-600 italic underline decoration-blue-100 underline-offset-8">Your Place Now.</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-white rounded-[48px] p-6 md:p-12 border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="rounded-[38px] overflow-hidden shadow-md shadow-blue-900/10 h-[350px] md:h-[450px]">
              <img src="/images/book.png" alt="Fit Med Visit" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <label className="block text-[11px] font-black text-slate-900 uppercase tracking-widest mb-3 ml-2 italic">Patient Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-8 py-5 rounded-[24px] bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white focus:outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
              />
            </div>

            <div>
              <label className="block text-[11px] font-black text-slate-900 uppercase tracking-widest mb-3 ml-2 italic">Choose Treatment</label>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-8 py-5 rounded-[24px] bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white focus:outline-none transition-all font-bold text-slate-800 appearance-none cursor-pointer"
                >
                  <option value="">Select Medical Service</option>
                  {allSubServices.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleBooking("whatsapp")}
                className="flex-1 bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-200"
              >
                <MessageCircle size={18} className="fill-white" />
                Whatsapp Booking
              </button>

              <button
                onClick={() => handleBooking("telegram")}
                className="flex-1 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-400 py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                <Send size={18} />
                Telegram
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
