import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { getRandomCosmeticImageUrl } from '@/utils/imageService';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  slogan?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, slogan }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`h-screen w-screen flex flex-col md:flex-row items-center justify-center p-4 transition-colors duration-300 overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
        : 'bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50'
    }`}>
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-full md:max-h-screen rounded-2xl overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-6 flex-shrink-0">
        <img 
          src={getRandomCosmeticImageUrl(600, 800)} 
          alt="Beauty products" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right side - Form */}
      <div className={`rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md transition-colors duration-300 flex-shrink-0 ${
        darkMode ? 'bg-gray-800/90 text-white backdrop-blur-sm' : 'bg-white/90 text-gray-900 backdrop-blur-sm'
      }`}>
        {title && (
          <div className="text-center mb-6">
            <h1 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>{title}</h1>
            {slogan && <p className={`mt-2 text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{slogan}</p>}
          </div>
        )}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;