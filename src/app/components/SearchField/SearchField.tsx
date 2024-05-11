"use client";
import { IconX, IconSearch } from "@tabler/icons-react";
import { useSearch } from "@/app/contexts/WatchContext";

const SearchField = () => {
  const { HandleFocus, setSearchWord } = useSearch();

  return (
    <div className="w-full flex relative">
      <input
        type="text"
        placeholder="Search after your brand"
        className="min-h-16 text-5xl border-b border-black w-full mb-16 outline-none"
        onFocus={() => {
          HandleFocus();
        }}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <IconX
        className="absolute right-5 w-12 h-12 hover:text-gray-500 hover:cursor-pointer"
        stroke={1}
      />
      <IconSearch
        className="absolute right-5 w-12 h-12 hover:text-gray-500 hover:cursor-pointer"
        stroke={1}
      />
    </div>
  );
};

export default SearchField;
