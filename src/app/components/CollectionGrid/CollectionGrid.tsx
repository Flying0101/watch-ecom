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
    setResults,
    setWatchesQty,
  } = useSearch();

  // check for cleaner solution later and type.
  useEffect(() => {
    const filterData = (data: any[]) => {
      if (!data) {
        return [];
      }
      if (!checkedSize && !checkedMaterial) {
        return data;
      }

      if (checkedSize) {
        data = data.filter(
          (watch: Watch) => watch.diameter === `${checkedSize} mm`
        );
      }
      if (checkedMaterial) {
        data = data.filter(
          (watch: Watch) => watch.material === checkedMaterial
        );
      }
      return data;
    };
    setFilteredData(filterData(data));
    setWatchesQty(filteredData?.length);
  }, [data, checkedSize, checkedMaterial]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <span className="flex">
        <p className="mb-6 font-light">{filteredData.length} watches</p>

        {checkedSize > 0 && (
          <p
            onClick={() => {
              setCheckedSize("");
            }}
            className="ml-3 h-fit flex items-center px-3 border border-black hover:text-gray-500 hover:cursor-pointer hover:border-gray-500"
          >
            {checkedSize} mm <span className="text-sm ml-3">x</span>
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
