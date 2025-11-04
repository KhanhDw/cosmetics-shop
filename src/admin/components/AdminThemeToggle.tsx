import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useAdminTheme } from '../contexts/AdminThemeContext';

const AdminThemeToggle: React.FC = () => {
  const { adminTheme, toggleAdminTheme, setAdminTheme } = useAdminTheme();

  return (
    <button
      onClick={toggleAdminTheme}
      className="p-2 rounded-full bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)] hover:bg-[var(--admin-bg-secondary)] transition-colors"
      aria-label={`Switch to ${adminTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {adminTheme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};

export default AdminThemeToggle;