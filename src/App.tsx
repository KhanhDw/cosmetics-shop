import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="bg-white dark:bg-black">
//         <ThemeToggleButton />
//         <a
//           href="https://vite.dev"
//           target="_blank"
//         >
//           <img
//             src={viteLogo}
//             className="logo"
//             alt="Vite logo"
//           />
//         </a>
//         <a
//           href="https://react.dev"
//           target="_blank"
//         >
//           <img
//             src={reactLogo}
//             className="logo react"
//             alt="React logo"
//           />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/AppContext";
import { LanguageProvider } from "@/context/LanguageContext";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import ErrorFallback from "@/components/ui/ErrorFallback";
import { router } from "./routes";

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <LanguageProvider>
        <AppProvider>
          <AuthProvider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              newestOnTop
              closeOnClick
              pauseOnHover
            />
          </AuthProvider>
        </AppProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
