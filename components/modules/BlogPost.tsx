import { getPosts } from "@/lib/api";
import PostCard from "../ui/PostCard";
import { IPost } from "@/types/post.interface";
import SectionHeading from "../ui/SectionHeading";
import SearchBar from "../ui/SearchBar";
import Tabs from "../ui/Tabs";

export default async function BlogPost({
  searchParams,
}: {
  searchParams: { tab?: string; search?: string };
}) {
  const data = await getPosts({
    tab: searchParams?.tab,
    search: searchParams?.search,
  });
  const posts = data.data;

  return (
    <div className="max-w-360 mx-auto px-4 2xl:px-20">
      <SectionHeading
        title="All Blogs"
        subtitle="Elevating Urban Living Through Modern Architecture. Discover exclusive properties, expert market insights, and the future 
      of sustainable residency with Mirsaige."
      ></SectionHeading>

      <SearchBar></SearchBar>
      <Tabs></Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post: IPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
