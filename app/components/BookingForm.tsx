"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "../lib/services-data";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allSubServices = servicesData?.flatMap((cat: any) => cat.subServices || []) ?? [];

  const handleBooking = () => {
    if (!name || !selectedService) {
      alert("Please fill in your name and choose a service!");
      return;
    }
    const message = `Hi Fit Med Medical, I'm *${name}*. I would like to book the *${selectedService}* service. Could you please provide information regarding the available schedule? Thank you!`;
    const url = `https://wa.me/62085743333986?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              <img src="/images/book.webp" alt="Fit Med Visit" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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

            <div className="flex pt-4">
              <button
                onClick={handleBooking}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-200"
              >
                <MessageCircle size={18} className="fill-white" />
                Whatsapp Booking
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
