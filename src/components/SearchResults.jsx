import { useContext } from "react";
import StockContext from "../context/StockContext";
const SearchResults = ({ results }) => {
  const { setStockSymbol } = useContext(StockContext);
  return (
    <ul className="custom-scrollbar absolute top-12 h-64 w-full overflow-y-scroll rounded-md border-2 border-neutral-200 bg-white">
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className="m-2 flex cursor-pointer items-center justify-between rounded-md p-4 hover:bg-gray-200"
            onClick={() => {
              setStockSymbol(item.symbol);
            }}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
