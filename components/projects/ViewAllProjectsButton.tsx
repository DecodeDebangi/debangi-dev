import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ViewAllProjectsButton: React.FC = () => {
  return (
    <div className='mt-16 flex justify-center'>
      <Button
        asChild
        variant='outline'
        className='group px-6 py-6 text-lg rounded-lg border border-emerald-500/50 bg-black/30 text-emerald-400 hover:bg-emerald-900/30 hover:border-emerald-400 transition-all duration-300'>
        <Link href='/projects' className='flex items-center gap-2'>
          View All Projects
          <ArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
        </Link>
      </Button>
    </div>
  );
};

export default ViewAllProjectsButton;
