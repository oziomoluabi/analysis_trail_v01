import { Briefcase, BookOpen, HeartPulse, Shield, Users, Mail, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import BinaryReadout from './BinaryReadout';

const Footer = () => {
  return (
    <footer className="relative z-40 bg-console-dark/80 backdrop-blur-sm border-t border-console-cyan/20 mt-16 pb-4">
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-console-cyan/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-8 text-center md:text-left">

          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-lg font-bold text-console-cyan tracking-wider">OSUN INSIGHTS</h3>
            <p className="mt-2 text-sm text-console-gray max-w-xs mx-auto md:mx-0">
              Nurturing Tomorrow: A data-driven platform for child and youth development across Osun State.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-console-gray hover:text-console-cyan transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-console-gray hover:text-console-cyan transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-console-gray hover:text-console-cyan transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-console-light-gray tracking-wide">Dimensions</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/education" className="text-console-gray hover:text-console-cyan transition-colors">Education</Link></li>
              <li><Link href="/health" className="text-console-gray hover:text-console-cyan transition-colors">Health</Link></li>
              <li><Link href="/employment" className="text-console-gray hover:text-console-cyan transition-colors">Employment</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-console-light-gray tracking-wide">More</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/protection" className="text-console-gray hover:text-console-cyan transition-colors">Protection</Link></li>
              <li><Link href="/civic-engagement" className="text-console-gray hover:text-console-cyan transition-colors">Civic Engagement</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h4 className="font-semibold text-console-light-gray tracking-wide">Data Stream [Live]</h4>
            <div className="mt-2 font-mono text-xs text-console-cyan/70 bg-console-blue/30 p-2 rounded-md h-24 overflow-hidden">
                <BinaryReadout />
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-console-blue pt-4 text-center text-xs text-console-gray">
          <p>&copy; {new Date().getFullYear()} Osun Child & Youth Development Insights. All data is for informational purposes. <Link href="/about" className="hover:text-console-cyan">About Us</Link> | <Link href="/contact" className="hover:text-console-cyan">Contact</Link></p>
        </div>
      </div>
       {/* Decorative corner elements */}
       <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-console-cyan/20"></div>
       <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-console-cyan/20"></div>
    </footer>
  );
};

export default Footer;
