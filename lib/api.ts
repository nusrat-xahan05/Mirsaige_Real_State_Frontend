const API_URL = process.env.NEXT_PUBLIC_API_URL;

type GetPostsParams = {
  tab?: string;
  search?: string;
};

export const getPosts = async ({ tab, search }: GetPostsParams) => {
  let url = `${API_URL}/posts?populate=*`;

  // Featured filter
  if (tab === "featured") {
    url += `&filters[isFeatured][$eq]=true`;
  }

  // Recent sort
  if (tab === "recent") {
    url += `&sort=createdAt:desc`;
  }

  // Search filter
  if (search) {
    url += `&filters[title][$containsi]=${search}`;
  }

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};
