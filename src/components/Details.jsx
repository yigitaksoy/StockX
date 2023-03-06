import Card from "./Card";

const Details = ({ details }) => {
  const detailsList = {
    logo: "Logo",
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitaliation",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul className="flex h-full w-full flex-col justify-between divide-y-1">
        {Object.keys(detailsList).map((item) => (
          <li key={item} className="flex flex-1 items-center justify-between">
            {item === "logo" ? (
              <>
                <span>{detailsList[item]}</span>
                <img
                  className="h-5 w-5 object-contain md:h-5 md:w-5 lg:h-7 lg:w-7"
                  src={details[item]}
                  alt={detailsList[item]}
                />
              </>
            ) : (
              <>
                <span>{detailsList[item]}</span>
                <span>
                  {item === "marketCapitalization"
                    ? `${convertMillionToBillion(details[item])}B`
                    : details[item]}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Details;
