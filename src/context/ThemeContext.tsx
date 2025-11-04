import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  darkMode: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light");

  // Load theme từ localStorage khi mount
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      updateHtmlClass(stored);
    } else {
      // nếu không có, lấy theme hệ thống
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      updateHtmlClass(systemTheme);
    }
  }, []);

  const updateHtmlClass = (theme: Theme) => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      // Apply cosmetics brand colors for dark mode
      root.style.setProperty('--bg-primary', '#1a202c');
      root.style.setProperty('--bg-secondary', '#2d3748');
      root.style.setProperty('--text-primary', '#f7fafc');
      root.style.setProperty('--text-secondary', '#e2e8f0');
      root.style.setProperty('--border', '#4a5568');
      root.style.setProperty('--card-bg', '#2d3748');
    } else {
      root.classList.remove("dark");
      // Apply cosmetics brand colors for light mode
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--text-primary', '#2d3748');
      root.style.setProperty('--text-secondary', '#4a5568');
      root.style.setProperty('--border', '#e2e8f0');
      root.style.setProperty('--card-bg', '#ffffff');
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    updateHtmlClass(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, darkMode: theme === 'dark', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook tiện lợi để dùng theme trong component
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
