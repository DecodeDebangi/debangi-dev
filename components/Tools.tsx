import React from 'react';
import SectionTitle from './SectionTitle';
import ToolItem from './ToolItem';
import { 
  Code, 
  Database, 
  Server, 
  Layers, 
  CloudCog, 
  Cpu, 
  GitBranch,
  Braces,
} from 'lucide-react';

const Tools: React.FC = () => {
  // Tools data
  const frontendTools = [
    { icon: Code, name: 'JavaScript/TypeScript', level: 5, description: 'Expertise in modern JS/TS, including ES6+ features.' },
    { icon: Braces, name: 'React & React Native', level: 5, description: 'Building responsive web and mobile applications.' },
    { icon: Layers, name: 'HTML/CSS/Tailwind', level: 4, description: 'Creating beautiful, responsive UI designs.' }
  ];

  const backendTools = [
    { icon: Server, name: 'Node.js & Express', level: 4, description: 'Building scalable server-side applications.' },
    { icon: Database, name: 'SQL & NoSQL Databases', level: 4, description: 'MongoDB, PostgreSQL, MySQL, Redis.' },
    { icon: CloudCog, name: 'AWS & Cloud Services', level: 3, description: 'Deployment, serverless, cloud architecture.' }
  ];

  const devopsTools = [
    { icon: GitBranch, name: 'Git & CI/CD', level: 4, description: 'Version control, GitHub Actions, Jenkins.' },
    { icon: Cpu, name: 'Docker & Kubernetes', level: 3, description: 'Containerization and orchestration.' }
  ];

  return (
    <div className="opacity-0 animate-slide-left" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
      <SectionTitle 
        title="Tools I Use"
        subtitle="The technologies and tools I work with on a regular basis."
        titleClassName="text-gradient-emerald"
      />
      
      <div className="space-y-8 mt-8 p-6 rounded-xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-white/5 backdrop-blur-sm">
        <div>
          <h3 className="text-lg font-medium mb-4 text-emerald-400 flex items-center">
            <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Frontend
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendTools.map((tool, index) => (
              <ToolItem key={index} {...tool} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4 text-emerald-400 flex items-center">
            <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
            Backend
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendTools.map((tool, index) => (
              <ToolItem key={index} {...tool} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4 text-emerald-400 flex items-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            DevOps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devopsTools.map((tool, index) => (
              <ToolItem key={index} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
