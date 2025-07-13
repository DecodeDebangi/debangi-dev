
import React from 'react';
import SectionTitle from './SectionTitle';

const AboutMeContent: React.FC = () => {
  return (
    <div>
      <SectionTitle 
        title="About Me"
        subtitle="I'm a passionate full stack developer with a strong focus on creating elegant, efficient, and user-centered digital experiences."
        titleClassName="text-gradient-emerald"
      />
      
      {/* About Me Content in a terminal-style box */}
      <div className="mt-6 space-y-4 text-muted-foreground p-5 rounded-xl terminal-glow bg-black/60 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          <div className="px-2 py-0.5 text-xs font-mono text-white/60">~ about-me.txt</div>
        </div>
        
        <p className="text-emerald-400 font-mono text-sm">
          {"> "}With over 5 years of experience in web and mobile development, I've had the opportunity to work on a wide range of projects, from small business websites to complex enterprise applications.
        </p>
        
        <p className="text-teal-400 font-mono text-sm">
          {"> "}My approach to development is holistic - I believe that great software isn't just about clean code, but also about creating intuitive user experiences and solving real business problems.
        </p>
        
        <p className="text-cyan-400 font-mono text-sm">
          {"> "}When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring junior developers.
        </p>
        
        <div className="h-4 w-3 bg-white opacity-70 animate-pulse mt-1"></div>
      </div>
    </div>
  );
};

export default AboutMeContent;
