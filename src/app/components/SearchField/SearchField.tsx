"use client";
import { IconX, IconSearch } from "@tabler/icons-react";
import { useSearch } from "@/app/contexts/WatchContext";

const SearchField = () => {
  const { HandleFocus, setSearchWord, setResults, searchWord } = useSearch();

  const resetSearchWord = () => {
    setResults([]);
    setSearchWord("");
  };

  return (
    <div className="w-full flex relative">
      <input
        type="text"
        value={searchWord}
        placeholder="Search after brand"
        className="min-h-16 text-2xl sm:text-3xl md:text-5xl border-b border-black w-full mb-16 outline-none font-thin text-black"
        onFocus={() => {
          HandleFocus();
        }}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      {searchWord.length > 0 ? (
        <IconX
          onClick={() => {
            resetSearchWord();
          }}
          className="absolute right-5 w-12 h-12 hover:text-gray-500 hover:cursor-pointer"
          stroke={1}
        />
      ) : (
        <IconSearch
          className="absolute right-5 w-12 h-12 hover:text-gray-500 hover:cursor-pointer"
          stroke={1}
        />
      )}
    </div>
  );
};

export default SearchField;
