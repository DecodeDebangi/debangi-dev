"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, BookOpen, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailsProps {
  id: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id }) => {
  // In a real app, we would fetch project data based on the ID
  // For now, we'll use dummy data that matches our existing projects
  const projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment processing, and order tracking.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filter",
        "Shopping cart and checkout process",
        "Payment processing with Stripe",
        "Order tracking and history",
        "Admin dashboard for product management",
      ],
      caseStudy:
        "This project was developed to address the growing need for small businesses to have an online presence. The client needed a solution that was easy to use, scalable, and cost-effective. We chose to use the MERN stack because of its flexibility and performance.",
      documentation:
        "The codebase is well-documented with JSDoc comments and a comprehensive README. The project follows a modular architecture with clear separation of concerns.",
      challenges:
        "One of the biggest challenges was implementing a secure payment system. We chose Stripe for its robust API and security features. Another challenge was optimizing the database queries for better performance.",
    },
    {
      id: "2",
      title: "Real-time Chat Application",
      description:
        "A real-time chat application that allows users to create rooms, join existing ones, and chat with other users. Built with Socket.io, React, and Express.",
      tags: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
      features: [
        "Real-time messaging using Socket.io",
        "Group chat rooms",
        "Private messaging",
        "User presence indicators",
        "Message history",
        "File sharing",
      ],
      caseStudy:
        "This chat application was developed for a remote team that needed a secure, private messaging platform. The key requirement was real-time communication and reliable message delivery.",
      documentation:
        "The project uses Socket.io for real-time communication and JWT for authentication. The front-end is built with React and the back-end with Express.",
      challenges:
        "Managing socket connections at scale was a significant challenge. We implemented a pub/sub pattern with Redis to ensure message delivery across multiple server instances.",
    },
    // More projects with similar data structure...
  ];

  // Find the project with the matching ID
  const project = projects.find((p) => p.id === id) || projects[0];

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Background pattern */}
      <div className='fixed inset-0 -z-50 bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20'></div>
      <div className='fixed inset-0 -z-40 bg-gradient-to-b from-background via-background to-background/95'></div>

      <Navbar />

      <main className='flex-1 pt-24 pb-16'>
        <div className='container-custom'>
          {/* Back button */}
          <Button
            variant='ghost'
            asChild
            className='group hover:bg-emerald-900/20 mb-8'>
            <Link
              href='/projects'
              className='flex items-center gap-2 text-emerald-400'>
              <ArrowLeft className='group-hover:-translate-x-1 transition-transform' />
              Back to Projects
            </Link>
          </Button>

          {/* Project Header */}
          <div className='relative overflow-hidden rounded-lg border border-white/10 bg-black/60 backdrop-blur-sm mb-8'>
            <div className='h-[300px] overflow-hidden relative'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover object-center'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 to-transparent'></div>

              {/* Project title and links overlay */}
              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <h1 className='text-3xl font-bold text-white mb-3'>
                  {project.title}
                </h1>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant='outline'
                      className='bg-black/60 backdrop-blur-sm'>
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className='flex gap-3'>
                  {project.demoLink && (
                    <Button
                      variant='outline'
                      size='sm'
                      asChild
                      className='bg-black/70 hover:bg-emerald-900/60'>
                      <a
                        href={project.demoLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'>
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {project.githubLink && (
                    <Button
                      variant='outline'
                      size='sm'
                      asChild
                      className='bg-black/70 hover:bg-emerald-900/60'>
                      <a
                        href={project.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'>
                        <Github size={16} />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Sections */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* Left column - Overview and Features */}
            <div className='lg:col-span-2 space-y-8'>
              <section className='bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
                <h2 className='text-xl font-bold mb-4 text-emerald-400'>
                  Project Overview
                </h2>
                <p className='text-gray-300 mb-6'>{project.description}</p>

                <div className='flex items-center text-xs text-gray-400 font-mono mb-4'>
                  <Code size={14} className='mr-2' />
                  <span>
                    src / projects /{" "}
                    {project.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>

                {/* Terminal-like window */}
                <div className='bg-gray-900 rounded-md overflow-hidden border border-gray-800'>
                  <div className='flex items-center gap-2 px-4 py-2 bg-gray-800'>
                    <div className='h-2.5 w-2.5 rounded-full bg-red-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-yellow-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-green-500'></div>
                    <div className='ml-2 text-xs text-gray-400 font-mono'>
                      project-details.md
                    </div>
                  </div>
                  <div className='p-4 text-sm font-mono text-gray-300'>
                    <p className='text-emerald-400'># {project.title}</p>
                    <p className='text-gray-500 mt-2'>// Main technologies</p>
                    <p className='text-white'>{project.tags.join(", ")}</p>
                    <p className='text-gray-500 mt-2'>// Project goal</p>
                    <p className='text-white'>
                      {project.description.split(".")[0]}.
                    </p>
                  </div>
                </div>
              </section>

              <section className='bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
                <h2 className='text-xl font-bold mb-4 text-emerald-400'>
                  Features
                </h2>
                <ul className='space-y-2'>
                  {project.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='mr-3 mt-1 h-2 w-2 rounded-full bg-emerald-500'></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className='bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
                <h2 className='text-xl font-bold mb-4 text-emerald-400'>
                  Case Study
                </h2>
                <p className='text-gray-300'>{project.caseStudy}</p>
              </section>
            </div>

            {/* Right column - Technical details */}
            <div className='space-y-6'>
              <section className='bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
                <h2 className='text-xl font-bold mb-4 text-emerald-400'>
                  Technical Details
                </h2>

                <div className='space-y-4'>
                  <div>
                    <h3 className='font-bold text-white mb-2'>Tech Stack</h3>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tech, index) => (
                        <Badge key={index} className='bg-emerald-900/40'>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className='font-bold text-white mb-2'>Documentation</h3>
                    <p className='text-sm text-gray-300'>
                      {project.documentation}
                    </p>
                  </div>

                  <div>
                    <h3 className='font-bold text-white mb-2'>
                      Challenges & Solutions
                    </h3>
                    <p className='text-sm text-gray-300'>
                      {project.challenges}
                    </p>
                  </div>
                </div>
              </section>

              <section className='bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
                <h2 className='text-xl font-bold mb-4 text-emerald-400'>
                  Related Resources
                </h2>

                <div className='space-y-3'>
                  <a
                    href='#'
                    className='flex items-center gap-2 text-emerald-300 hover:text-emerald-400 transition-colors'>
                    <BookOpen size={16} />
                    <span>Documentation</span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center gap-2 text-emerald-300 hover:text-emerald-400 transition-colors'>
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center gap-2 text-emerald-300 hover:text-emerald-400 transition-colors'>
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
