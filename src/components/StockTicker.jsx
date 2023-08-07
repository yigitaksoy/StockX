import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { TickerTape } from "react-ts-tradingview-widgets";

const StockTicker = () => {
  const { darkMode } = useContext(ThemeContext);
  const symbols = [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "Nasdaq 100",
    },
    {
      proName: "NYSE:PVH",
      title: "PVH/USD",
    },
    {
      proName: "NASDAQ:ABNB",
      title: "Airbnb",
    },
    {
      proName: "NASDAQ:AMZN",
      title: "Amazon",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR/USD",
    },
    {
      proName: "FX_IDC:EURGBP",
      title: "EUR/GBP",
    },
  ];
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
        symbols={symbols}
        copyrightStyles={styles}
      ></TickerTape>
    </div>
  );
};

export default StockTicker;
