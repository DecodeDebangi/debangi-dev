
import React, { useEffect, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from '@/hooks/use-toast';

interface CodeBlockProps {
  language: string;
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
      
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: "Code copied",
      description: "The code has been copied to your clipboard",
    });
  };

  // Create language-specific highlighting styles
  const getLanguageClass = () => {
    switch (language.toLowerCase()) {
      case 'js':
      case 'javascript':
        return 'text-yellow-400';
      case 'jsx':
        return 'text-blue-400';
      case 'ts':
      case 'typescript':
        return 'text-blue-500';
      case 'css':
        return 'text-pink-400';
      case 'html':
        return 'text-orange-400';
      case 'bash':
      case 'shell':
        return 'text-green-400';
      default:
        return 'text-emerald-400';
    }
  };
  
  return (
    <div className="relative my-6 rounded-lg overflow-hidden code-glow">
      {/* Language badge */}
      {language && (
        <div className={`absolute top-3 right-12 bg-black/70 px-2 py-1 rounded-md text-xs ${getLanguageClass()} font-mono`}>
          {language}
        </div>
      )}
      
      {/* Copy button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute top-2 right-2 h-8 w-8 bg-black/50 hover:bg-black/70 text-emerald-400"
              onClick={handleCopy}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span className="sr-only">Copy code</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="py-0.5">
            <p>{copied ? 'Copied!' : 'Copy code'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      {/* Code content */}
      <pre className="p-4 bg-black/70 font-mono text-sm overflow-x-auto terminal-text">
        <code className={getLanguageClass()}>{code}</code>
      </pre>
    </div>
  );
};
