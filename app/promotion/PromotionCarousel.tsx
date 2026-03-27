"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Zap, Droplets, Thermometer, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PromotionCarousel() {
  const promos = [
    {
      title: "Immunity Booster",
      subtitle: "Defend Your Health, Feel Strong Again",
      price: "1.750K",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1629152204481-22920849306b?auto=format&fit=crop&q=80&w=800",
      color: "from-blue-600/90 to-blue-400/80",
    },
    {
      title: "Hydration Boost",
      subtitle: "Hydrate Your Body, Refresh Your Mind",
      price: "1.850K",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
      color: "from-cyan-600/90 to-cyan-400/80",
    },
    {
      title: "Fever Relief",
      subtitle: "Lower the Heat, Feel Instant Relief",
      price: "2.175K",
      icon: Thermometer,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
      color: "from-indigo-600/90 to-indigo-400/80",
    },
    {
      title: "Energy Kick",
      subtitle: "Restore Your Stamina Fast",
      price: "1.500K",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800",
      color: "from-orange-600/90 to-orange-400/80",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[11px] font-bold uppercase tracking-widest mb-4">March Deal: 5% Off Before 7 AM</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Special <span className="text-blue-600 underline decoration-blue-100  font-black underline-offset-8">IV Therapy</span> Packages.
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex gap-3">
            <button className="promo-prev w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm active:scale-90">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="promo-next w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm active:scale-90">
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Swiper with Scroll Reveal */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".promo-prev",
              nextEl: ".promo-next",
            }}
            pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet custom-bullet" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {promos.map((item, index) => (
              <SwiperSlide key={item.title}>
                <div className="group relative h-[420px] rounded-[40px] overflow-hidden shadow-xl shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 border border-slate-50">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-80 group-hover:opacity-90 transition-opacity`}></div>

                  <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                    <motion.div whileHover={{ rotate: 15 }} className="mb-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <p className="text-[12px] font-black uppercase tracking-widest opacity-80 mb-2 italic">Starting at IDR {item.price}</p>
                    <h3 className="text-3xl font-black leading-none mb-3 tracking-tighter">{item.title}</h3>
                    <p className="text-white/80 font-medium text-sm mb-8 line-clamp-2 leading-relaxed">{item.subtitle}</p>
                    <Link href="#booking" className="w-full py-4.5 bg-white text-blue-600 rounded-2xl font-black text-[15px] text-center shadow-xl shadow-black/10 hover:bg-slate-50 transition-colors active:scale-95">
                      Book Offer Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          margin: 0 5px !important;
          border-radius: 10px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          width: 30px !important;
          background: #2563eb !important;
        }
      `}</style>
    </section>
  );
}
