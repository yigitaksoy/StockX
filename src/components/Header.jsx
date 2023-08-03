import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";
const Header = ({ name, symbol }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="xl:px-32">
        <h1
          className={`text-2xl font-bold transition duration-700 md:text-3xl ${
            darkMode ? "text-white" : null
          }`}
        >
          {name} <span className="text-[.8em] font-medium">({symbol})</span>
        </h1>
        <Search />
      </div>
      <ThemeSwitch />
    </>
  );
};

export default Header;
