"use client";

import { useParams } from "next/navigation";
import { servicesData } from "../../lib/services-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Phone } from "lucide-react";
export default function ServiceCategoryPage() {
  const params = useParams();

  // Mengambil data kategori berdasarkan ID di URL
  const category = servicesData.find((c) => c.id === params.id);

  // Jika ID tidak ditemukan di data
  if (!category) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-black italic uppercase">Service Not Found</h1>
        <Link href="/" className="mt-4 text-blue-600 font-bold underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-12 hover:text-blue-600 transition-colors group">
            <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </Link>

          <header className="mb-20">
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter italic uppercase leading-[0.8]">
              {category.title}
              <span className="text-blue-600">.</span>
            </motion.h1>
            <p className="mt-8 text-slate-500 font-bold text-lg max-w-xl">Explore our specialized {category.title} services, delivered by certified professionals directly to your location in Bali.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 flex flex-col group"
              >
                <div className="aspect-video bg-slate-50 rounded-[32px] mb-8 overflow-hidden border border-slate-100 relative">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight italic uppercase leading-tight">{service.name}</h3>

                <p className="text-slate-500 text-sm font-bold leading-relaxed mb-10 flex-grow">{service.desc}</p>

                <div className=" border-slate-100 flex flex-col gap-6">
                  <div className="flex justify-between items-end">
                    {params.id !== "lab" && <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Price Starts From</div>}
                    {params.id !== "lab" && <div className="text-xl font-black text-blue-600 tracking-tighter">Rp {service.price}</div>}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/services/${params.id}/${service.id}`}
                      className="flex-1 border-2 border-slate-100 text-slate-400 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-50 hover:text-blue-600 transition-all text-center flex items-center justify-center"
                    >
                      See Detail
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
