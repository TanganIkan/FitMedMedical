"use client";

import { useParams } from "next/navigation";
import { servicesData } from "../../../lib/services-data"; // Gunakan @ agar path aman
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, Phone, BadgeCheck, Zap, ShieldCheck, Clock } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ServiceDetailPage() {
  const params = useParams();
  const category = servicesData.find((c) => c.id === params.id);
  const service = category?.subServices.find((s) => s.id === params.slug);

  if (!service || !category) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-black italic uppercase text-slate-900">Service Not Found</h1>
        <Link href="/" className="mt-4 text-blue-600 font-bold underline">
          Back to Home
        </Link>
      </div>
    );
  }

  if (params.id === "lab" && "items" in service) {
    return (
      <main className="bg-white min-h-screen pt-40 pb-24 px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <Link href={`/services/${params.id}`} className="inline-flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase mb-12 hover:text-blue-600 transition-colors group">
            <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1.5 transition-transform" />
            Back to Categories
          </Link>

          <header className="mb-20">
            <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter italic uppercase leading-[0.9]">
              List Service Of <br />
              <span className="text-blue-600">{service.name}</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.items?.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group border-[1.5px] border-slate-100 rounded-[40px] p-5 flex flex-col h-full hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
              >
                <div className="aspect-square rounded-[28px] overflow-hidden mb-6 border border-slate-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>

                <h3 className="font-black text-slate-900 text-lg mb-2 uppercase italic leading-tight tracking-tight">{item.name}</h3>
                <p className="text-slate-500 text-[11px] mb-8 flex-grow leading-relaxed italic line-clamp-3">{item.desc}</p>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/62085743333986?text=Hi%20Fit%20Med%20Medical,%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(item.name)}%20service.%20Could%20you%20please%20provide%20more%20information%20about%20the%20available%20schedule?%20Thank%20you!`}
                    target="_blank"
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-600/20 hover:bg-blue-600 transition-all"
                  >
                    <Phone size={14} fill="white" /> Consult Now
                  </a>
                  <Link
                    href={`/services/${params.id}/${params.slug}/${item.id}`}
                    className="w-full border-2 border-slate-100 text-slate-400 py-4 rounded-2xl text-center font-black text-[10px] uppercase tracking-widest block hover:text-blue-600 hover:border-blue-600 transition-all"
                  >
                    See Detail
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-left">
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link href={`/services/${params.id}`} className="inline-flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-blue-600 transition-colors group">
              <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1.5 transition-transform" />
              Back to {category.title}
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-7 lg:sticky lg:top-40">
              <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[48px] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 flex flex-col gap-12">
              <div>
                <h1 className="text-4xl lg:text-7xl font-black text-slate-950 tracking-tighter italic leading-[0.8] mb-8">
                  {service.name}
                  <span className="text-blue-600">.</span>
                </h1>
                <p className="text-slate-500 text-lg italic leading-relaxed">&quot;{service.desc}&quot;</p>
              </div>

              {"benefits" in service && service.benefits && service.benefits.length > 0 && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-100" />
                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Key Benefits</h4>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>
                  <div className="grid gap-4">
                    {service.benefits.map((benefit: { title: string; text: string }, i: number) => (
                      <motion.div key={i} whileHover={{ x: 10 }} className="flex gap-5 p-6 rounded-[32px] bg-slate-50 border border-slate-100 transition-colors hover:border-blue-100">
                        <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                          <BadgeCheck size={20} strokeWidth={2.5} />
                        </div>
                        <div className="text-left">
                          {" "}
                          <p className="font-black text-slate-900 uppercase italic text-sm mb-1">{benefit.title}</p>
                          <p className="text-slate-500 text-[13px] font-semibold leading-relaxed whitespace-pre-line">{benefit.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
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
                    Lab Equipment
                  </span>
                </div>
              </div>

              <div className="mt-4 p-10 rounded-[48px] bg-slate-950 text-white relative overflow-hidden group shadow-2xl shadow-blue-900/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-600/40 transition-all duration-700" />

                <div className="relative z-10 flex flex-col gap-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Start From</p>
                      <h2 className="text-4xl font-black tracking-tighter italic uppercase">IDR {service.price}</h2>
                    </div>
                    <Zap className="text-blue-500 fill-blue-500 animate-pulse" size={32} />
                  </div>

                  <a
                    href={`https://wa.me/62085743333986?text=Hi%20Fit%20Med%20Medical,%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(service.name)}%20service.%20Could%20you%20please%20provide%20more%20information%20about%20the%20available%20schedule?%20Thank%20you!`}
                    target="_blank"
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] text-center shadow-xl shadow-blue-600/30 hover:bg-white hover:text-blue-600 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3 group"
                  >
                    <Phone size={16} className="group-hover:animate-bounce" />
                    Book This Test Now
                  </a>

                  <p className="text-[9px] text-center font-bold text-slate-500 uppercase tracking-widest opacity-60">Home Service Available Across Bali</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- EXPLORE MORE --- */}
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
                        className="w-full py-4.5 bg-slate-900 text-white rounded-2xl font-black text-[15px] text-center hover:bg-blue-600 hover:text-white uppercase  transition-all flex items-center justify-center shadow-lg"
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
