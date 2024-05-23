'use client'
import { Watch } from "@/types/watch";
import { IconMinus, IconPlus, IconTrashX } from "@tabler/icons-react";
import Image from "next/image";

const CartItem = ({ data, removeFromCart, removeWatch, addToCart }: { data: Watch; removeFromCart: any, removeWatch: any, addToCart: any }) => {
  

  return (
    <div className="flex sm:flex-wrap py-3 border-t border-t-[#e3e8ea]">
      <span className="flex items-center justify-center mr-3 md:mr-10 relative">
        <IconMinus
          className="w-6 h-6 bg-gray-200 rounded-full hover:cursor-pointer"
          stroke={1}
          onClick={() => removeFromCart(data.id)}
        />
        <Image
          src={data.img.src}
          width={data.img.width}
          height={data.img.height}
          alt="A watch"
          className="w-20 h-20 object-cover rounded-lg mx-2"
        />
        <p className="w-6 h-6 bg-black text-white rounded-full text-sm text-center absolute border-2 border-white left-1/2 transform -translate-x-1/2">
          {data.qty}
        </p>
        <IconPlus
          className="w-6 h-6 bg-gray-200 rounded-full hover:cursor-pointer"
          stroke={1}
          onClick={() => addToCart(data)}
        />
      </span>

      <div className="flex-col sm:flex-row flex flex-wrap w-1/2 justify-between">
        <div className="flex flex-col justify-center mr-3">
          <p className="text-gray-600 font-medium text-sm mb-1">{data.brand}</p>
          <p className="font-semibold text-sm">{data.model}</p>
        </div>

        <p className="my-auto font-bold text-sm mr-3">
          {data.total.toLocaleString()} SEK
        </p>
        <IconTrashX
          onClick={() => removeWatch(data.id)}
          className="my-auto mt-3 sm:mt-auto text-[#737677] hover:text-[#725858] hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartItem;
