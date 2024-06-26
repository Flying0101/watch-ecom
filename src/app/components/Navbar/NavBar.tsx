"use client";
import { useSearch } from "@/app/contexts/WatchContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const { cartWatches } = useSearch();
  const [toggle, setToggle] = useState(false);

  const totalQty = cartWatches.reduce(
    (acc: any, watch: any) => acc + watch.qty,
    0
  );

  return (
    <nav className="group absolute px-6 w-full left-2/4 -translate-x-1/2 max-w-screen-xl xl:rounded-full xl:top-3 h-20 top-0 backdrop-blur-md transition-all ease-out duration-700 flex z-10 bg-white bg-opacity-70 hover:duration-[0.35s]">
      <div
        className="md:hidden flex justify-center content-center"
        onClick={() => setToggle(!toggle)}
      >
        <HamburgerMenu xClass="group-hover:bg-black" />
      </div>

      <ul className="hidden list-none items-center md:flex">
        <li className="h-fit text-md font-bold tracking-[1px] no-underline hover:cursor-pointer">
          <Link href="/collection">WATCH COLLECTIONS</Link>
        </li>
      </ul>
      <Link href={toggle ? "/collection" : "/"}>
        {toggle ? (
          <p className="absolute text-2xl font-medium top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
            COLLECTION
          </p>
        ) : (
          <p className="absolute text-5xl top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
            SM
          </p>
        )}
      </Link>
      <ul className="relative ml-auto flex list-none items-center">
        <li className="text-md font-bold tracking-[1px] md:pr-3 no-underline hover:cursor-pointer">
          <Link href="/cart">
            <IconShoppingCart className="size-8" />
          </Link>
        </li>
        <Link href="/cart">
          <p
            className={
              cartWatches.length > 0
                ? "absolute -right-2 md:right-1 top-4 bg-blue-400 p-1 w-6 h-6 text-center rounded-full text-black text-xs"
                : "hidden"
            }
          >
            {totalQty}
          </p>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
