import BlogPost from "@/components/modules/BlogPost";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; search?: string }>;
}) {
  const resolvedParams = await searchParams;

  return (
    <main className="">
      {/* Will implement suspense */}
      <BlogPost searchParams={resolvedParams}></BlogPost>
    </main>
  );
}
