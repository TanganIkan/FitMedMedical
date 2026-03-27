"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimoni() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Tourist from Australia",
      review: "Amazing service! The doctor arrived at our villa in Seminyak within 30 minutes. Very professional and helpful for my daughter's ear infection.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "Budi Santoso",
      role: "Local Resident",
      review: "Sangat terbantu dengan layanan home care nursing-nya. Perawatnya sabar dan telaten merawat orang tua saya di rumah. Sangat direkomendasikan!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=budi",
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Nomad",
      review: "The IV Vitamin therapy is a lifesaver for Bali Belly. Professional medical staff and very clean equipment. 5 stars for Trishnanda!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=elena",
    },

    {
      name: "Elena Rodriguez",
      role: "Digital Nomad",
      review: "The IV Vitamin therapy is a lifesaver for Bali Belly. Professional medical staff and very clean equipment. 5 stars for Trishnanda!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=elena",
    },
  ];

  return (
    <section id="testimonials" className="py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Google Reviews</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              What Our <span className="text-blue-600">Patients</span> Say.
            </h2>
          </motion.div>

          <div className="flex gap-3">
            <button className="testi-prev w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-90">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="testi-next w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-90">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".testi-prev",
              nextEl: ".testi-next",
            }}
            pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet custom-bullet" }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 h-full flex flex-col group">
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-10 h-10 text-blue-50 opacity-0 group-hover:opacity-100 transition-opacity absolute top-10 right-10" />

                  <p className="text-slate-600 italic leading-relaxed mb-8 flex-grow font-medium">&quot;{item.review}&quot;</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                    <div>
                      <h4 className="font-black text-slate-900 text-sm tracking-tight">{item.name}</h4>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
