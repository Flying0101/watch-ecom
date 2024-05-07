'use client'
import CollectionGrid from "../CollectionGrid/CollectionGrid";
import { useSearch } from "@/app/contexts/WatchContext";

const CollectionOverview = () => {
  const {allWatches, loading} = useSearch();
  
  return (
    <section className="max-w-screen-xxl mx-auto px-5 py-9 md:py-20 lg:px-10">
      <p>SEARCH FUNCTION HERE</p>
      <CollectionGrid data={allWatches} loading={loading} />
    </section>
  );
};

export default CollectionOverview;
