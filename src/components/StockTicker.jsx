import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { TickerTape } from "react-ts-tradingview-widgets";

const StockTicker = () => {
  const { darkMode } = useContext(ThemeContext);
  const styles = {
    parent: {
      fontSize: ".01px",
      position: "absolute",
      backgroundColor: "black",
    },
  };
  return (
    <div
      className={`w-full transition duration-300 md:absolute ${
        darkMode
          ? "border-neutral-700 bg-zinc-900"
          : "bg-white text-neutral-400"
      }`}
    >
      <TickerTape
        colorTheme={`${darkMode ? "dark" : "light"}`}
        copyrightStyles={styles}
      ></TickerTape>
    </div>
  );
};

export default StockTicker;
