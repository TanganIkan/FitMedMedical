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
      name: "Thomas Wright",
      role: "Tourist from UK",
      review: "Incredible response time! I was struggling with severe dehydration in Canggu. The Fit Med team arrived at my villa within 25 minutes for an IV drip. Professional and very clean equipment.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=thomas",
    },
    {
      name: "Siti Aminah",
      role: "Local Resident",
      review: "Layanan home care yang sangat memuaskan. Perawat Fit Med sangat telaten membantu perawatan luka pasca operasi ibu saya di rumah. Komunikasinya juga sangat baik via WhatsApp.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=siti",
    },
    {
      name: "Markus Schmidt",
      role: "Digital Nomad",
      review: "The best medical service for nomads in Bali. I had the 'Bali Belly' and they saved my week. The doctor explained everything clearly and the price is very reasonable for the quality.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=markus",
    },
    {
      name: "Jessica Chen",
      role: "Visitor from Singapore",
      review: "Professional lab testing right at our hotel. We needed PCR tests for travel and the process was so smooth. Results came out fast. Fit Med is definitely our go-to in Denpasar.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=jessica",
    },
    {
      name: "I Wayan Gede",
      role: "Warga Denpasar",
      review: "Sangat praktis tidak perlu antre di RS. Dokter datang langsung ke rumah untuk cek kesehatan rutin. Alat medisnya lengkap dan dokternya sangat ramah. Sukses terus Fit Med Medical!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=wayan",
    },
    {
      name: "Sophie Laurent",
      role: "Expat from France",
      review: "High-quality nursing care. I used their service for my vitamin boosters regularly. They are punctual, hygienic, and very skilled. Best mobile medical team in the Ubung area.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sophie",
    },
    {
      name: "David Miller",
      role: "Tourist from USA",
      review: "Quick, efficient, and professional. Had a minor scooter accident and they handled the cleaning and dressing of my wounds perfectly at my accommodation. Truly a lifesaver!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=david",
    },
    {
      name: "Dewi Pratama",
      role: "Ibu Rumah Tangga",
      review: "Layanan vaksinasi anak di rumah sangat membantu. Anak jadi tidak trauma karena suasana rumah lebih tenang. Terima kasih Fit Med sudah mempermudah urusan kesehatan keluarga kami.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=dewi",
    },
    {
      name: "Anders Nielsen",
      role: "Visitor from Denmark",
      review: "Top-notch medical assistance. The coordination via WhatsApp was very fast. The nurse was very gentle during the blood draw. 10/10 for hospitality and medical standards.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=anders",
    },
    {
      name: "Lucas Silva",
      role: "Surfer from Brazil",
      review: "Great experience with their physiotherapy and medical check-up. They understand the needs of active travelers. Very transparent with pricing and no hidden costs. Recommended!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=lucas",
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
