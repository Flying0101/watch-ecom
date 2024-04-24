import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { IconShoppingCart } from "@tabler/icons-react";

const NavBar = () => {
  return (
    <nav className=" group absolute px-6 w-full left-2/4 -translate-x-1/2 max-w-screen-xl h-20 top-0 backdrop-blur-md text-white transition-all ease-out duration-700 flex z-10 hover:bg-white hover:bg-opacity-50 hover:duration-[0.35s]">
      <div className="md:hidden flex justify-center content-center" >
        <HamburgerMenu xClass="group-hover:bg-black" />
      </div>

      <ul className="hidden list-none items-center md:flex">
        <li className="h-fit text-md font-bold tracking-[1px] pr-8 no-underline transition-all ease-out duration-700 group-hover:text-black hover:duration-[0.35s] hover:cursor-pointer">
          WATCH COLLECTIONS
        </li>
      </ul>

      <p className="absolute  text-5xl top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 group-hover:text-black hover:cursor-pointer">
        SM
      </p>

      <ul className="relative ml-auto flex list-none items-center">
        <li className="text-md font-bold tracking-[1px] pr-8 no-underline transition-all ease-out duration-700 group-hover:text-black hover:duration-[0.35s] hover:cursor-pointer">
          <IconShoppingCart className="size-8" />
        </li>
        <p className="absolute right-4 top-4 bg-blue-400 p-1 rounded-full text-white text-xs group-hover:text-black">
          50
        </p>
      </ul>
    </nav>
  );
};

export default NavBar;
