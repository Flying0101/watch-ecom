"use client";
import { useEffect, useState } from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import { Watch } from "@/types/watch";
import { useSearch } from "@/app/contexts/WatchContext";

const CollectionGrid = ({
  data,
  loading,
  defaultTitle,
}: {
  data: any;
  loading: boolean;
  defaultTitle: boolean;
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const {
    activeFilter,
    checkedSize,
    setCheckedSize,
    setActiveFilter,
    checkedMaterial,
    setCheckedMaterial,
  } = useSearch();


  // check for cleaner solution later and type.
  useEffect(() => {
    const filterData = (data) => {
      if (!data) {
        return [];
      }
      if (!checkedSize && !checkedMaterial) {
        return data;
      }
      if (checkedSize) {
        data = data.filter((watch) => watch.diameter === `${checkedSize} mm`);
      }
      if (checkedMaterial) {
        data = data.filter((watch) => watch.material === checkedMaterial);
      }
      return data;
    };
    setFilteredData(filterData(data));
  }, [data, checkedSize, checkedMaterial]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl text-black font-thin">
        {defaultTitle
          ? "— ALL WATCHES —"
          : `WATCHES BY ${data[0].brand.toUpperCase()}`}
      </h2>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4">
        {filteredData?.map((item: Watch) => (
          <CollectionCard key={item.id} watch={item} />
        ))}
      </div>
    </div>
  );
};
export default CollectionGrid;
