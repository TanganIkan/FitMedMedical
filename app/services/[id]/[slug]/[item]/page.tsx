"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useParams } from "next/navigation";
import { servicesData } from "../../../../lib/services-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Phone, BadgeCheck, Zap, ShieldCheck, Clock } from "lucide-react";

// 1. DEFINISIKAN INTERFACE (Bentuk Data)
interface Benefit {
  title: string;
  text: string;
}

interface LabItem {
  id: string;
  name: string;
  price: string;
  desc: string;
  image: string;
  benefits?: Benefit[]; // Tanda ? berarti boleh ada, boleh tidak
}

export default function ItemDetailPage() {
  const params = useParams();

  const category = servicesData.find((c) => c.id === params.id);
  const subService = category?.subServices.find((s) => s.id === params.slug);

  const item = subService && "items" in subService ? (subService.items as LabItem[]).find((i) => i.id === params.item) : null;

  if (!item || !category || !subService) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white text-left">
        <h1 className="text-2xl font-black italic uppercase text-slate-900">Service Not Found</h1>
        <Link href="/" className="mt-4 text-blue-600 font-bold underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen text-left">
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* NAVIGATION */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link href={`/services/${params.id}/${params.slug}`} className="inline-flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-blue-600 transition-colors group">
              <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1.5 transition-transform" />
              Back to {subService?.name}
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* LEFT: IMAGE */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-7 lg:sticky lg:top-40">
              <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest border border-white/50 shadow-xl">Lab Professional</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <h1 className="text-4xl lg:text-7xl font-black text-slate-950 tracking-tighter italic uppercase leading-[0.8] mb-8">
                  {item.name}
                  <span className="text-blue-600">.</span>
                </h1>
                <p className="text-slate-500 text-lg font-bold leading-relaxed italic">&quot;{item.desc}&quot;</p>
              </div>

              {item.benefits && item.benefits.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-100" />
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Test Benefits</h4>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>
                  <div className="grid gap-3">
                    {item.benefits.map((b: Benefit, i: number) => (
                      <motion.div key={i} whileHover={{ x: 5 }} className="flex gap-4 p-5 rounded-[24px] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                          <BadgeCheck size={18} strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="font-black text-slate-900 uppercase italic text-[12px] mb-0.5">{b.title}</p>
                          <p className="text-slate-500 text-[11px] font-semibold leading-relaxed whitespace-pre-line">{b.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-5 rounded-3xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                  <Clock className="text-blue-600" size={18} strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase text-blue-700 tracking-widest leading-none">
                    Fast Results
                    <br />
                    24-48 Hours
                  </span>
                </div>
                <div className="p-5 rounded-3xl bg-emerald-50/50 border border-emerald-100 flex items-center gap-3">
                  <ShieldCheck className="text-emerald-600" size={18} strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase text-emerald-700 tracking-widest leading-none">
                    Certified
                    <br />
                    Lab Tool
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex justify-between items-end"></div>

                <a
                  href={`https://wa.me/6281935250752?text=Halo%20Trishnanda,%20saya%20ingin%20melakukan%20tes%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] text-center shadow-xl shadow-blue-600/30 hover:bg-black hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3 group"
                >
                  <Phone size={16} className="group-hover:animate-bounce" />
                  Book This Test Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.9] italic  uppercase max-w-4xl">
              Explore More <br className="hidden md:block" />
              <span className="text-blue-600">{category.title}.</span>
            </h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {category.subServices
              .filter((s) => s.id !== params.slug)
              .map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative h-[420px] rounded-[40px] overflow-hidden shadow-xl shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2">
                    <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute inset-0 p-10 flex flex-col justify-end text-white text-left">
                      <Zap className="mb-4 text-blue-400" size={24} />
                      <p className="text-[12px] font-black uppercase tracking-widest opacity-80 mb-2 italic">IDR {item.price}</p>
                      <h3 className="text-3xl font-black leading-none mb-3 tracking-tighter italic uppercase">{item.name}</h3>
                      <Link
                        href={`/services/${params.id}/${item.id}`}
                        className="w-full py-4.5 bg-white text-blue-600 rounded-2xl font-black text-[15px] text-center hover:bg-slate-950 hover:text-white transition-all uppercase tracking-widest"
                      >
                        See Detail
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
