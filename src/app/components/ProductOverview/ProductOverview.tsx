"use client";
import { IconCheck, IconTruckDelivery, IconStar } from "@tabler/icons-react";
import { useSearch } from "@/app/contexts/WatchContext";
import Image from "next/image";
import { Watch } from "@/types/watch";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductSpecification from "../ProductSpecification/ProductSpecification";

const ProductOverview = ({ id }: { id: string }) => {
  const { allWatches } = useSearch();
  let selectedWatch = undefined;

  if (allWatches.collection) {
    selectedWatch = allWatches.collection.find(
      (watch: Watch) => watch.id === parseInt(id)
    );
  }

  const formattedRecPrice = selectedWatch?.price - 15000;
  const formattedPrice = selectedWatch?.price;

  if (!selectedWatch) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="w-full relative max-w-screen-xl mx-auto px-5 mb-14">
        <Breadcrumbs slug={selectedWatch?.model} />
        <div className="fade-border mt-3 mb-6" />
        <div className="md:flex w-full">
          <div className="w-full md:w-1/2 flex-wrap flex">
            <div className="w-full xs:max-w-20 order-2 xs:order-1 flex xs:items-center">
              <span className="flex mx-auto xs:block">
                <Image
                  alt="watch"
                  width={480}
                  height={510}
                  src="/images/rolex1.png"
                  className="w-14 object-contain xs:mb-6 xs:w-16 mx-3 hover:cursor-pointer"
                />
                <Image
                  alt="watch"
                  width={480}
                  height={510}
                  src="/images/rolex1.png"
                  className="w-14 object-contain xs:mb-6 xs:w-16 mx-3 hover:cursor-pointer"
                />
                <Image
                  alt="watch"
                  width={480}
                  height={510}
                  src="/images/rolex1.png"
                  className="w-14 object-contain xs:mb-6 xs:w-16 mx-3 hover:cursor-pointer"
                />
              </span>
            </div>

            <Image
              alt="watch"
              width={480}
              height={510}
              src={selectedWatch.img.src}
              className="w-5/6 xs:max-w-[300px] object-contain mx-auto order-1 xs:order-2"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="my-6 text-2xl font-bold">
              {selectedWatch?.brand} {selectedWatch?.model} <br />
              {selectedWatch?.variant} {selectedWatch?.diameter}
            </h2>
            <p className="mb-1"> ref: {selectedWatch?.serial}</p>
            <p className="mb-3">
              rek: pris: {formattedRecPrice?.toLocaleString()} kr
            </p>
            <p className="mb-10 flex items-center">
              {" "}
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} className="w-4 h-4 mr-1" />
              ))}{" "}
              0 reviews
            </p>
            <p className="mb-6 flex">
              <IconTruckDelivery className="mr-3 w-7 h-7" /> Stock item, ships
              within 5-10 business days. <br /> Free shipping
            </p>
            <hr className="fade-border mb-6" />
            <span className="flex flex-wrap mb-14">
              <p className="min-w-[300px] mb-3 flex">
                {" "}
                <IconCheck stroke={1} className="mr-1" /> 5 years officiall{" "}
              </p>
              <p className="min-w-[300px] mb-3 flex">
                {" "}
                <IconCheck stroke={1} className="mr-1" /> Secure payments{" "}
              </p>
              <p className="min-w-[300px] mb-3 flex">
                {" "}
                <IconCheck stroke={1} className="mr-1" /> 90 days money back
                guarantee
              </p>
              <p className="min-w-[300px] mb-3 flex">
                {" "}
                <IconCheck stroke={1} className="mr-1" /> secured deliveries
              </p>
            </span>
            <p className="font-bold text-2xl mb-6">
              {formattedPrice?.toLocaleString()} SEK
            </p>
            <button className="w-full py-4 bg-black text-white">
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
      <ProductSpecification id={id} />
    </div>
  );
};

export default ProductOverview;
