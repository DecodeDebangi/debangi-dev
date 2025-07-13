
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Grid2X2, List } from 'lucide-react';

interface ProjectsHeaderProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <Button variant="ghost" asChild className="group hover:bg-emerald-900/20">
        <Link href="/" className="flex items-center gap-2 text-emerald-400">
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </Button>
      
      <div className="flex items-center gap-2">
        <Button 
          variant={viewMode === 'grid' ? 'default' : 'outline'} 
          size="icon"
          onClick={() => setViewMode('grid')}
          className={viewMode === 'grid' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
        >
          <Grid2X2 size={18} />
        </Button>
        <Button 
          variant={viewMode === 'list' ? 'default' : 'outline'}
          size="icon"
          onClick={() => setViewMode('list')}
          className={viewMode === 'list' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
        >
          <List size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProjectsHeader;
