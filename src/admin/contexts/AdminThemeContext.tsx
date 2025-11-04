import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type AdminTheme = "light" | "dark" | "system";

interface AdminThemeContextType {
  adminTheme: AdminTheme;
  adminDarkMode: boolean;
  toggleAdminTheme: () => void;
  setAdminTheme: (theme: AdminTheme) => void;
}

const AdminThemeContext = createContext<AdminThemeContextType | undefined>(undefined);

export const AdminThemeProvider = ({ children }: { children: ReactNode }) => {
  const [adminTheme, setAdminThemeState] = useState<AdminTheme>("light");

  // Load admin theme from localStorage when mount
  useEffect(() => {
    const stored = localStorage.getItem("admin-theme") as AdminTheme | null;
    if (stored) {
      setAdminThemeState(stored);
      updateHtmlClass(stored);
    } else {
      // if not set, default to light theme for admin
      setAdminThemeState("light");
      updateHtmlClass("light");
    }
  }, []);

  const updateHtmlClass = (theme: AdminTheme) => {
    const root = document.documentElement;
    
    // Determine actual theme based on system preference if theme is "system"
    const actualTheme = theme === "system" 
      ? window.matchMedia("(prefers-color-scheme: dark)").matches 
        ? "dark" 
        : "light"
      : theme;

    // Apply admin-specific CSS variables
    if (actualTheme === "dark") {
      // Admin dark theme variables
      root.style.setProperty('--admin-bg-primary', '#0f172a');  // slate-900
      root.style.setProperty('--admin-bg-secondary', '#1e293b'); // slate-800
      root.style.setProperty('--admin-bg-tertiary', '#334155');  // slate-700
      root.style.setProperty('--admin-text-primary', '#f1f5f9'); // slate-100
      root.style.setProperty('--admin-text-secondary', '#cbd5e1'); // slate-200
      root.style.setProperty('--admin-text-accent', '#a78bfa');   // violet-400
      root.style.setProperty('--admin-border', '#475569');       // slate-600
      root.style.setProperty('--admin-card-bg', '#1e293b');      // slate-800
      root.style.setProperty('--admin-input-bg', '#334155');     // slate-700
    } else {
      // Admin light theme variables
      root.style.setProperty('--admin-bg-primary', '#ffffff');   // white
      root.style.setProperty('--admin-bg-secondary', '#f8fafc'); // slate-50
      root.style.setProperty('--admin-bg-tertiary', '#e2e8f0');  // slate-200
      root.style.setProperty('--admin-text-primary', '#0f172a'); // slate-900
      root.style.setProperty('--admin-text-secondary', '#64748b'); // slate-500
      root.style.setProperty('--admin-text-accent', '#7c3aed');   // violet-600
      root.style.setProperty('--admin-border', '#cbd5e1');       // slate-300
      root.style.setProperty('--admin-card-bg', '#ffffff');      // white
      root.style.setProperty('--admin-input-bg', '#f8fafc');     // slate-50
    }
  };

  const setAdminTheme = (newTheme: AdminTheme) => {
    setAdminThemeState(newTheme);
    updateHtmlClass(newTheme);
    localStorage.setItem("admin-theme", newTheme);
  };

  const toggleAdminTheme = () => setAdminTheme(adminTheme === "light" ? "dark" : "light");

  return (
    <AdminThemeContext.Provider 
      value={{ 
        adminTheme, 
        adminDarkMode: adminTheme === 'dark' || (adminTheme === 'system' && window.matchMedia("(prefers-color-scheme: dark)").matches),
        toggleAdminTheme, 
        setAdminTheme 
      }}
    >
      {children}
    </AdminThemeContext.Provider>
  );
};

// Hook for using admin theme in components
export const useAdminTheme = () => {
  const context = useContext(AdminThemeContext);
  if (!context) throw new Error("useAdminTheme must be used within AdminThemeProvider");
  return context;
};