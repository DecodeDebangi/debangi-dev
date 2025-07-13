"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogGrid } from "@/components/blog/BlogGrid";

const Blogs: React.FC = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />
      <main className='pt-24 pb-16'>
        <div className='container-custom'>
          <div className='max-w-3xl mx-auto mb-8 md:mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Blogs</h1>
            <p className='text-muted-foreground text-lg'>
              Insights, tutorials, and thoughts on web development, design, and
              technology.
            </p>
          </div>

          <BlogGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
