"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ProjectCardProps } from "@/components/project-card/ProjectCard";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsView from "@/components/projects/ProjectsView";

const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Generate 10 dummy projects
  const allProjects: ProjectCardProps[] = [
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
    },
    {
      id: "3",
      title: "Task Management Dashboard",
      description:
        "A comprehensive task management dashboard built with React and Firebase. Features include task creation, assignment, tracking, and reporting.",
      tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
      image:
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: "4",
      title: "Weather Forecast App",
      description:
        "A weather forecast application that provides current weather data and forecasts for any location. Built with React and the OpenWeatherMap API.",
      tags: ["React", "REST API", "Tailwind CSS", "Context API"],
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: "5",
      title: "Portfolio Website Template",
      description:
        "A customizable portfolio website template built with React and Tailwind CSS. Features include responsive design, dark mode, and animations.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: "6",
      title: "Restaurant Booking System",
      description:
        "A restaurant booking system that allows users to book tables, view menus, and make orders. Built with React, Express, and MongoDB.",
      tags: ["React", "Express", "MongoDB", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: "7",
      title: "Code Learning Platform",
      description:
        "An interactive platform for learning programming languages with code editors, exercises, and tutorials. Features include progress tracking and community forums.",
      tags: ["React", "Node.js", "MongoDB", "WebSockets"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: "8",
      title: "Personal Finance Tracker",
      description:
        "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns. Built with React and Chart.js.",
      tags: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: "9",
      title: "Fitness Tracking App",
      description:
        "A fitness tracking application that allows users to log workouts, set goals, and track progress. Features include custom workout plans and nutrition tracking.",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: "10",
      title: "Social Media Dashboard",
      description:
        "A dashboard for managing multiple social media accounts with analytics, scheduling, and content management features. Built with React and various social media APIs.",
      tags: ["React", "Redux", "REST API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  // Filter projects by selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") {
      return allProjects;
    }
    return allProjects.filter((project) => project.tags.includes(selectedTag));
  }, [allProjects, selectedTag]);

  // Get unique technologies from all projects
  const technologies = useMemo(() => {
    return Array.from(new Set(allProjects.flatMap((project) => project.tags)));
  }, [allProjects]);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className='min-h-screen flex flex-col relative'>
      {/* Background pattern */}
      <div className='fixed inset-0 -z-50 bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20'></div>
      <div className='fixed inset-0 -z-40 bg-gradient-to-b from-background via-background to-background/95'></div>

      {/* Main content */}
      <Navbar />

      <main className='flex-1 pt-24 pb-16'>
        <div className='container-custom'>
          {/* Header with back button and view toggles */}
          <ProjectsHeader viewMode={viewMode} setViewMode={setViewMode} />

          <SectionTitle
            title='All Projects'
            subtitle='Browse through my complete portfolio of projects showcasing my skills and experience.'
            alignment='center'
            className='mb-12'
            titleClassName='text-gradient-emerald'
          />

          {/* Technology filter */}
          <ProjectsFilter
            technologies={technologies}
            selectedTag={selectedTag}
            onSelectTag={handleTagSelect}
          />

          {/* Projects Grid/List View */}
          <ProjectsView viewMode={viewMode} projects={filteredProjects} />

          {/* Pagination */}
          <Pagination className='mt-12'>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
