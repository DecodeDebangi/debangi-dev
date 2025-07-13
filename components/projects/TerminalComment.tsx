
import React from 'react';

interface TerminalCommentProps {
  text: string;
}

const TerminalComment: React.FC<TerminalCommentProps> = ({ text }) => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="terminal-text px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 text-xs">
        $ {text}
      </div>
    </div>
  );
};

export default TerminalComment;
