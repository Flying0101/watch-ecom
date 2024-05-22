'use client'
import Image from "next/image";
import CartItem from "../CartItem/CartItem";
import { Watch } from "@/types/watch";
const CartList = ({cartWatches}: {cartWatches: Watch[]}) => {



  return (
    <div className="w-full md:w-3/4">
      <span className="flex-col flex md:flex-row flex-wrap h-full">
        <div className="w-fit mx-auto md:mx-0 md:w-full lg:w-3/4">
            {cartWatches.map((watch: Watch) => (
                <CartItem key={watch.id} data={watch} />
            ))}
           
        </div>
        <div className=" hidden lg:block w-full md:w-1/4 bg-gradient-to-t from-gray-400 to-[#e3e8ea] border-t border-t-[#e3e8ea] ">
          <Image
            src="/content/side-image.png"
            width={660}
            height={375}
            alt="Rolex Submariner Kermit"
            className="object-contain w-full h-auto"
          />
        </div>
      </span>
    </div>
  );
};

export default CartList;
