
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface PassionItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const PassionItem: React.FC<PassionItemProps> = ({
  icon: Icon,
  title,
  description,
  className
}) => {
  return (
    <div 
      className={cn(
        "group p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover-scale relative overflow-hidden z-10",
        "border border-white/5 hover:border-emerald-400/30",
        "bg-gradient-to-br from-white/5 to-transparent",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-emerald-500/20">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-lg font-medium mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">{title}</h3>
        
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PassionItem;
