"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import FeaturedProjects from "@/components/FeaturedProjects";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  // Add a class to the body for global styling
  useEffect(() => {
    document.body.classList.add("dark");
    return () => {
      document.body.classList.remove("dark");
    };
  }, []);

  return (
    <div className='min-h-screen flex flex-col relative'>
      {/* Background pattern */}
      <div className='fixed inset-0 -z-50 bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20'></div>
      <div className='fixed inset-0 -z-40 bg-gradient-to-b from-background via-background to-background/95'></div>

      {/* Main content */}
      <Navbar />
      <Hero />
      {/* <FeaturedProjects /> */}
      <AboutMe />
      <Footer />
    </div>
  );
}
