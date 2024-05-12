import FilterButton from "../FilterButton/FilterButton";
import CheckedInput from "./CheckedInput/CheckedInput";
import { useSearch } from "@/app/contexts/WatchContext";
import Image from "next/image";

const Filtering = () => {
  const { activeFilter, checkedValue, setCheckedValue } = useSearch();


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
      {activeFilter === "Material" && (
        <div className="w-full border-b-2 border-b-black mb-7 pb-10">
          <p className="font-thin text-3xl mb-3">CASES</p>
          <div className="flex">
            <div className="py-3 max-w-[90px] mr-5">
              <Image
                alt="material"
                src="/material/gold-material.png"
                width={1000}
                height={1000}
                className="w-20 h-20 mb-2"
              />
              <p>18-CARAT GOLD</p>
            </div>
            <div className="py-3 max-w-[90px]">
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
        </div>
      )}
      {activeFilter === "Size" && (
        <div className="w-full border-b-2 border-b-black mb-7 pb-10">
          <p className="font-thin text-3xl mb-3">CASE DIAMETER</p>
          <div className="flex flex-wrap w-full">
          <CheckedInput title="43 mm" lbl="43" checkedValue={checkedValue} setCheckedValue={setCheckedValue} />
          <CheckedInput title="42 mm" lbl="42" checkedValue={checkedValue} setCheckedValue={setCheckedValue}/>
          <CheckedInput title="41 mm" lbl="41" checkedValue={checkedValue} setCheckedValue={setCheckedValue}/>
          <CheckedInput title="40 mm" lbl="40" checkedValue={checkedValue} setCheckedValue={setCheckedValue}/>
          <CheckedInput title="39 mm" lbl="39" checkedValue={checkedValue} setCheckedValue={setCheckedValue}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filtering;
