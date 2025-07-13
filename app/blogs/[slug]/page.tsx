"use client";

import React from "react";
import BlogPost from "@/components/blog/BlogPost";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPost slug={params.slug} />;
}
