
import React from 'react';
import { cn } from '@/lib/utils';
import { CardContent as ShadcnCardContent } from '@/components/ui/card';
import CardBadge from './CardBadge';
import { CardFooterActions } from './CardActions';

interface CardContentProps {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
  compact?: boolean;
  isHovered: boolean;
}

const CardContent: React.FC<CardContentProps> = ({
  id = "1",
  title,
  description,
  tags,
  demoLink,
  githubLink,
  featured = false,
  compact = false,
  isHovered
}) => {
  if (compact) {
    return (
      <ShadcnCardContent className="p-2 relative z-10">
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.slice(0, 2).map((tag, index) => (
            <CardBadge key={index} featured={featured}>
              {tag}
            </CardBadge>
          ))}
          {tags.length > 2 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono rounded-sm bg-black/40 text-gray-300 border border-white/10">
              +{tags.length - 2}
            </span>
          )}
        </div>
        
        <CardFooterActions 
          id={id}
          demoLink={demoLink} 
          githubLink={githubLink} 
          isHovered={isHovered}
          compact={compact}
        />
      </ShadcnCardContent>
    );
  }

  return (
    <ShadcnCardContent className="p-6 relative z-10">
      {featured && (
        <div className="absolute -top-12 left-6 px-4 py-1 bg-emerald-500 text-black text-xs font-mono rounded-sm">
          FEATURED
        </div>
      )}
      
      <h3 className={cn(
        "font-bold mb-3 font-mono",
        featured ? "text-emerald-300" : "text-white",
        "text-xl"
      )}>
        {title}
        {/* Animated underline */}
        <div className={cn(
          "h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0 mt-1",
          "transition-all duration-700 ease-in-out",
          isHovered ? "w-full" : "w-1/3"
        )}/>
      </h3>
      
      <p className="text-muted-foreground line-clamp-3 mb-4 text-sm">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <CardBadge key={index} featured={featured}>
            {tag}
          </CardBadge>
        ))}
      </div>
      
      <CardFooterActions 
        id={id}
        demoLink={demoLink} 
        githubLink={githubLink} 
        isHovered={isHovered}
      />
      
      {/* Decorative scanner line */}
      <div className={cn(
        "absolute left-0 right-0 h-[2px] bg-emerald-500/60",
        "opacity-0 group-hover:opacity-100 transition-opacity",
        "animate-[scan_2s_ease-in-out_infinite]"
      )} style={{
        top: isHovered ? '50%' : '150%',
        transition: 'top 1.5s ease-in-out'
      }}></div>
    </ShadcnCardContent>
  );
};

export default CardContent;
