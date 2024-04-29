"use client";
import { useRouter } from "next/navigation";

const CTA = ({
  title,
  ctaText,
  path,
}: {
  title: string;
  ctaText: string;
  path: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${path}`);
  };
 
  return (
    <div className="w-full flex justify-center items-center min-h-[300px] my-7 bg-cta-image bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="z-10">
        <h2 className="text-center text-3xl mb-5 text-white font-sans">
          {title}
        </h2>
        <button
          type="button"
          onClick={handleClick}
          className="block mx-auto w-fit py-2 px-9 rounded-full border-white border-x-8 border-y-2 text-white hover:text-black hover:bg-white font-bold hover:px-12 hover:py-3 transition-all duration-500 ease-in-out"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default CTA;