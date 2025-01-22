import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./views/landing/LandingPage";
import { Routes, Route } from "react-router-dom";
export const appStore = createContext();
export default function App() {
  const [theme, setTheme] = useState(false);
  console.log(theme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <appStore.Provider value={{ setTheme, theme }}>
      <div className="app" data-theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </appStore.Provider>
  );
}
