import { useState } from "react";

const CheckedInput = ({title, lbl, checkedValue, setCheckedValue}: {title: string, lbl: string, checkedValue: any, setCheckedValue: any}) => {

  

  

  return (
    <div className="py-3 mr-10 flex items-center min-w-28">
      <input onChange={()=>{setCheckedValue(lbl)}} type="checkbox" id={`${lbl}`} className="min-w-6 min-h-6 mr-2 hover:cursor-pointer" checked={checkedValue === lbl } />
      <label htmlFor={`${lbl}`} className="hover:cursor-pointer">
        {title}
      </label>
    </div>
  );
};

export default CheckedInput;
