import Image from "next/image";

const CollectionCard = () => {
  return (
    <div className="w-full flex items-center group min-h-[500px] text-center max-h-[700px] bg-[#f6f5f3]">
      <div className="h-fit mx-auto">
        <Image
          width={421}
          height={593}
          alt="watch"
          src="/images/rolex-kermit.png"
          className="mx-auto w-[10rem] py-8 group-hover:w-[12rem] group-hover:mb-4"
        />
        <p className="text-gray-700 group-hover:hidden">26393OR.OO.A348KB.01</p>
        <h2 className="text-xl font-semibold">Code 11.59 by Audemars Piguet</h2>
        <p className="text-lg">Selfwinding chronograph</p>
        <p className="text-gray-700 group-hover:hidden">
          41mm, 18-karat white gold
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
