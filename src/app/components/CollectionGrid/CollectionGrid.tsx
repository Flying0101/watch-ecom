import CollectionCard from "../CollectionCard/CollectionCard";
import { Watch } from "@/types/watch";

const CollectionGrid = ({
  data,
  loading,
  defaultTitle,
}: {
  data: any;
  loading: boolean;
  defaultTitle: boolean;
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="mb-6 text-2xl text-gray-800">
        - ALL WATCHES - 
      </h2>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4">
       {data.map((item: Watch) => (
          <CollectionCard key={item.id} watch={item} />
        ))}
      </div>
    </div>
  );
};
export default CollectionGrid;
