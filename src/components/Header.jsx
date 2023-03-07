import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";
const Header = ({ name }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="xl:px-32">
        <h1
          className={`text-4xl transition duration-700 ${
            darkMode ? "text-white" : null
          }`}
        >
          {name}
        </h1>
        <Search />
      </div>
      <ThemeSwitch />
    </>
  );
};

export default Header;
