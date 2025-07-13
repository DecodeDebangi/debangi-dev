
import React from 'react';

interface TerminalHeaderProps {
  title: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-2 mb-4 px-3 py-1.5 bg-black/60 rounded-t-lg border border-white/10 w-fit">
      <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
      <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
      <div className="px-2 py-0.5 text-xs font-mono text-white/60">~ {title}</div>
    </div>
  );
};

export default TerminalHeader;
