import React, { useState, ReactNode } from 'react';
import '../styles/admin-styles.css';  // Import admin-specific styles
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="admin-interface flex h-screen bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;