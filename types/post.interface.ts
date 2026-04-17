export interface IPost {
  id?: number;
  title: string;
  slug?: string;
  description: string;
  image: {
    url: string;
  };
  publishedAt?: Date;
}

export const tabs = ["all", "recent", "featured"];
