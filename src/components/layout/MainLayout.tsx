import React from "react";
import Header from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="text-gray-900 font-inter dark:text-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
