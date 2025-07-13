
import React from 'react';
import { cn } from '@/lib/utils';

interface CardHeaderProps {
  title: string;
  compact?: boolean;
  featured?: boolean;
}

const CardHeader: React.FC<CardHeaderProps> = ({ 
  title, 
  compact = false, 
  featured = false 
}) => {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-black/70 border-b border-white/10">
      <div className={cn("rounded-full bg-red-500", compact ? "h-2 w-2" : "h-2.5 w-2.5")}></div>
      <div className={cn("rounded-full bg-yellow-500", compact ? "h-2 w-2" : "h-2.5 w-2.5")}></div>
      <div className={cn("rounded-full bg-green-500", compact ? "h-2 w-2" : "h-2.5 w-2.5")}></div>
      <div className={cn("font-mono text-white/60 truncate", compact ? "text-[10px]" : "text-xs")}>
        {title.toLowerCase().replace(/\s+/g, '-')}.jsx
      </div>
      {featured && !compact && (
        <div className="flex items-center gap-1 ml-auto">
          <Star size={12} className="text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-mono text-yellow-500">featured</span>
        </div>
      )}
    </div>
  );
};

// Import at the top
import { Star } from 'lucide-react';

export default CardHeader;
