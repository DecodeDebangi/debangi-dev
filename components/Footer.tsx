import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Brain,
  Instagram,
} from "lucide-react";
// import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id='contact'
      className='bg-black/50 backdrop-blur-sm border-t border-emerald-900/20 py-12'>
      <div className='container-custom'>
        <div className='flex flex-col md:flex-row justify-between gap-8 mb-12'>
          <div className='max-w-md'>
            <h2 className='text-2xl font-bold mb-4'>Let&apos;s Connect</h2>
            <p className='text-muted-foreground mb-6'>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <a
              href='mailto:decodedebangi@gmail.com'
              className='inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors'>
              <Mail size={18} />
              <span>decodedebangi@gmail.com</span>
            </a>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-4'>Follow Me</h3>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/DecodeDebangi'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-white/5 hover:bg-emerald-900/20 text-muted-foreground hover:text-emerald-400 transition-colors'
                aria-label='GitHub'>
                <Github size={20} />
              </a>
              <a
                href='https://www.linkedin.com/in/debangic/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-white/5 hover:bg-emerald-900/20 text-muted-foreground hover:text-emerald-400 transition-colors'
                aria-label='LinkedIn'>
                <Linkedin size={20} />
              </a>
              <a
                href='https://www.instagram.com/decodedebangi/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-white/5 hover:bg-emerald-900/20 text-muted-foreground hover:text-emerald-400 transition-colors'
                aria-label='Twitter'>
                <Instagram size={20} />
              </a>
              <a
                href='https://x.com/decodeDebangi'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-white/5 hover:bg-emerald-900/20 text-muted-foreground hover:text-emerald-400 transition-colors'
                aria-label='Twitter'>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-4'>Navigation</h3>
            <nav className='grid grid-cols-2 gap-x-8 gap-y-2'>
              <a
                href='#home'
                className='hover:text-emerald-400 transition-colors'>
                Home
              </a>
              {/* <Link
                href='/projects'
                className='hover:text-emerald-400 transition-colors'>
                Projects
              </Link> */}
              <a
                href='#about'
                className='hover:text-emerald-400 transition-colors'>
                About
              </a>
              <a
                href='#contact'
                className='hover:text-emerald-400 transition-colors'>
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className='pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='text-muted-foreground text-sm'>
            © {currentYear} Debangi Choudhury. All rights reserved.
          </div>

          <div className='flex items-center text-muted-foreground text-sm'>
            <span>Made with</span>
            <Brain className='h-4 w-4 mx-1 text-emerald-500' />
            <span>by Debangi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
