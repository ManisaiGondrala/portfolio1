import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border-t border-white/20 dark:border-gray-700/20">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <span>Made with</span>
          <Heart className="text-red-500" size={16} fill="currentColor" />
          <span>and</span>
          <Code className="text-blue-500" size={16} />
          <span>by Gondrala Mani Sai</span>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © 2025 Gondrala Mani Sai. All rights reserved.
        </p>
        
        <div className="mt-4 flex justify-center items-center gap-4 text-xs text-gray-400 dark:text-gray-600">
          <span>HackerRank: 5★ Python</span>
          <span>•</span>
          <span>GPA: 9.06</span>
          <span>•</span>
          <span>Published Researcher</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;