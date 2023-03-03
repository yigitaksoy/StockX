import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
  return (
    <button className="absolute right-8 rounded-lg border-1 border-neutral-400 p-2 shadow-lg xl:right-32">
      <MoonIcon className="h-5 w-5 cursor-pointer fill-none stroke-neutral-900 stroke-1" />
    </button>
  );
};

export default ThemeSwitch;
