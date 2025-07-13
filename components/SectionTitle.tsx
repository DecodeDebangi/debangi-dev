
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  alignment = 'left',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12', alignmentClasses[alignment], className)}>
      <div className="inline-block relative">
        {/* Decorative bracket */}
        <span className="absolute -left-4 -top-2 text-emerald-500 opacity-70 font-mono">
          &lt;
        </span>
        
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold relative z-10",
          titleClassName
        )}>
          {title}
          
          {/* Underline effect */}
          <span className="block h-1 bg-gradient-to-r from-emerald-500/80 via-emerald-400 to-emerald-500/80 mt-2 rounded-full"></span>
        </h2>
        
        {/* Decorative bracket */}
        <span className="absolute -right-4 -top-2 text-emerald-500 opacity-70 font-mono">
          &gt;
        </span>
      </div>
      
      {subtitle && (
        <p className={cn(
          "mt-4 text-muted-foreground max-w-2xl mx-auto",
          alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : '',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
