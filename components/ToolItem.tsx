
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ToolItemProps {
  icon: LucideIcon;
  name: string;
  level?: number; // 1-5
  description?: string;
  className?: string;
}

const ToolItem: React.FC<ToolItemProps> = ({
  icon: Icon,
  name,
  level = 4,
  description,
  className
}) => {
  const renderLevel = () => {
    return (
      <div className="flex space-x-1 items-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-1.5 h-5 rounded-full transition-all duration-300",
              i < level 
                ? `bg-emerald-500 ${i === level - 1 ? 'animate-pulse' : ''}` 
                : "bg-white/10"
            )}
            style={{ height: `${0.5 + (i < level ? (i + 1) * 0.15 : 0)}rem` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      className={cn(
        "group relative p-4 rounded-lg overflow-hidden transition-all duration-300 hover-scale",
        "border border-white/5 hover:border-emerald-500/30",
        "bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm",
        "h-full flex flex-col", // Added height and flex column
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors duration-300">
            <Icon className="h-5 w-5" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
              <h3 className="font-medium text-white group-hover:text-emerald-400 transition-colors duration-300 truncate">{name}</h3>
              {level > 0 && <div className="flex-shrink-0">{renderLevel()}</div>}
            </div>
          </div>
        </div>
        
        {description && (
          <p className="text-sm text-muted-foreground mt-2 overflow-visible">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ToolItem;
