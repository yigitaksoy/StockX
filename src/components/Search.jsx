import { useState, useRef, useEffect } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchResults from "./SearchResults";
import fetchSymbol from "../utilities/api/fetchSymbol";

const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  const ref = useRef(null);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await fetchSymbol(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setBestMatches([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setBestMatches]);

  return (
    <div
      ref={ref}
      className="w-70 relative z-50 my-4 flex items-center rounded-md border-2 border-neutral-200 bg-white md:w-96 lg:w-96"
    >
      <input
        type="text"
        value={input}
        className="w-full rounded-md px-4 py-2 focus:outline-none"
        placeholder="Search"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button onClick={clear} className="m-1">
          <XMarkIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}

      <button
        onClick={updateBestMatches}
        className="m-1 flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 p-2 transition hover:bg-neutral-700"
      >
        <MagnifyingGlassIcon className="h-4 w-4  fill-gray-100" />
      </button>

      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
};

export default Search;
