import { useContext } from "react";
import StockContext from "../context/StockContext";

const SearchResults = ({ results, onSelect }) => {
  const { setStockSymbol } = useContext(StockContext);

  const handleItemClick = (item) => {
    setStockSymbol(item.symbol);
    onSelect(item);
  };

  return (
    <ul className="custom-scrollbar absolute top-12 h-64 w-full overflow-y-scroll rounded-md border-2 border-neutral-200 bg-white">
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className="m-2 flex cursor-pointer items-center justify-between rounded-md p-4 hover:bg-gray-200"
            onClick={() => handleItemClick(item)}
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
