"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/blog/CodeBlock";

interface BlogPostProps {
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-4'>Blog post not found</h1>
        <Link href='/blogs' className='text-emerald-400 hover:underline'>
          Back to blogs
        </Link>
      </div>
    );
  }

  // Process content to identify and render code blocks
  const renderContent = () => {
    // Split content by code block markers
    if (!post.content.includes("```")) {
      return post.content
        .split(". ")
        .map((sentence, index) => <p key={index}>{sentence}.</p>);
    }

    const segments = post.content.split(/```([\s\S]*?)```/);

    return segments.map((segment, index) => {
      // Even indices are regular text
      if (index % 2 === 0) {
        if (!segment.trim()) return null;
        return segment.split(". ").map((sentence, sIndex) => (
          <p key={`text-${index}-${sIndex}`} className='mb-4'>
            {sentence.trim() ? `${sentence}.` : ""}
          </p>
        ));
      }
      // Odd indices are code blocks
      else {
        const [language, ...codeLines] = segment.trim().split("\n");
        const code = codeLines.join("\n");
        return (
          <CodeBlock key={`code-${index}`} language={language} code={code} />
        );
      }
    });
  };

  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />

      <main className='pt-24 pb-16'>
        <div className='container-custom'>
          {/* Back to blogs */}
          <Link
            href='/blogs'
            className='inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-6 transition-colors'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Back to blogs
          </Link>

          {/* Cover image */}
          <div className='w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden'>
            <img
              src={post.coverImage}
              alt={post.title}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Article header */}
          <div className='max-w-3xl mx-auto mb-8'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
              {post.title}
            </h1>

            <div className='flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className='w-6 h-6 rounded-full'
                />
                <span>{post.author.name}</span>
              </div>

              <div className='flex items-center gap-1'>
                <Calendar className='h-4 w-4' />
                <span>{post.date}</span>
              </div>

              <div className='flex items-center gap-1'>
                <Clock className='h-4 w-4' />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            <div className='flex gap-2 flex-wrap'>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article content */}
          <div className='max-w-3xl mx-auto prose prose-invert prose-emerald'>
            <p className='text-xl mb-6 text-muted-foreground'>{post.excerpt}</p>

            <div className='space-y-6'>{renderContent()}</div>

            <div className='border-t border-white/10 my-8 pt-8'>
              <h2 className='text-2xl font-bold mb-4'>About the Author</h2>
              <div className='flex items-start gap-4'>
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className='w-12 h-12 rounded-full'
                />
                <div>
                  <h3 className='font-medium'>{post.author.name}</h3>
                  <p className='text-muted-foreground'>
                    A passionate writer and developer who loves sharing
                    knowledge about web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related posts section would go here */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
