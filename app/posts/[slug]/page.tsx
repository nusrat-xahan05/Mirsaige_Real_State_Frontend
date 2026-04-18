import { API_URL, getPostBySlug } from "@/lib/api";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Mirsaige PMC",
    };
  }

  const fullImageUrl = post.image?.url
    ? `${API_URL?.replace("/api", "")}${post.image.url}`
    : "";

  return {
    title: `${post.title} | Mirsaige PMC`,
    description: post.description.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.description.slice(0, 160),
      images: fullImageUrl ? [fullImageUrl] : [],
      type: "article",
    },
  };
}

export default async function PostDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-brand-bg text-white selection:bg-highlighted/30">
      {/* Post Image */}
      <section className="relative h-[80vh] min-h-100 w-full">
        {post.image?.url && (
          <Image
            src={`${API_URL?.replace("/api", "")}${post.image.url}`}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        )}

        <div className="absolute inset-0 bg-linear-to-b from-[#141729]/20 via-transparent to-brand-bg" />
      </section>

      {/* Post Content */}
      <article className="max-w-5xl 2xl:max-w-7xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-[#1c2136]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
            <div className="flex items-center gap-4">
              <time className="text-gray-400 text-sm font-medium">
                {formatDate(post.createdAt)}
              </time>

              {post.isFeatured && (
                <span className="bg-highlighted text-brand-bg px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter shadow-[0_0_15px_rgba(218,150,50,0.4)]">
                  Featured Property
                </span>
              )}
            </div>
            <span className="text-highlighted text-xs font-bold uppercase tracking-[0.2em]">
              Mirsaige Exclusive
            </span>
          </div>

          <h1 className="font-display text-5xl xl:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          <div className="prose prose-invert prose-highlighted max-w-none">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 first-letter:text-5xl first-letter:font-bold first-letter:text-highlighted first-letter:mr-3 first-letter:float-left">
              {post.description}
            </p>
          </div>

          {/* Footer Back Button */}
          <div className="mt-16 pt-8 border-t border-white/5 flex justify-center">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-highlighted hover:bg-white/5 rounded-full text-brand-bg hover:text-white transition-all duration-500 font-bold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="transform group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                Explore More Blogs
              </span>
            </Link>
          </div>
        </div>
      </article>

      {/* Decorative spacing */}
      <div className="h-20" />
    </main>
  );
}
