import { useContext, useState, useEffect } from "react";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  createDate,
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
} from "../utilities/helpers/dateHelper";
import fetchHistoricalData from "../utilities/api/fetchHistoricalData";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";
import ChartCard from "./ChartCard";
import ChartFilters from "./ChartFilters";
import { chartConfig } from "../constants/config";

const Chart = () => {
  const { stockSymbol } = useContext(StockContext);
  const { darkMode } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };

    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <ChartCard>
      <ul className="absolute right-2 top-2 z-40 flex text-sm">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilters
              className=""
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer className="text-neutral-700">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#a9a7d4" : "rgb(108, 117, 125)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#a9a7d4" : "rgb(108, 117, 125)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={darkMode ? "#000" : "#111111"}
            fillOpacity={1}
            strokeWidth={0.8}
            fill="url(#chartColor)"
          />
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default Chart;
