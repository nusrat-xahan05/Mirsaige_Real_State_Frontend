import { Plus } from "lucide-react";
import Link from "next/link";

export default function PostCreateBtn() {
  return (
    <div>
      <Link
        href="/posts/create"
        className="bg-highlighted text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-brand-bg transition-all flex items-center gap-2"
      >
        <Plus size={18} /> Create Post
      </Link>
    </div>
  );
}
