import React from 'react';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Yogendhar Sri Ram</h3>
            <p className="text-sm text-gray-400 max-w-md">
              Frontend developer specializing in creating responsive user interfaces and 
              web applications with modern technologies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-2 mb-6 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Yogendhar Sri Ram. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};