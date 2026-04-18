export const API_URL = process.env.NEXT_PUBLIC_API_URL;

type GetPostsParams = {
  tab?: string;
  search?: string;
  page?: number;
};

export const getPosts = async ({ tab, search, page = 1 }: GetPostsParams) => {
  let url = `${API_URL}/posts?populate=*`;

  // Pagination
  url += `&pagination[page]=${page}&pagination[pageSize]=6`;

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

export const getPostBySlug = async (slug: string) => {
  const url = `${API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch post by slug");
  }

  const response = await res.json();

  if (response.data && response.data.length > 0) {
    return response.data[0];
  }

  return null;
};
