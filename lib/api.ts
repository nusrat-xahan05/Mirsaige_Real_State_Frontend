export const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

// export const getPostBySlug = async (slug: string) => {
//   const res = await fetch(
//     `${API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`,
//     { cache: "no-store" },
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch post");
//   }

//   return res.json();
// };

export const getPostBySlug = async (slug: string) => {
  // We use the plural endpoint with a filter
  const url = `${API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch post by slug");
  }

  const response = await res.json();

  /**
   * IMPORTANT: Strapi filters always return an array (e.g., [post]).
   * We need to return just the first item [0] or null if empty.
   */
  if (response.data && response.data.length > 0) {
    return response.data[0];
  }

  return null;
};
