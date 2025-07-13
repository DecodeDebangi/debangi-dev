
import React from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/project-card/ProjectCard';

interface ProjectsViewProps {
  viewMode: 'grid' | 'list';
  projects: ProjectCardProps[];
}

const ProjectsView: React.FC<ProjectsViewProps> = ({ viewMode, projects }) => {
  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="opacity-0 animate-slide-up" 
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div 
          key={index}
          className="opacity-0 animate-slide-up" 
          style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
        >
          <ProjectCard {...project} compact={true} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsView;
