"use client";
import CollectionGrid from "../CollectionGrid/CollectionGrid";
import { useSearch } from "@/app/contexts/WatchContext";
import SearchField from "../SearchField/SearchField";

const CollectionOverview = () => {
  const { allWatches, loading, results } = useSearch();

  const searchWatches = results.map((watch: any) => {
    return watch.item;
  });
  return (
    <section className="max-w-screen-xxl mx-auto px-5 py-9 md:py-20 lg:px-10">
      <SearchField />

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
