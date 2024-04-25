import LatestCard from "../LatestCard/LatestCard";

const OurLatest = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 py-9 md:py-20 flex gap-20 md:gap-8 flex-wrap md:flex-nowrap">
      <div className="max-w-sm w-full">
        <h2 className="text-5xl mb-8 font-serif">
          Our <br /> Latest
        </h2>
        <p className="text-lg mb-8">
          Discover the new watches which embody the brand’s uncompromising
          approach to craftsmanship.
        </p>
        <p className="font-bold group hover:cursor-pointer">
          <span className="group-hover:text-white transition-all ease-out duration-300">-</span>
          <span className="group-hover:text-white transition-all ease-out duration-500">-</span>- Explore Our Latest
        </p>
      </div>
      <div className="ml-auto max-w-4xl flex gap-4 overflow-x-auto pb-7">
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
      </div>
    </div>
  );
};

export default OurLatest;
