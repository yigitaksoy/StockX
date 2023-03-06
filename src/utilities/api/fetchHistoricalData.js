import { finnhub } from "../../helpers/finnhubAPI";

const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
  const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;
  const apiRes = await fetch(
    `${finnhub}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`
  );

  if (!apiRes.ok) {
    throw new Error(`Symbol ${stockSymbol} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchHistoricalData;
