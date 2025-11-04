import React from "react";
import Header from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";
import { Outlet } from "react-router-dom";

interface AccountLayoutProps {
  children?: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <div className=" mx-auto w-full h-full">{children || <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default AccountLayout;
