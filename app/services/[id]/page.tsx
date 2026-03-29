"use client";

import { useParams } from "next/navigation";
import { servicesData } from "../../lib/services-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


import Testimoni from "../../components/Testimoni";
import Maps from "../../components/Maps";

export default function ServiceCategoryPage() {
  const params = useParams();
  const category = servicesData.find((c) => c.id === params.id);

  if (!category) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-2xl md:text-4xl font-black italic uppercase text-slate-900">
          Service Not Found<span className="text-blue-600">.</span>
        </h1>
        <Link href="/" className="mt-6 px-8 py-4 bg-blue-600 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all active:scale-95 shadow-xl shadow-blue-200">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-32 px-6">
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
            <p className="mt-8 text-slate-500 font-bold text-lg max-w-xl italic">Explore our specialized {category.title} services, delivered by certified professionals directly to your location in Bali.</p>
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

                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight italic leading-tight uppercase">{service.name}</h3>

                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 flex-grow">{service.desc}</p>

                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-end">
                    {params.id !== "lab" && <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Price Starts From</div>}
                    {params.id !== "lab" && <div className="text-xl font-black text-blue-600 tracking-tighter italic">Rp {service.price}</div>}
                  </div>

                  <Link
                    href={`/services/${params.id}/${service.id}`}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all text-center flex items-center justify-center shadow-lg shadow-slate-200"
                  >
                    See Detail & Benefits
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimoni />
      <Maps />
    </main>
  );
}
