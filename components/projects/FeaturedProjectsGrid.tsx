
import React from 'react';
import ProjectCard, { ProjectCardProps } from '../project-card/ProjectCard';
import TerminalHeader from './TerminalHeader';

interface FeaturedProjectsGridProps {
  projects: ProjectCardProps[];
}

const FeaturedProjectsGrid: React.FC<FeaturedProjectsGridProps> = ({ projects }) => {
  return (
    <div className="mb-16">
      {/* Terminal-like header */}
      <TerminalHeader title="featured-projects" />
      
      {/* Featured Layout - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="opacity-0 animate-slide-up" 
            style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectsGrid;
