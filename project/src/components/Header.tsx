import React from 'react';
import { Download } from 'lucide-react';
import { ResumePDF } from '../assets/assets'; // adjust path if needed

const Header: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Gondrala_Mani_Sai_Resume.pdf';
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border-b border-white/20 dark:border-gray-700/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mani Sai
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={downloadResume}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
