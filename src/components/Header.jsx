import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";
const Header = ({ name, symbol, logo }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div>
        <div className="flex">
          <img src={logo} alt="logo" className="mr-2 h-8 w-8 rounded-md" />
          <h1
            className={`text-2xl font-bold transition duration-700 md:text-3xl ${
              darkMode ? "text-white" : null
            }`}
          >
            {name} <span className="text-[.8em] font-medium">({symbol})</span>
          </h1>
        </div>
        <Search />
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </>
  );
};

export default Header;
