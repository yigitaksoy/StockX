import { useContext } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitch = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      onClick={toggleDarkMode}
      className="absolute right-8 rounded-lg border-1 border-neutral-700 p-2 shadow-lg xl:right-32"
    >
      {darkMode ? (
        <SunIcon className="h-5 w-5 cursor-pointer stroke-neutral-300 stroke-1" />
      ) : (
        <MoonIcon className="stroke-3 h-5 w-5 cursor-pointer fill-none stroke-neutral-900" />
      )}
    </button>
  );
};

export default ThemeSwitch;
