import { finnhub } from "../helpers/finnhubAPI";

const fetchStockDetails = async (stockSymbol) => {
  const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;
  const apiRes = await fetch(
    `${finnhub}/stock/profile2?symbol=${stockSymbol}&token=${apiKey}`
  );

  if (!apiRes.ok) {
    throw new Error(`Symbol ${stockSymbol} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchStockDetails;
