
import React from 'react';
import { BlogCard } from './BlogCard';
import { blogPosts } from '@/data/blog-posts';

export const BlogGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};
