
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardContent from './CardContent';
import { CardQuickActions } from './CardActions';

export interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
  compact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id = "1", // Default ID if none provided
  title,
  description,
  tags,
  image,
  demoLink,
  githubLink,
  featured = false,
  compact = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "group relative overflow-hidden h-full transition-all duration-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
        "border border-white/10 backdrop-blur-sm",
        featured ? 
          "bg-gradient-to-br from-green-950/80 via-emerald-900/40 to-teal-900/30" : 
          "bg-black/60"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader 
        title={title} 
        compact={compact} 
        featured={featured} 
      />
      
      <CardImage 
        image={image} 
        title={title}
        compact={compact} 
      />
      
      <CardQuickActions 
        id={id}
        demoLink={demoLink} 
        githubLink={githubLink}
        isHovered={isHovered}
        compact={compact}
      />
      
      <CardContent
        title={title}
        description={description}
        tags={tags}
        demoLink={demoLink}
        githubLink={githubLink}
        featured={featured}
        compact={compact}
        isHovered={isHovered}
        id={id}
      />
    </Card>
  );
};

export default ProjectCard;
