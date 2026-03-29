"use client"; // Tambahkan ini jika file ini berada di dalam components/

import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
// 1. IMPORT DATA DUMMY & TYPE
import { blogData, BlogPost } from "../lib/blog-data";

export default function LatestNews() {
  // 2. AMBIL 3 ARTIKEL TERBARU SAJA
  const posts = blogData.slice(0, 3);

  // Jika data kosong, tidak render apa-apa
  if (!posts || posts.length === 0) return null;

  return (
    <section id="news" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">Health Journal</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Latest <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">News</span> & Articles.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={post.image || "https://placehold.co/600x400?text=No+Image"} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">{post.category || "Medical"}</span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-[11px] mb-4 font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  {/* Format tanggal dari string dummy */}
                  {post.date}
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">{post.excerpt}</p>

                <div className="mt-auto flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group/link">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-900/20 group"
          >
            <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
