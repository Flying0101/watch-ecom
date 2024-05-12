"use client";
import { useSearch } from "@/app/contexts/WatchContext";

const FilterButton = ({ title }: { title: string }) => {
  const { activeFilter, handleFilterClick } = useSearch();

  return (
    <button
      className={`${
        activeFilter === `${title}`
          ? "text-black border-b-[#02291f]"
          : "border-b-transparent hover:border-b-gray-500 text-gray-500 "
      }  pb-2 border-b-2 duration-300 ease-in-out transition-all`}
      onClick={() => handleFilterClick(`${title}`)}
    >
      {title}
    </button>
  );
};

export default FilterButton;
