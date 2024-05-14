"use client";
import CollectionGrid from "../CollectionGrid/CollectionGrid";
import { useSearch } from "@/app/contexts/WatchContext";
import SearchField from "../SearchField/SearchField";
import Filtering from "../Filtering/Filtering";

const CollectionOverview = () => {
  const {
    allWatches,
    loading,
    results,
    checkedValue,
    setCheckedValue,
    checkedMaterial,
    setCheckedMaterial,
  } = useSearch();

  const searchWatches = results.map((watch: any) => {
    return watch.item;
  });
  return (
    <section className="max-w-screen-xxl mx-auto px-5 py-9 md:py-20 lg:px-10">
      <SearchField />
      <Filtering />
      <span className="flex">
        <p className="mb-6 font-light">
          {results && results.length > 0
            ? results.length
            : allWatches && allWatches.collection
            ? allWatches.collection.length
            : 0}{" "}
          watches
        </p>

        {checkedValue > 0 && (
          <p
            onClick={() => {
              setCheckedValue("");
            }}
            className="ml-3 h-fit flex items-center px-3 border border-black hover:text-gray-500 hover:cursor-pointer hover:border-gray-500"
          >
            {checkedValue} mm <span className="text-sm ml-3">x</span>
          </p>
        )}
        {checkedMaterial.length > 0 && (
          <p
            onClick={() => {
              setCheckedMaterial("");
            }}
            className="ml-3 h-fit flex items-center px-3 border border-black hover:text-gray-500 hover:cursor-pointer hover:border-gray-500"
          >
            {checkedMaterial}
            <span className="text-sm ml-3">x</span>
          </p>
        )}
      </span>

      {results.length > 0 ? (
        <CollectionGrid
          data={searchWatches}
          loading={loading}
          defaultTitle={false}
        />
      ) : (
        <CollectionGrid
          data={allWatches.collection}
          loading={loading}
          defaultTitle={true}
        />
      )}
    </section>
  );
};

export default CollectionOverview;
