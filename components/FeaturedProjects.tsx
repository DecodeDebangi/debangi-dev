import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectsBackground from './projects/ProjectsBackground';
import FeaturedProjectsGrid from './projects/FeaturedProjectsGrid';
import OtherProjectsGrid from './projects/OtherProjectsGrid';
import ViewAllProjectsButton from './projects/ViewAllProjectsButton';
import TerminalComment from './projects/TerminalComment';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      id: "1",
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment processing, and order tracking.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: "2",
      title: 'Real-time Chat Application',
      description: 'A real-time chat application that allows users to create rooms, join existing ones, and chat with other users. Built with Socket.io, React, and Express.',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1000',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      id: "3",
      title: 'Task Management Dashboard',
      description: 'A comprehensive task management dashboard built with React and Firebase. Features include task creation, assignment, tracking, and reporting.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
      image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1000',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: "4",
      title: 'Weather Forecast App',
      description: 'A weather forecast application that provides current weather data and forecasts for any location. Built with React and the OpenWeatherMap API.',
      tags: ['React', 'REST API', 'Tailwind CSS', 'Context API'],
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1000',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: "5",
      title: 'Portfolio Website Template',
      description: 'A customizable portfolio website template built with React and Tailwind CSS. Features include responsive design, dark mode, and animations.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: "6",
      title: 'Restaurant Booking System',
      description: 'A restaurant booking system that allows users to book tables, view menus, and make orders. Built with React, Express, and MongoDB.',
      tags: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <ProjectsBackground />
      
      <div className="container-custom relative">
        <SectionTitle 
          title="Featured Projects"
          subtitle="Here are some of my recent projects that showcase my skills and experience in full stack development."
          alignment="center"
          className="mb-12"
          titleClassName="text-gradient-emerald"
        />
        
        {/* Featured Projects */}
        <FeaturedProjectsGrid projects={featuredProjects} />
        
        <SectionTitle 
          title="Other Projects"
          subtitle="Check out some of my other projects."
          alignment="center"
          className="mb-8"
          titleClassName="text-gradient-emerald"
        />
        
        {/* Other Projects - Grid Layout */}
        <OtherProjectsGrid projects={otherProjects} />
        
        {/* All Projects Button */}
        <ViewAllProjectsButton />
        
        {/* Decorative code comment */}
        <TerminalComment text='git commit -m "Restored project layout with full details"' />
      </div>
    </section>
  );
};

export default FeaturedProjects;
