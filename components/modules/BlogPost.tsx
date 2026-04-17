import { getPosts } from "@/lib/api";
import PostCard from "../ui/PostCard";
import { IPost } from "@/types/post.interface";
import SectionHeading from "../ui/SectionHeading";

export default async function BlogPost() {
  const data = await getPosts();
  const posts = data.data;

  return (
    <div className="max-w-360 mx-auto px-4 2xl:px-20">
      <SectionHeading
        title="All Blogs"
        subtitle="Elevating Urban Living Through Modern Architecture. Discover exclusive properties, expert market insights, and the future 
      of sustainable residency with Mirsaige."
      ></SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: IPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
