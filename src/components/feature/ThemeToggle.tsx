import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gradient-to-r from-cosmetic-pink-100 to-cosmetic-purple-100 dark:from-cosmetic-pink-800 dark:to-cosmetic-purple-800 text-cosmetic-pink-600 dark:text-cosmetic-pink-200 shadow-cosmetic hover:shadow-cosmetic-lg transition-all duration-300 hover:scale-105"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-cosmetic-purple-700 dark:text-cosmetic-purple-300" />
      ) : (
        <Sun className="w-5 h-5 text-cosmetic-pink-400" />
      )}
    </button>
  );
}
