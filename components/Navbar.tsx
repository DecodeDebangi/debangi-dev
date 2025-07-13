
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, Code } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavItemClick = () => {
    // Close the drawer after navigation
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'backdrop-blur-xl bg-black/50 shadow-md border-b border-emerald-900/30' : 'bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Code className="h-6 w-6 text-emerald-400 group-hover:animate-pulse transition-all duration-300" />
          <span className="text-xl font-semibold tracking-tight">
            Decode<span className="text-emerald-400">Debangi</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg border border-emerald-500/50 text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 text-sm font-medium button-hover"
            >
              Let&apos;s Talk
            </a>
          </div>
        )}

        {/* Mobile Menu using Drawer */}
        {isMobile && (
          <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-black/95 backdrop-blur-lg border-t border-emerald-900/30">
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-center mb-8">
                  <Code className="h-8 w-8 text-emerald-400" />
                </div>
                
                <nav className="flex flex-col space-y-5">
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="flex items-center justify-center py-3 text-base font-medium text-muted-foreground hover:text-emerald-400 transition-colors border-b border-emerald-900/20"
                      onClick={handleNavItemClick}
                      asChild
                    >
                      {item.href.startsWith('#') ? (
                        <a href={item.href}>
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.href}>
                          {item.name}
                        </Link>
                      )}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    className="mt-4 flex items-center justify-center px-4 py-3 rounded-lg bg-emerald-400/10 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-400/20 transition-all duration-300 text-base font-medium"
                    onClick={handleNavItemClick}
                    asChild
                  >
                    <a href="#contact">
                      Let&apos;s Talk
                    </a>
                  </Button>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
