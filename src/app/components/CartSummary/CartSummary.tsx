import { IconChevronLeft } from "@tabler/icons-react";

const CartSummary = () => {
  return (
    <div className="w-full py-20 min-h-[65vh] md:min-h-[0vh] md:py-0 md:w-1/4 border-t border-t-gray-700 md:border-none">
      <div className="max-w-44 h-full flex flex-col justify-between mx-auto">
        <span>
          <h2 className="font-semibold mb-2">Summary</h2>
          <p className="text-gray-600 font-medium">In your bag 4 items</p>
        </span>
        <span>
          <p className="text-gray-600 font-medium">Shipping Cost:</p>
          <p className="font-bold mb-3">Free</p>
          <p className="text-gray-600 font-medium">Total Cost:</p>
          <p className="font-bold">2 233 032 SEK</p>
        </span>

        <span>
          <p className="text-xs font-semibold mb-3 flex items-center justify-center hover:cursor-pointer">
            <IconChevronLeft className="w-5" /> BACK TO SHOPPING
          </p>

          <button className="w-full bg-[#323232] text-white py-2">
            CHECK OUT
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartSummary;
