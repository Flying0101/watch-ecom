"use client";
import CollectionGrid from "../CollectionGrid/CollectionGrid";
import { useSearch } from "@/app/contexts/WatchContext";
import SearchField from "../SearchField/SearchField";

const CollectionOverview = () => {
  const { allWatches, loading } = useSearch();

  return (
    <section className="max-w-screen-xxl mx-auto px-5 py-9 md:py-20 lg:px-10">
      <SearchField />
      <CollectionGrid data={allWatches} loading={loading} defaultTitle={true} />
    </section>
  );
};

export default CollectionOverview;
