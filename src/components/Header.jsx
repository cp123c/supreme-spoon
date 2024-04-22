import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="h-[4rem] py-2 lg:py-6 lg:h-[8rem] border border-b-2 sticky top-0 z-20 bg-white">
      <header className="flex w-full justify-around max-w-[1280px] mx-auto items-center">
        <ul className="flex items-center gap-24 text-xl font-semibold">
          <li className="cursor-pointer hover:underline hidden lg:block">Our Works</li>
          <li className="cursor-pointer hover:underline hidden lg:block">Solution</li>
          <li>
            <Image
              src="/logo-hori.png"
              alt="THE BYTE LAB LOGO"
              width={350}
              height={100}
              className="w-[200px]"
            />
          </li>
          <li className="cursor-pointer hover:underline hidden lg:block">Contact us</li>
          <li className="cursor-pointer hover:underline hidden lg:block">About us</li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
