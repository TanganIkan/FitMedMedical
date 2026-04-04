import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { fetchAPI } from "../lib/api";

export const revalidate = 10;

interface PostNode {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories?: {
    nodes: { name: string }[];
  };
}

interface AllPostsResponse {
  posts: {
    nodes: PostNode[];
  };
}

// 2. Fungsi Fetcher ke WordPress
async function getPosts() {
  const data = await fetchAPI<AllPostsResponse>(`
    query AllPosts {
      posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
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
    }
  `);
  return data?.posts?.nodes || [];
}

export default async function BlogListPage() {
  const posts = await getPosts();

  // Helper untuk format tanggal
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">Medical Insights</div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 italic uppercase">
            Health <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Journal</span>.
          </h1>
          <p className="max-w-2xl text-slate-500 font-medium text-sm md:text-base leading-relaxed italic">Stay updated with the latest medical guides, wellness tips, and professional healthcare insights from our expert team in Bali.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const imageUrl = post.featuredImage?.node?.sourceUrl || "https://placehold.co/600x400?text=No+Image";

            const categoryName = post.categories?.nodes[0]?.name || "Uncategorized";

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">{categoryName}</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] mb-4 font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {formatDate(post.date)}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 italic uppercase">{post.title}</h3>

                  {/* WordPress mengembalikan excerpt dengan tag <p>, gunakan line-clamp langsung pada parent div */}
                  <div className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium italic [&>p]:m-0" dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                  <div className="mt-auto flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group/link italic">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-24 h-1 bg-blue-600 rounded-full opacity-20" />
        </div>
      </div>
    </section>
  );
}
