import { getPosts } from "@/lib/api";
import PostCard from "../ui/PostCard";
import { IPost } from "@/types/post.interface";
import SectionHeading from "../ui/SectionHeading";
import SearchBar from "../ui/SearchBar";
import Tabs from "../ui/Tabs";
import Pagination from "../ui/Pagination";
import PostCreateBtn from "../ui/PostCreateBtn";

export default async function BlogPost({
  searchParams,
}: {
  searchParams: { tab?: string; search?: string; page?: number };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const data = await getPosts({
    tab: searchParams?.tab,
    search: searchParams?.search,
    page: currentPage,
  });
  const posts = data.data;
  const pagination = data.meta.pagination;

  return (
    <div className="max-w-360 mx-auto px-4 2xl:px-20 pt-10 pb-28">
      <SectionHeading
        title="All Blogs"
        subtitle="Elevating Urban Living Through Modern Architecture. Discover exclusive properties, expert market insights, and the future 
      of sustainable residency with Mirsaige."
      ></SectionHeading>

      <SearchBar></SearchBar>
      <div className="flex items-center justify-between mt-20 mb-14">
        <div className="flex-1 flex justify-center">
          <Tabs />
        </div>

        <PostCreateBtn></PostCreateBtn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: IPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination totalPages={pagination.pageCount} />
    </div>
  );
}
