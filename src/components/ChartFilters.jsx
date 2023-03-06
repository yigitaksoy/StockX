const ChartFilters = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`m-2 flex h-8 w-12 cursor-pointer items-center justify-center rounded-md border-1 ${
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
