import { Watch } from "@/types/watch";
import Image from "next/image";

const LatestCard = ({ data }: { data: Watch }) => {
  return (
    <div className="max-w-xs min-w-[20rem]">
      <Image
        width={data.img.width}
        height={data.img.height}
        alt="watch"
        src={data.img}
        className="w-full object-contain max-h-[300px] min-h-[300px] px-16 py-6 bg-slate-50"
      />
      <p className="my-5 font-bold">{data.serie}</p>
      <p className="mb-9 font-light font-serif">{data.info}</p>
      <p className="font-bold hover:cursor-pointer group">
        <span className="group-hover:text-white transition-all ease-out duration-300">
          -
        </span>
        <span className="group-hover:text-white transition-all ease-out duration-500">
          -
        </span>
        - Discover more
      </p>
    </div>
  );
};

export default LatestCard;
