import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className="absolute left-4 top-4 text-lg text-neutral-400 xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="flex h-full w-full items-center justify-around">
        <span className="flex items-center text-2xl xl:text-4xl 2xl:text-5xl">
          ${price}
          <span className="m-2 text-lg text-neutral-400 xl:text-xl 2xl:text-2xl">
            {currency}
          </span>
        </span>
        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {change} <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;
