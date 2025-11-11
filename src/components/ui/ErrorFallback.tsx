import React from 'react';
import { useTranslation } from 'react-i18next';

interface ErrorFallbackProps {
  error: Error | null;
  resetError: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
      <div className="bg-red-100 dark:bg-red-800/30 p-6 rounded-full mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-red-600 dark:text-red-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-2">{t('common.error_occurred')}</h2>
      
      {error && (
        <p className="text-red-600 dark:text-red-300 mb-4 text-center max-w-md">
          {error.message || t('common.unexpected_error')}
        </p>
      )}
      
      <button
        onClick={resetError}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
      >
        {t('common.try_again')}
      </button>
      
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 text-center">
        {t('common.contact_support_if_persistent')}
      </p>
    </div>
  );
};

export default ErrorFallback;