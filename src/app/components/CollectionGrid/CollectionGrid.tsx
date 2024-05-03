import CollectionCard from "../CollectionCard/CollectionCard";

const CollectionGrid = () => {
  return (
    <div>
      <h2 className="mb-6 text-2xl text-gray-800">
        CODE 11.59 BY AUDEMARS PIGUET
      </h2>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
};
export default CollectionGrid;
