
import React from 'react';
import SectionTitle from './SectionTitle';
import PassionItem from './PassionItem';
import { 
  Brain,
  Users,
  LineChart,
  Coffee,
  Rocket,
  BookOpen
} from 'lucide-react';

const Passions: React.FC = () => {
  const passions = [
    { 
      icon: Brain, 
      title: 'AI & Machine Learning', 
      description: 'Exploring how AI can solve complex problems and improve user experiences through intelligent applications.'
    },
    { 
      icon: Users, 
      title: 'Open Source', 
      description: 'Contributing to and maintaining open source projects to give back to the development community.'
    },
    { 
      icon: LineChart, 
      title: 'Performance Optimization', 
      description: 'Finding ways to make applications faster, more efficient, and provide better user experiences.'
    },
    { 
      icon: Coffee, 
      title: 'Clean Code', 
      description: 'Writing maintainable, readable, and efficient code that follows best practices and design patterns.'
    },
    { 
      icon: Rocket, 
      title: 'Innovation', 
      description: 'Staying at the cutting edge of technology and exploring new ways to solve problems.'
    },
    { 
      icon: BookOpen, 
      title: 'Mentoring', 
      description: 'Sharing knowledge and helping others grow in their development journey through mentoring and teaching.'
    }
  ];

  return (
    <div className="mt-16 opacity-0 animate-slide-left" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
      <SectionTitle 
        title="Things I'm Passionate About"
        subtitle="The core principles and interests that drive my work and professional development."
        titleClassName="text-gradient-emerald"
        alignment="left"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative">
        <div className="absolute -inset-x-4 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>
        <div className="absolute -inset-y-4 left-1/3 w-px bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"></div>
        <div className="absolute -inset-y-4 right-1/3 w-px bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"></div>
        
        {passions.map((passion, index) => (
          <PassionItem key={index} {...passion} />
        ))}
      </div>
    </div>
  );
};

export default Passions;
