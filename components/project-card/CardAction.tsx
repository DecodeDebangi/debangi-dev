
import React from 'react';
import { cn } from '@/lib/utils';

interface CardActionProps {
  href: string;
  icon: React.ReactNode;
  label?: string;
  compact?: boolean;
  isRouterLink?: boolean;
}

const CardAction: React.FC<CardActionProps> = ({ 
  href, 
  icon, 
  label, 
  compact = false,
  isRouterLink = false
}) => {
  if (isRouterLink) {
    return (
      <a 
        href={href}
        className={cn(
          "rounded-full bg-black/80 backdrop-blur-md text-white hover:text-emerald-400 hover:bg-black/90 transition-all duration-300",
          compact ? "p-1.5" : "p-2"
        )}
        aria-label={label}
      >
        {icon}
      </a>
    );
  }
  
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "rounded-full bg-black/80 backdrop-blur-md text-white hover:text-emerald-400 hover:bg-black/90 transition-all duration-300",
        compact ? "p-1.5" : "p-2"
      )}
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default CardAction;
