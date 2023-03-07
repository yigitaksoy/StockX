import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`relative h-full w-full rounded-md border-2 p-8 transition duration-700 ${
        darkMode
          ? "border-neutral-700 bg-zinc-900"
          : "bg-white text-neutral-400"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
