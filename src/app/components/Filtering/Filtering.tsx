import FilterButton from "../FilterButton/FilterButton";
import CheckedInput from "./CheckedInput/CheckedInput";
import { useSearch } from "@/app/contexts/WatchContext";
import Image from "next/image";

const Filtering = () => {
  const {
    activeFilter,
    checkedSize,
    setCheckedSize,
    setActiveFilter,
    checkedMaterial,
    setCheckedMaterial,
  } = useSearch();

  return (
    <div>
      <div className="flex w-full my-7 flex-wrap text-lg justify-around md:justify-center border-b border-black">
        <span className="md:mr-10 font-light">Filter by</span>
        <div className="md:mr-10">
          <FilterButton title="Size" />
        </div>
        <div className="md:mr-10">
          <FilterButton title="Collection" />
        </div>
        <div className="md:mr-10">
          <FilterButton title="Material" />
        </div>
      </div>

      <div
        className={
          activeFilter.length > 0
            ? "relative w-full border-b-2 border-b-black mb-7 pb-10"
            : "hidden"
        }
      >
        <button
          onClick={() => {
            setActiveFilter("");
          }}
          className="absolute bottom-0  right-0 px-20 py-3 bg-black text-white text-sm"
        >
          DONE
        </button>

        {activeFilter === "Material" && (
          <div>
            <p className="font-thin text-3xl mb-3">CASES</p>
            <div className="flex">
              <div
                className="py-3 max-w-[90px] mr-5 hover:cursor-pointer"
                onClick={() => {
                  setCheckedMaterial("18-CARAT GOLD");
                }}
              >
                <Image
                  alt="material"
                  src="/material/gold-material.png"
                  width={1000}
                  height={1000}
                  className="w-20 h-20 mb-2"
                />
                <p>18-CARAT GOLD</p>
              </div>
              <div
                className="py-3 max-w-[90px] hover:cursor-pointer"
                onClick={() => {
                  setCheckedMaterial("Stainless steel");
                }}
              >
                <Image
                  alt="material"
                  src="/material/steel-material.png"
                  width={1000}
                  height={1000}
                  className="w-20 h-20 mb-2"
                />
                <p>Stainless Steel</p>
              </div>
            </div>
            <button
              onClick={() => {
                setActiveFilter("");
              }}
              className="absolute bottom-0  right-0 px-20 py-3 bg-black text-white text-sm"
            >
              DONE
            </button>
          </div>
        )}
        {activeFilter === "Size" && (
          <div>
            <p className="font-thin text-3xl mb-3">CASE DIAMETER</p>
            <div className="flex flex-wrap w-full">
              <CheckedInput
                title="43 mm"
                lbl="43"
                checkedSize={checkedSize}
                setCheckedSize={setCheckedSize}
              />
              <CheckedInput
                title="42 mm"
                lbl="42"
                checkedSize={checkedSize}
                setCheckedSize={setCheckedSize}
              />
              <CheckedInput
                title="41 mm"
                lbl="41"
                checkedSize={checkedSize}
                setCheckedSize={setCheckedSize}
              />
              <CheckedInput
                title="40 mm"
                lbl="40"
                checkedSize={checkedSize}
                setCheckedSize={setCheckedSize}
              />
              <CheckedInput
                title="39 mm"
                lbl="39"
                checkedSize={checkedSize}
                setCheckedSize={setCheckedSize}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filtering;
