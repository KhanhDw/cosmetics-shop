import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  header, 
  footer,
  onClick 
}) => {
  const cardClasses = `bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${
    onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''
  } ${className}`;

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
    >
      {header && <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">{header}</div>}
      <div className="p-6">{children}</div>
      {footer && <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">{footer}</div>}
    </div>
  );
};

export default Card;