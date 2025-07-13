
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: number;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}
