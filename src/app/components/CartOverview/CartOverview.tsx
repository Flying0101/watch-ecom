'use client'
import CartList from "../CartList/CartList";
import CartSummary from "../CartSummary/CartSummary";
import { useSearch } from "@/app/contexts/WatchContext";

const CartOverview = () => {

    const{cartWatches, removeFromCart} = useSearch();       

  return (
    <div className="w-full relative max-w-screen-xl mx-auto px-5 mt-28 mb-14 min-h-[80vh]">
      <h1 className="text-3xl font-semibold mt-3 mb-6">Shopping Cart</h1>
      <span className="flex flex-wrap min-h-[70vh]">
        <CartList cartWatches={cartWatches} removeWatch={removeFromCart} />
        <CartSummary cartWatches={cartWatches}/>
      </span>
    </div>
  );
};

export default CartOverview;
