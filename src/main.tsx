import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import './i18n/i18n'; // Import i18n configuration

// Performance monitoring - only in development
if (process.env.NODE_ENV === 'development') {
  import('./utils/whyDidYouRender');
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
