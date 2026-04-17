export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPosts = async () => {
  const res = await fetch(`${API_URL}/posts?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};
