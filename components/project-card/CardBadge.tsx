
import React from 'react';
import { cn } from '@/lib/utils';

interface CardBadgeProps {
  children: React.ReactNode;
  featured?: boolean;
}

const CardBadge: React.FC<CardBadgeProps> = ({ children, featured = false }) => {
  return (
    <span 
      className={cn(
        "px-2 py-1 text-xs font-mono rounded-sm",
        "border border-white/10",
        featured ? 
          "bg-emerald-900/30 text-emerald-200" : 
          "bg-black/40 text-gray-300"
      )}
    >
      {children}
    </span>
  );
};

export default CardBadge;
