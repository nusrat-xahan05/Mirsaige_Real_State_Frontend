import { IPost } from "@/types/post.interface";
import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "");

export default function PostCard({ post }: { post: IPost }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Image */}
      {post.image?.url && (
        <Image
          src={`${API_URL}${post.image.url}`}
          alt={post.title}
          className="w-full h-48 object-cover"
          width={400}
          height={300}
          priority={true}
        />
      )}

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{post.title}</h2>

        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {post.description}
        </p>

        <Link
          href={`/posts/${post.slug}`}
          className="mt-4 text-blue-600 text-sm font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
