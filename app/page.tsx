import BlogPost from "@/components/modules/BlogPost";
import Logo from "@/components/ui/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Real Estate Insights | Mirsaige PMC",
  description:
    "Explore the finest urban living and architectural marvels in Bangladesh.",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; search?: string }>;
}) {
  const resolvedParams = await searchParams;

  return (
    <main className="">
      {/* Logo Section */}
      <Logo></Logo>

      {/* Will implement suspense */}
      <BlogPost searchParams={resolvedParams}></BlogPost>
    </main>
  );
}
