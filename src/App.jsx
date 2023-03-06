import { createRoot } from "react-dom/client";
import { useState } from "react";
import StockContext from "./context/StockContext";
import Dashboard from "./components/Dashboard";
import "./assets/css/style.css";

const App = () => {
  const [stockSymbol, setStockSymbol] = useState("AAPl");
  return (
    <>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
