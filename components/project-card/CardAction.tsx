import React from "react";
import { cn } from "@/lib/utils";

interface CardActionProps {
  href?: string;
  icon: React.ReactNode;
  label?: string;
  compact?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const CardAction: React.FC<CardActionProps> = ({
  href,
  icon,
  label,
  compact = false,
  children,
  className,
}) => {
  const baseClasses = cn(
    "rounded-full bg-black/80 backdrop-blur-md text-white hover:text-emerald-400 hover:bg-black/90 transition-all duration-300",
    compact ? "p-1.5" : "p-2",
    className
  );

  if (children) {
    return (
      <div className={baseClasses} aria-label={label}>
        {children}
      </div>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={baseClasses}
        aria-label={label}>
        {icon}
      </a>
    );
  }

  return (
    <button className={baseClasses} aria-label={label}>
      {icon}
    </button>
  );
};

export default CardAction;
