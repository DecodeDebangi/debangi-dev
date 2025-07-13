
import React, { useRef } from 'react';
import AboutMeContent from './AboutMeContent';
import Tools from './Tools';
import Passions from './Passions';

const AboutMe: React.FC = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="section-padding relative min-h-screen">
      {/* Background design elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>
      <div className="absolute inset-y-0 left-0 -z-10 w-1/3 bg-[linear-gradient(to_right,rgba(16,24,39,0.4),transparent)]"></div>
      
      {/* Decorative grid */}
      <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjI5Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      
      <div className="container-custom h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative h-full">
          {/* Left Column - About Me (removed sticky positioning) */}
          <div className="lg:col-span-4 h-auto opacity-0 animate-slide-right" 
               style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
               ref={aboutSectionRef}>
            <AboutMeContent />
          </div>
          
          {/* Scrollable Right Column - Tools and Passions */}
          <div className="lg:col-span-8">
            <Tools />
            <Passions />
            
            <div className="mt-16 flex justify-center">
              <div className="terminal-text px-4 py-2 rounded-lg bg-black/30 border border-white/10">
                $ ./run.sh skills-update --force
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
