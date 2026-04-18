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

  const posts = data?.data;
  const pagination = data?.meta.pagination;

  return (
    <div className="max-w-360 mx-auto px-4 2xl:px-20 pt-10 pb-28">
      <SectionHeading
        title="All Blogs"
        subtitle="Elevating Urban Living Through Modern Architecture. Discover exclusive properties, expert market insights, and the future 
      of sustainable residency with Mirsaige."
      ></SectionHeading>

      <SearchBar></SearchBar>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mt-10 mb-20">
        <div className="hidden md:block"></div>

        <div className="flex justify-center">
          <Tabs />
        </div>

        <div className="flex justify-end">
          <PostCreateBtn />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length === 0 ? (
          <p>No posts found</p>
        ) : (
          posts.map((post: IPost) => <PostCard key={post.id} post={post} />)
        )}
      </div>

      <Pagination totalPages={pagination.pageCount} />
    </div>
  );
}
