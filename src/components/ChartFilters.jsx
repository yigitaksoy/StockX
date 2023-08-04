const ChartFilters = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`m-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-1 md:h-8 md:w-12 ${
        active
          ? "border-y-neutral-400 bg-black text-gray-100"
          : "border-black text-neutral-500"
      }`}
    >
      {text}
    </button>
  );
};

export default ChartFilters;
