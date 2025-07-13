import React from "react";
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Code,
  Bookmark,
  FileText,
} from "lucide-react";
import CardAction from "./CardAction";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CardActionsProps {
  id?: string;
  demoLink?: string;
  githubLink?: string;
  isHovered: boolean;
  compact?: boolean;
}

export const CardQuickActions: React.FC<CardActionsProps> = ({
  id = "1",
  demoLink,
  githubLink,
  compact = false,
}) => {
  return (
    <div className='absolute top-2 right-2 flex space-x-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <TooltipProvider delayDuration={300}>
        {/* Details link */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={`/projects/${id}`}>
              <CardAction
                href={`/projects/${id}`}
                icon={<FileText size={compact ? 14 : 18} />}
                label='Details'
                compact={compact}
                isRouterLink={true}
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent side='bottom' className='py-0.5'>
            <p>Project Details</p>
          </TooltipContent>
        </Tooltip>

        {githubLink && (
          <Tooltip>
            <TooltipTrigger asChild>
              <CardAction
                href={githubLink}
                icon={<Github size={compact ? 14 : 18} />}
                label='GitHub'
                compact={compact}
              />
            </TooltipTrigger>
            <TooltipContent side='bottom' className='py-0.5'>
              <p>GitHub Repository</p>
            </TooltipContent>
          </Tooltip>
        )}

        {demoLink && (
          <Tooltip>
            <TooltipTrigger asChild>
              <CardAction
                href={demoLink}
                icon={<ExternalLink size={compact ? 14 : 18} />}
                label='Demo'
                compact={compact}
              />
            </TooltipTrigger>
            <TooltipContent side='bottom' className='py-0.5'>
              <p>Live Demo</p>
            </TooltipContent>
          </Tooltip>
        )}
      </TooltipProvider>
    </div>
  );
};

export const CardFooterActions: React.FC<CardActionsProps> = ({
  id = "1",
  demoLink,
  githubLink,
  isHovered,
  compact = false,
}) => {
  if (compact) {
    return (
      <div className='flex gap-2'>
        <Link href={`/projects/${id}`} className='flex-1'>
          <CardAction
            href={`/projects/${id}`}
            icon={<FileText size={10} className='mr-1' />}
            label='Details'
            compact={true}
            isRouterLink={true}
          />
        </Link>

        {(demoLink || githubLink) && (
          <CardAction
            href={demoLink || githubLink || "#"}
            icon={<Code size={10} className='mr-1' />}
            label='View'
            compact={true}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mt-6 pt-4 border-t border-white/10",
        "flex justify-between items-center"
      )}>
      {/* View project link - external */}
      {(demoLink || githubLink) && (
        <a
          href={demoLink || githubLink || "#"}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center font-mono text-sm text-emerald-300 hover:text-emerald-400 transition-colors'>
          <Code size={16} className='mr-2' />
          View Project
          <ArrowRight
            size={14}
            className={cn(
              "ml-1 transition-transform duration-300",
              isHovered ? "translate-x-1" : ""
            )}
          />
        </a>
      )}

      {/* Details link - router link */}
      <Link
        href={`/projects/${id}`}
        className='inline-flex items-center font-mono text-sm text-emerald-300 hover:text-emerald-400 transition-colors'>
        <FileText size={16} className='mr-2' />
        Project Details
        <ArrowRight
          size={14}
          className={cn(
            "ml-1 transition-transform duration-300",
            isHovered ? "translate-x-1" : ""
          )}
        />
      </Link>

      {/* Bookmark button */}
      <button
        className='p-2 rounded-full text-white/70 hover:text-emerald-400 transition-colors'
        aria-label='Bookmark project'>
        <Bookmark size={16} />
      </button>
    </div>
  );
};
