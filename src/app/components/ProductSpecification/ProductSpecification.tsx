import { Watch } from "@/types/watch";

const ProductSpecification = ({
  specificWatch,
  price,
  recPrice,
}: {
  specificWatch: Watch;
  price: Number;
  recPrice: Number;
}) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-screen-xl mx-auto px-5">
        <p className="px-3 py-2 bg-[#f4f5f7] w-fit underline">Specification</p>
      </div>

      <div className="bg-[#f4f5f7] w-full">
        <div className="flex flex-wrap w-full max-w-screen-xl mx-auto px-5 py-10">
          <div className="w-full md:w-1/2 mb-14">
            <p className="mb-6">Material & Utförande</p>
            <span className="flex mb-3">
              <p className="min-w-44">Manufacture:</p>
              <p className="">{specificWatch.brand}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Modell:</p>
              <p className="">{specificWatch.model}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Rec, price:</p>
              <p className="">{recPrice.toLocaleString()} SEK</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Serie:</p>
              <p className="">{specificWatch.serie}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Type:</p>
              <p className="">{specificWatch.sort}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Diameter:</p>
              <p className="">{specificWatch.diameter}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Thickness:</p>
              <p className="">12.00 mm</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Case:</p>
              <p className="">{specificWatch.material}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Rear housing:</p>
              <p className="">Solid</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Bracelet:</p>
              <p className="">
                {specificWatch.bracelet}, {specificWatch.clasp}
              </p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Dial:</p>
              <p className="">{specificWatch.dial}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Bezel:</p>
              <p className="">{specificWatch.bezel}</p>
            </span>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-6">Urverk & Funktioner</p>
            <span className="flex mb-3">
              <p className="min-w-44">Clockwork:</p>
              <p className="">{specificWatch.variant}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Timepiece:</p>
              <p className="">28800 vph</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Date:</p>
              <p className="">Date</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Water Resistant:</p>
              <p className="">{specificWatch.resistance}</p>
            </span>
            <span className="flex mb-3">
              <p className="min-w-44">Material:</p>
              <p className="">{specificWatch.material}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
