import { createRoot } from "react-dom/client";
import { useState } from "react";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";
import Dashboard from "./components/Dashboard";
import "./assets/css/style.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("AAPl");
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Dashboard />
        </StockContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
