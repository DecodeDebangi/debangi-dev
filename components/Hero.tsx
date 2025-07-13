import React, { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  const typingSpeed = 100;
  const isMobile = useIsMobile();

  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    if (isTyping) {
      timer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
        }
      }, typingSpeed);
    }

    return () => clearInterval(timer);
  }, [isTyping]);

  return (
    <section
      id='home'
      className='min-h-screen flex items-center relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-background -z-10'></div>

      {/* Animated background grid */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] -z-10'></div>

      {/* Glowing orbs */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[128px] -z-10'></div>
      <div className='absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-500/10 blur-[128px] -z-10'></div>

      <div className='container mx-auto px-6 py-10 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
          {/* Left column: Text content */}
          <div
            className='w-full lg:w-1/2 space-y-8 animate-slide-up opacity-0'
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            {/* Availability tag - Add margin-top for mobile */}
            <div
              className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 backdrop-blur-sm",
                isMobile && "mt-14"
              )}>
              <div className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2'></div>
              <span className='text-xs font-medium text-emerald-300'>
                Available for new projects
              </span>
            </div>

            {/* Main heading */}
            <div className='space-y-3'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
                Hello, I&apos;m{" "}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500'>
                  Debangi
                </span>
              </h1>

              {/* Redesigned terminal */}
              <div className='relative max-w-md overflow-hidden rounded-lg bg-slate-950 border border-slate-800 shadow-[0_0_15px_rgba(16,185,129,0.15)]'>
                <div className='flex items-center gap-1.5 p-3 bg-slate-900'>
                  <div className='w-3 h-3 rounded-full bg-rose-500'></div>
                  <div className='w-3 h-3 rounded-full bg-amber-500'></div>
                  <div className='w-3 h-3 rounded-full bg-emerald-500'></div>
                  <div className='ml-2 text-xs text-slate-500 font-mono'>
                    developer.sh
                  </div>
                </div>
                <div className='p-4 font-mono text-sm'>
                  <div className='flex'>
                    <span className='text-emerald-400 mr-2'>$</span>
                    <span className='text-slate-300'>whoami</span>
                  </div>
                  <div className='mt-1 flex items-center'>
                    <span className='text-slate-300'>
                      &lt;{text}
                      <span className='animate-pulse'>|</span>/&gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className='text-lg text-slate-300 leading-relaxed'>
              I craft elegant solutions to complex problems using modern
              technologies. Specializing in React, Node.js, and cloud
              architecture.
            </p>

            {/* Technology badges - horizontal scrolling row */}
            <div className='flex space-x-3 pb-2 overflow-x-auto scrollbar-none'>
              {["React", "TypeScript", "Node.js", "Nest", "Cloud"].map(
                (skill, i) => (
                  <Badge
                    key={i}
                    className='px-3 py-1 text-sm whitespace-nowrap rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border-slate-700'
                    variant='outline'>
                    {skill}
                  </Badge>
                )
              )}
            </div>

            {/* CTA buttons */}
            <div className='flex flex-wrap gap-4'>
              <Button className='bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 transition-all shadow-lg shadow-emerald-500/20 rounded-md group'>
                <a href='#projects' className='flex items-center'>
                  View Projects
                  <ArrowRight
                    size={16}
                    className='ml-2 transition-transform group-hover:translate-x-1'
                  />
                </a>
              </Button>

              <Button
                variant='outline'
                className='border-slate-700 bg-slate-800/30 text-slate-300 hover:bg-slate-700/50 rounded-md'>
                <a href='#contact' className='flex items-center'>
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className='flex space-x-4'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-md bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-white transition-all'
                aria-label='GitHub'>
                <Github size={20} />
              </a>
              <a
                href='https://example.com'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-md bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-white transition-all'
                aria-label='Website'>
                <ExternalLink size={20} />
              </a>
              <a
                href='#projects'
                className='p-2 rounded-md bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-white transition-all'
                aria-label='Projects'>
                <Terminal size={20} />
              </a>
            </div>
          </div>

          {/* Right column: Visual element - Hide on mobile/tablet */}
          <div
            className='hidden lg:block lg:w-1/2 animate-fade-in opacity-0'
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div className='relative w-full max-w-lg aspect-square'>
              {/* Code snippets floating in 3D space */}
              <div className='absolute w-48 h-28 p-4 rounded-lg bg-slate-900/90 border border-slate-700 shadow-xl top-0 left-0 transform -rotate-6 hover:rotate-0 transition-transform hover:scale-105'>
                <pre className='text-xs font-mono text-emerald-400'>
                  <code>
                    {`import React from 'react';
const App = () => {
  return <div>Hello World</div>;
}`}
                  </code>
                </pre>
              </div>

              <div className='absolute w-56 h-32 p-4 rounded-lg bg-slate-900/90 border border-slate-700 shadow-xl bottom-10 right-0 transform rotate-3 hover:rotate-0 transition-transform hover:scale-105'>
                <pre className='text-xs font-mono text-emerald-400'>
                  <code>
                    {`const fetchData = async () => {
  const response = await api.get('/data');
  return response.data;
}`}
                  </code>
                </pre>
              </div>

              <div className='absolute w-48 h-28 p-4 rounded-lg bg-slate-900/90 border border-slate-700 shadow-xl top-1/3 right-10 transform -rotate-3 hover:rotate-0 transition-transform hover:scale-105'>
                <pre className='text-xs font-mono text-emerald-400'>
                  <code>
                    {`.container {
  display: flex;
  align-items: center;
  justify-content: center;
}`}
                  </code>
                </pre>
              </div>

              {/* Central 3D object */}
              <div className='absolute inset-0 m-auto w-40 h-40 perspective-element'>
                <div className='cube'>
                  <div className='cube-face cube-face-front'>
                    <div className='bg-emerald-500 bg-opacity-90 w-full h-full flex items-center justify-center rounded-md'>
                      <span className='text-white font-bold text-xl'>
                        React
                      </span>
                    </div>
                  </div>
                  <div className='cube-face cube-face-back'>
                    <div className='bg-blue-500 bg-opacity-90 w-full h-full flex items-center justify-center rounded-md'>
                      <span className='text-white font-bold text-xl'>
                        TypeScript
                      </span>
                    </div>
                  </div>
                  <div className='cube-face cube-face-right'>
                    <div className='bg-purple-500 bg-opacity-90 w-full h-full flex items-center justify-center rounded-md'>
                      <span className='text-white font-bold text-xl'>
                        Redux
                      </span>
                    </div>
                  </div>
                  <div className='cube-face cube-face-left'>
                    <div className='bg-amber-500 bg-opacity-90 w-full h-full flex items-center justify-center rounded-md'>
                      <span className='text-white font-bold text-xl'>
                        Node.js
                      </span>
                    </div>
                  </div>
                  <div className='cube-face cube-face-top'>
                    <div className='bg-rose-500 bg-opacity-90 w-full h-full flex items-center justify-center rounded-md'>
                      <span className='text-white font-bold text-xl'>
                        NestJS
                      </span>
                    </div>
                  </div>
                  <div className='cube-face cube-face-bottom'>
                    <div className='bg-cyan-500 bg-opacity-90 w-full h-full flex items-center justify-center rounded-md'>
                      <span className='text-white font-bold text-xl'>
                        Cloud
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redesigned scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <a
          href='#projects'
          className='text-slate-500 hover:text-emerald-400 transition-colors'>
          <div className='w-6 h-10 border-2 border-slate-600 hover:border-emerald-400 rounded-full flex justify-center pt-1'>
            <div className='w-1 h-2 bg-slate-500 hover:bg-emerald-400 rounded-full'></div>
          </div>
        </a>
        <span className='mt-2 text-xs text-slate-500'>Scroll</span>
      </div>

      {/* Add CSS for 3D cube animation */}
      <style>
        {`
        .perspective-element {
          perspective: 1000px;
        }
        
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(-15deg) rotateY(15deg);
          animation: cube-spin 20s infinite linear;
        }
        
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.8;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .cube-face-front {
          transform: translateZ(70px);
        }
        
        .cube-face-back {
          transform: rotateY(180deg) translateZ(70px);
        }
        
        .cube-face-right {
          transform: rotateY(90deg) translateZ(70px);
        }
        
        .cube-face-left {
          transform: rotateY(-90deg) translateZ(70px);
        }
        
        .cube-face-top {
          transform: rotateX(90deg) translateZ(70px);
        }
        
        .cube-face-bottom {
          transform: rotateX(-90deg) translateZ(70px);
        }
        
        @keyframes cube-spin {
          from {
            transform: rotateX(-15deg) rotateY(0deg);
          }
          to {
            transform: rotateX(-15deg) rotateY(360deg);
          }
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
