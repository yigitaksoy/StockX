import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ChartCard = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`relative h-full w-full rounded-md border-2 transition duration-700 sm:p-0 md:p-2 ${
        darkMode
          ? "border-neutral-700 bg-zinc-900"
          : "bg-white text-neutral-400"
      }`}
    >
      {children}
    </div>
  );
};

export default ChartCard;
