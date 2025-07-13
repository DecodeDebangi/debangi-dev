import React from "react";
import { Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className='overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-[1.02] bg-white/5 border-emerald-900/20 hover:border-emerald-500/50'>
      <div className='relative h-48 overflow-hidden'>
        <img
          src={post.coverImage}
          alt={post.title}
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
        />
      </div>
      <CardContent className='p-5 flex-grow'>
        <div className='flex items-center gap-3 text-xs text-muted-foreground mb-3'>
          <div className='flex items-center gap-1'>
            <Calendar className='h-3.5 w-3.5' />
            <span>{post.date}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='h-3.5 w-3.5' />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <Link href={`/blogs/${post.slug}`}>
          <h3 className='text-xl font-semibold mb-2 hover:text-emerald-400 transition-colors'>
            {post.title}
          </h3>
        </Link>

        <p className='text-muted-foreground mb-4'>{post.excerpt}</p>

        <div className='flex gap-2 flex-wrap'>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className='px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'>
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className='px-5 py-4 border-t border-white/5'>
        <Link
          href={`/blogs/${post.slug}`}
          className='text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors flex items-center gap-1'>
          Read Full Article
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='ml-1'>
            <path d='M5 12h14'></path>
            <path d='m12 5 7 7-7 7'></path>
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
};
