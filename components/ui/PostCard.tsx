"use client";
import { API_URL } from "@/lib/api";
import { IPost } from "@/types/post.interface";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: { post: IPost }) {
  return (
    <div className="group bg-[#1c2136] rounded-2xl overflow-hidden border border-white/5 hover:border-highlighted/50 transition-all duration-500 shadow-xl">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {post.image?.url && (
          <Image
            src={`${API_URL?.replace("/api", "")}${post.image.url}`}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-w-768px) 100vw, 33vw"
            priority
          />
        )}
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#141729] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-display font-bold text-white mb-3 line-clamp-1 group-hover:text-highlighted transition-colors">
          {post.title}
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <Link
            href={`/posts/${post.slug}`}
            className="inline-flex items-center gap-2 text-highlighted font-semibold text-sm hover:gap-3 transition-all"
          >
            Explore Detail
            <span className="text-lg">→</span>
          </Link>

          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Mirsaige Exclusive
          </span>
        </div>
      </div>
    </div>
  );
}
