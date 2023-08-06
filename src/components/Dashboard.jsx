import React, { useContext, useEffect, useState } from "react";
import fetchStockDetails from "../utilities/api/fetchStockDetails";
import fetchQuote from "../utilities/api/fetchQuote";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import Header from "./Header";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <div
      className={`grid-rows-8 md:grid-rows-7 grid h-screen auto-rows-fr grid-cols-1 gap-6 p-2 pt-10 transition duration-700 md:grid-cols-2 md:p-10 xl:grid-cols-3 xl:grid-rows-5 ${
        darkMode ? "bg-zinc-900" : "bg-gray-100"
      }`}
    >
      <div className="col-span-1 row-span-1 flex items-center justify-start md:col-span-2 lg:mt-5 xl:col-span-3 xl:mt-5">
        <Header symbol={stockSymbol} name={stockDetails.name} />
      </div>
      <div className="row-span-4 md:col-span-2">
        <Chart />
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-5 md:row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
