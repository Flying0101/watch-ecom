import { useState } from "react";

const CheckedInput = ({title, lbl, checkedSize, setCheckedSize}: {title: string, lbl: string, checkedSize: any, setCheckedSize: any}) => {

  

  

  return (
    <div className="py-3 mr-10 flex items-center min-w-28">
      <input onChange={()=>{setCheckedSize(lbl)}} type="checkbox" id={`${lbl}`} className="min-w-6 min-h-6 mr-2 hover:cursor-pointer" checked={checkedSize === lbl } />
      <label htmlFor={`${lbl}`} className="hover:cursor-pointer">
        {title}
      </label>
    </div>
  );
};

export default CheckedInput;
