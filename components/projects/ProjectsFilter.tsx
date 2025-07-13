
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ProjectsFilterProps {
  technologies: string[];
  selectedTag?: string;
  onSelectTag: (tag: string) => void;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({ 
  technologies, 
  selectedTag = 'All',
  onSelectTag 
}) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2 justify-center">
      <Badge 
        variant="outline" 
        className={`cursor-pointer ${selectedTag === 'All' ? 'bg-emerald-900/20 hover:bg-emerald-900/40' : 'bg-black/40 hover:bg-emerald-900/40'}`}
        onClick={() => onSelectTag('All')}
      >
        All
      </Badge>
      
      {technologies.slice(0, 8).map((tech, index) => (
        <Badge 
          key={index} 
          variant="outline" 
          className={`cursor-pointer ${selectedTag === tech ? 'bg-emerald-900/20 hover:bg-emerald-900/40' : 'bg-black/40 hover:bg-emerald-900/40'}`}
          onClick={() => onSelectTag(tech)}
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
};

export default ProjectsFilter;
