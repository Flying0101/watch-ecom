"use client";
import { Watch } from "@/types/watch";
import LatestCard from "../LatestCard/LatestCard";
import { useSearch } from "@/app/contexts/WatchContext";
import { useEffect, useState } from "react";
import Link from "next/link";

const OurLatest = () => {
  const { allWatches } = useSearch();
  const [slicedWatches, setSlicedWatches] = useState([]);

  useEffect(() => {
    if (allWatches.collection && Array.isArray(allWatches.collection)) {
      const lastFive = allWatches.collection.slice(-4);
      setSlicedWatches(lastFive);
    }
  }, [allWatches]);

  return (
    <div className="relative max-w-screen-xl mx-auto px-5 py-9 md:py-20 flex gap-20 md:gap-8 flex-wrap md:flex-nowrap">
      <div className="max-w-sm w-full">
        <h2 className="text-5xl mb-8 font-serif">
          Our <br /> Latest
        </h2>
        <p className="text-lg mb-8">
          Discover the new watches which embody the brand’s uncompromising
          approach to craftsmanship.
        </p>
        <Link href='/collection'>
        <p className="font-bold group hover:cursor-pointer">
          
          <span className="group-hover:text-white transition-all ease-out duration-300">
            -
          </span>
          <span className="group-hover:text-white transition-all ease-out duration-500">
            -
          </span>
          - Explore Our Latest
        </p>
        </Link>
      </div>
      <div className="ml-auto max-w-4xl flex gap-4 overflow-x-auto pb-7">
        {slicedWatches.length > 0 &&
          slicedWatches?.map((watch: Watch) => (
            <LatestCard key={watch.id} data={watch} />
          ))}
      </div>
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-transparent via-white to-white" />
    </div>
  );
};

export default OurLatest;
