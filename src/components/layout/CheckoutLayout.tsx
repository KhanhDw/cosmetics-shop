import React from 'react';
import Header from '@/components/ui/layout/Header';
import Footer from '@/components/ui/layout/Footer';
import { Outlet } from 'react-router-dom';

interface CheckoutLayoutProps {
  children?: React.ReactNode;
}

const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <main className="text-gray-900 font-inter dark:text-gray-100">
            {children || <Outlet />}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutLayout;