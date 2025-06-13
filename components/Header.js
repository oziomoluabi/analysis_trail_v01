'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Data Dashboard', href: '/dashboard' },
  { name: 'Education', href: '/education' },
  { name: 'Health', href: '/health' },
  { name: 'Employment', href: '/employment' },
  { name: 'Child Protection', href: '/protection' },
  { name: 'Civic Engagement', href: '/civic-engagement' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative bg-console-dark/80 backdrop-blur-sm border-b border-console-cyan/20 h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-lg shadow-console-cyan/5">
        <Link href="/" className="flex items-center gap-3 z-20">
          <Image src="/logo.svg" alt="Osun Insights Logo" width={40} height={40} className="animate-pulse-slow"/>
          <span className="hidden sm:inline text-xl font-bold text-console-light-gray hover:text-console-cyan transition-colors">
            Osun Insights
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className={twMerge(
                clsx(
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-300',
                  pathname === link.href 
                    ? 'text-console-dark bg-console-cyan shadow-md shadow-console-cyan/20' 
                    : 'text-console-gray hover:text-console-light-cyan hover:bg-console-blue/50'
                )
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="lg:hidden z-20">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-console-cyan">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-console-cyan/30"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-console-cyan/30"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-console-cyan/30"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-console-cyan/30"></div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="lg:hidden absolute top-24 left-0 right-0 bg-console-dark/95 backdrop-blur-md border-b-2 border-console-cyan/20 pb-4"
          >
            <nav className="flex flex-col items-center gap-2 px-4">
              {navLinks.map(link => (
                <motion.div key={link.href} variants={itemVariants} className="w-full">
                  <Link href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={twMerge(
                      clsx(
                        'block w-full text-center py-3 text-lg font-medium rounded-md transition-all duration-300',
                        pathname === link.href 
                          ? 'text-console-dark bg-console-cyan shadow-md shadow-console-cyan/20' 
                          : 'text-console-light-gray hover:text-console-cyan hover:bg-console-blue'
                      )
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
