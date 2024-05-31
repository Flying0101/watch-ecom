import { Watch } from "@/types/watch";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Popup = ({ data, state }: { data: Watch; state: (value: boolean) => void }) => {
  return (
    <div className="fixed bg-white shadow-xl w-full z-20 top-0 md:top-20 max-w-[500px] right-0 sm:right-3 py-6 px-5 sm:px-10">
      <span className="flex justify-between ">
        <p className="text-lg font-semibold mb-6 flex items-center">
          <IconCheck
            className="mr-3 bg-green-400 rounded-full text-white w-4 h-4"
            stroke={2}
          />
          Added to Cart
        </p>
        <p onClick={()=>state(false)} className="text-lg font-thin mb-6 hover:font-medium transition-all ease-out duration-300 hover:cursor-pointer">
          X
        </p>
      </span>
      <div className="flex mb-3">
        <Image
          className="w-20 h-20 object-contain bg-slate-50 py-1 mr-6"
          alt="test"
          src={data.img.src}
          width={data.img.width}
          height={data.img.height}
        />
        <div>
          <h3 className="">{data.model}</h3>
          <p className="font-light">{data.brand}</p>
          <p className="font-light">{data.diameter}</p>
          <p className="font-semibold">{data.price.toLocaleString()} SEK</p>
        </div>
      </div>
      <Link href={"/cart"}>
        <p className="text-center rounded-full w-fit px-10 py-1 mx-auto border-2 border-gray-600 font-semibold hover:cursor-pointer hover:px-12 transition-all ease-out duration-300">
          View Cart
        </p>
      </Link>
    </div>
  );
};

export default Popup;
