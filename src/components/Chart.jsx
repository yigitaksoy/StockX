import { useState } from "react";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { mockHistoricalData } from "../constants/Mock";
import { convertDateToUnixTimestampToDate } from "../helpers/dateHelper";
import Card from "./Card";

const Chart = () => {
  const [data, setData] = useState(mockHistoricalData);

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertDateToUnixTimestampToDate(data.t[index]),
      };
    });
  };

  return (
    <Card>
      <ResponsiveContainer className="text-neutral-700">
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(108, 117, 125)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="rgb(108, 117, 125)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#111111"
            fillOpacity={1}
            strokeWidth={0.8}
            fill="url(#chartColor)"
          />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
