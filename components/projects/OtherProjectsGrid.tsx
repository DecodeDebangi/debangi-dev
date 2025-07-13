
import React from 'react';
import ProjectCard, { ProjectCardProps } from '../project-card/ProjectCard';

interface OtherProjectsGridProps {
  projects: ProjectCardProps[];
}

const OtherProjectsGrid: React.FC<OtherProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="opacity-0 animate-slide-up"
          style={{ 
            animationDelay: `${0.4 + index * 0.2}s`, 
            animationFillMode: 'forwards'
          }}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default OtherProjectsGrid;
