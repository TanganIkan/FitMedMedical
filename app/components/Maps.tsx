"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Calendar, MapPin, ExternalLink } from "lucide-react";

export default function Maps() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50 h-[600px] flex flex-col md:flex-row">
          <div className="z-20 w-full md:w-[400px] bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl mb-10 border border-white/20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-sm tracking-tight">Fit Med Medical</h3>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </div>
              <p className="text-[10px] leading-relaxed opacity-90">Jl. Dewata Gg. VI No.5, Ubung, Kec. Denpasar Utara, Kota Denpasar, Bali 80115</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs font-bold">4.9</span>
                <div className="flex text-amber-400">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] opacity-70">(1,357)</span>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-80">Working Hours</h4>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="text-sm font-medium">Mon - Sunday</span>
                <span className="text-sm font-bold">24 Hours</span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-80">Contact Details</h4>

              <a href="https://wa.me/62085743333986" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold tracking-tight">+62 857-4333-3986</span>
              </a>

              <a href="mailto:Fitmedbali@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold tracking-tight">Fitmedbali@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold tracking-tight">Book appointment</span>
              </div>
            </div>
          </div>

          <div className="flex-grow relative grayscale-[0.2] contrast-[1.1]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.571441703273!2d115.1937203758654!3d-8.626393391419736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241857d8bfb13%3A0xc406f920be5737f9!2sFit%20Med%20Medical!5e0!3m2!1sid!2sid!4v1711971234567!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
