import { finnhub } from "../../helpers/finnhubAPI";

const fetchSymbol = async (input) => {
  const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;
  const apiRes = await fetch(`${finnhub}/search?q=${input}&token=${apiKey}`);

  if (!apiRes.ok) {
    throw new Error(`Symbol ${input} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchSymbol;
