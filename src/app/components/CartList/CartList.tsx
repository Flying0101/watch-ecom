import Image from "next/image";
import { IconMinus, IconPlus, IconTrashX } from "@tabler/icons-react";
const CartList = () => {

  return (
    <div className="w-full md:w-3/4">
      <span className="flex-col flex md:flex-row flex-wrap h-full">
        <div className="w-fit mx-auto md:mx-0 md:w-full lg:w-3/4">
          <div className="flex sm:flex-wrap py-3 border-t border-t-[#e3e8ea]">
            <span className="flex items-center justify-center mr-3 md:mr-10 relative">
              <IconMinus
                className="w-6 h-6 bg-gray-200 rounded-full hover:cursor-pointer"
                stroke={1}
              />
              <Image
                src="/images/rolex-kermit.png"
                width={480}
                height={560}
                alt="Rolex Submariner Kermit"
                className="w-20 h-20 object-cover rounded-lg mx-2"
              />
              <p className="w-6 h-6 bg-black text-white rounded-full text-sm text-center absolute border-2 border-white left-1/2 transform -translate-x-1/2">
                1
              </p>
              <IconPlus
                className="w-6 h-6 bg-gray-200 rounded-full hover:cursor-pointer "
                stroke={1}
              />
            </span>

            <div className="flex-col sm:flex-row flex flex-wrap w-1/2 justify-between">
              <div className="flex flex-col justify-center mr-3">
                <p className="text-gray-600 font-medium text-sm mb-1">Rolex</p>
                <p className="font-semibold text-sm">Submariner "Kermit"</p>
              </div>

              <p className="my-auto font-bold text-sm mr-3">1 223 423 SEK</p>
              <IconTrashX className="my-auto mt-3 sm:mt-auto   hover:cursor-pointer" />
            </div>
          </div>
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
