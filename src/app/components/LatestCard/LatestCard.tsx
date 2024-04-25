import Image from "next/image";

const LatestCard = () => {
  return (
    <div className="max-w-xs min-w-[20rem]">
      <Image
        width={421}
        height={593}
        alt="watch"
        src="/images/rolex-kermit.png"
        className="w-full px-16 py-6 bg-slate-50"
      />
      <p className="my-5 font-bold">A New "Sand Gold" Shade</p>
      <p className="mb-9 font-light font-serif">
        The new Royal Oak Selfwinding Flying Tourbillon Openworked introduces a
        new 18-carat gold alloy, called sand gold.
      </p>
      <p className="font-bold hover:cursor-pointer group">
        <span className="group-hover:text-white transition-all ease-out duration-300">-</span>
        <span className="group-hover:text-white transition-all ease-out duration-500">-</span>- Discover more
      </p>
    </div>
  );
};

export default LatestCard;
