import { finnhub } from "../../helpers/finnhub";

const fetchSymbol = async (input) => {
  const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;
  const apiRes = await fetch(`${finnhub}/search?q=${input}&token=${apiKey}`);

  if (!apiRes.ok) {
    console.log(import.meta.env.VITE_SOME_KEY);
    throw new Error(`Symbol ${input} fetch not ok ${apiKey}`);
  }

  return apiRes.json();
};

export default fetchSymbol;
