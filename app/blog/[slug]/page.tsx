import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Share2, Phone } from "lucide-react";
import Link from "next/link";
import { fetchAPI } from "../../lib/api"; // Sesuaikan path ini jika perlu

// 1. Tipe Data untuk Detail Artikel
interface SinglePostResponse {
  post: {
    title: string;
    content: string;
    date: string;
    excerpt: string;
    author?: {
      node: { name: string };
    };
    featuredImage?: {
      node: { sourceUrl: string };
    };
    categories?: {
      nodes: { name: string }[];
    };
  } | null;
}

// 2. Mengambil semua slug untuk ISR/SSG Next.js
export async function generateStaticParams() {
  const data = await fetchAPI<{ posts: { nodes: { slug: string }[] } }>(`
    query AllSlugs {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `);

  return (
    data?.posts?.nodes?.map((node) => ({
      slug: node.slug,
    })) || []
  );
}

// 3. Mengambil data satu artikel berdasarkan Slug
async function getPostBySlug(slug: string) {
  const data = await fetchAPI<SinglePostResponse>(
    `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content
        date
        excerpt
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  `,
    {
      variables: { id: slug },
    },
  );
  return data?.post;
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage?.node?.sourceUrl || "https://placehold.co/1200x600?text=No+Image";
  const categoryName = post.categories?.nodes[0]?.name || "Medical";
  const authorName = post.author?.node?.name || "Medical Team";

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="min-h-screen bg-white pb-24 pt-32">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 mb-12 text-[10px] font-black uppercase tracking-[0.3em] transition-all group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>

        {/* HEADER SECTION */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">{categoryName}</div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10 italic uppercase">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-2 italic">
              <Calendar size={14} className="text-blue-600" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2 italic">
              <User size={14} className="text-blue-600" /> By {authorName}
            </span>
          </div>
        </div>

        <div className="relative aspect-video rounded-[40px] overflow-hidden mb-16 shadow-2xl shadow-blue-900/10 border border-slate-100">
          <img src={imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          {/* Excerpt dari WordPress. Gunakan CSS selector [&>p] agar style-mu tetap teraplikasi ke tag <p> bawaan WordPress */}
          <div className="text-xl md:text-2xl text-slate-900 font-black mb-10 leading-tight uppercase italic decoration-blue-100 underline underline-offset-8 decoration-4 [&>p]:m-0" dangerouslySetInnerHTML={{ __html: post.excerpt }} />

          <div className="text-slate-600 font-medium italic leading-relaxed space-y-8">
            {/* Content utama dari WordPress */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <p>At **Fit Med Medical**, our priority is your recovery. Whether you are staying in a villa in Seminyak, Canggu, or Uluwatu, our professional medical team is ready to provide top-tier healthcare services at your doorstep.</p>
          </div>

          <div className="mt-16 p-8 rounded-[32px] bg-slate-50 border border-slate-100 italic">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Medical Disclaimer:</p>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              The information provided in this article is for educational purposes only and should not be treated as professional medical advice. Always consult with a qualified doctor for your specific health conditions.
            </p>
          </div>

          <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-8 py-10 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Share:</span>
              <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <Share2 size={18} />
              </button>
            </div>

            <Link
              href="https://wa.me/6285743333986"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-slate-900 transition-all active:scale-95 shadow-xl shadow-blue-600/20 italic"
            >
              <Phone size={18} />
              Book Consultation Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
