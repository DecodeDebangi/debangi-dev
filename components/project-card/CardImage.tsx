
import React from 'react';
import { cn } from '@/lib/utils';

interface CardImageProps {
  image: string;
  title: string;
  compact?: boolean;
}

const CardImage: React.FC<CardImageProps> = ({ image, title, compact = false }) => {
  return (
    <div className={cn("relative overflow-hidden", compact ? "aspect-[4/3]" : "aspect-[16/9]")}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay with code pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-80"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSIgLz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Terminal-like text overlay */}
      {!compact && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2">
          <div className="font-mono text-xs text-emerald-400 overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-pulse mr-1">$</span> 
            <span className="inline-block typing-animation">
              git clone {title.toLowerCase().replace(/\s+/g, '-')}.git
            </span>
          </div>
        </div>
      )}
      
      {/* Title overlay for compact mode */}
      {compact && (
        <div className="absolute inset-0 flex items-center justify-center p-2">
          <h3 className="text-sm font-bold font-mono text-emerald-300 text-center">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CardImage;
