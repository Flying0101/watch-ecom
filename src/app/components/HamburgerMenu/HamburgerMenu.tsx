"use client";
import React, { useState } from "react";
const HamburgerMenu = ({ xClass }: { xClass?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col justify-center items-center z-20"
    >
      <span
        className={`bg-white block transition-all duration-300 ease-out 
                          h-[0.20rem]  w-8 rounded-sm ${xClass} ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-white block  transition-all duration-300 ease-out 
                          h-[0.20rem] w-8 rounded-sm my-0.5 ${xClass} ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-white block  transition-all duration-300 ease-out 
                          h-[0.20rem] w-8 rounded-sm ${xClass} ${
          isOpen ? "-rotate-45 -translate-y-[0.39rem]" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
