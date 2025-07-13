import React from "react";
import BlogPost from "@/components/blog/BlogPost";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
