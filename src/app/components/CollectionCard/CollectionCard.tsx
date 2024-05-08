import Image from "next/image";
import { Watch } from "@/types/watch";
//type later
const CollectionCard = ({ watch }: { watch: Watch }) => {
  return (
    <div className="w-full flex items-center group min-h-[500px] text-center max-h-[700px] bg-[#f6f5f3] hover:cursor-pointer">
      <div className="h-fit mx-auto">
        <Image
          width={watch.img.width}
          height={watch.img.height}
          alt="watch"
          src={watch.img}
          className="mx-auto w-[10rem] py-8 transition-all duration-500 ease-in-out group-hover:w-[12rem] group-hover:mb-4"
        />
        <p className="px-3 text-sm lg:text-base text-gray-700 duration-500 ease-in-out group-hover:opacity-0">
          {watch.serial}
        </p>
        <h2 className="px-3 text-base lg:text-xl font-semibold">
          {watch.model}
        </h2>
        <p className="px-3 text-sm lg:text-lg">{watch.variant}</p>
        <p className="px-3 text-sm lg:text-base text-gray-700 font-light duration-500 ease-in-out group-hover:opacity-0">
          {watch.material}
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
