"use client";
import { IconCheck, IconTruckDelivery, IconStar } from "@tabler/icons-react";
import { useSearch } from "@/app/contexts/WatchContext";
import Image from "next/image";
import { Watch } from "@/types/watch";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import { useEffect, useState } from "react";
import { IconChecks } from "@tabler/icons-react";

const ProductOverview = ({ id }: { id: string }) => {
  const { allWatches, addToCart } = useSearch();
  const [clicked, setClicked] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  let selectedWatch = undefined;

  if (allWatches.collection) {
    selectedWatch = allWatches.collection.find(
      (watch: Watch) => watch.id === parseInt(id)
    );
  }

  useEffect(() => {
    if (selectedWatch) {
      setCurrentImage(selectedWatch.img.src);
    }
  }, [selectedWatch]);

  const handleImageClick = (newImageSrc: any) => {
    setCurrentImage(newImageSrc);
  };

  const formattedRecPrice = selectedWatch?.price - 15000;
  const formattedPrice = selectedWatch?.price;

  if (!selectedWatch) {
    return <div>Loading...</div>;
  }

  const handelAddToCart = () => {
    if (!clicked) {
      addToCart(selectedWatch);
    }
  };

  return (
    <div>
      <div className="w-full relative max-w-screen-xl mx-auto px-5 mb-14">
        <Breadcrumbs slug={selectedWatch?.model} />
        <div className="fade-border mt-3 mb-6" />
        <div className="md:flex w-full">
          <div className="w-full md:w-1/2 flex-wrap flex">
            <div className="w-full xs:max-w-20 order-2 xs:order-1 flex xs:items-center">
              <span className="flex mx-auto xs:block mt-6 sm:mt-0">
                <Image
                  alt="watch"
                  width={selectedWatch.img.width}
                  height={selectedWatch.img.height}
                  src={selectedWatch.img.src}
                  className={`w-14 object-contain xs:mb-6 xs:w-16 mx-3 h-14 md:h-20 hover:cursor-pointer ${
                    currentImage === selectedWatch.img.src
                      ? "opacity-40"
                      : "hover:opacity-70"
                  }`}
                  onClick={() => handleImageClick(selectedWatch.img.src)}
                />
                <Image
                  alt="watch"
                  width={selectedWatch.imgtwo.width}
                  height={selectedWatch.imgtwo.height}
                  src={selectedWatch.imgtwo.src}
                  className={`w-14 object-contain xs:mb-6 xs:w-16 mx-3 h-14 md:h-20 hover:cursor-pointer ${
                    currentImage === selectedWatch.imgtwo.src
                      ? "opacity-40"
                      : "hover:opacity-70"
                  }`}
                  onClick={() => handleImageClick(selectedWatch.imgtwo.src)}
                />
                <Image
                  alt="watch"
                  width={selectedWatch.imgthree.width}
                  height={selectedWatch.imgthree.height}
                  src={selectedWatch.imgthree.src}
                  className={`w-14 object-contain xs:mb-6 xs:w-16 mx-3 h-14 md:h-20 hover:cursor-pointer ${
                    currentImage === selectedWatch.imgthree.src
                      ? "opacity-40"
                      : "hover:opacity-70"
                  }`}
                  onClick={() => handleImageClick(selectedWatch.imgthree.src)}
                />
              </span>
            </div>

            <Image
              alt="watch"
              width={selectedWatch.img.width}
              height={selectedWatch.img.height}
              src={currentImage}
              className="w-5/6 h-[300px] md:h-[400px] my-auto xs:max-w-[300px] object-contain mx-auto order-1 xs:order-2"
              priority
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
            <button
              onClick={() => {
                setClicked(true), handelAddToCart();
              }}
              className="w-full flex items-center justify-center py-4 bg-black text-white"
            >
              {clicked ? (
                <>
                  Item added
                  <IconChecks className="ml-2" stroke={1} />
                </>
              ) : (
                "Add to cart"
              )}
            </button>
          </div>
        </div>
      </div>
      <ProductSpecification
        specificWatch={selectedWatch}
        price={formattedPrice}
        recPrice={formattedRecPrice}
      />
    </div>
  );
};

export default ProductOverview;
