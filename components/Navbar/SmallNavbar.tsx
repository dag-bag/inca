/** @format */

import React, { useState } from "react";
import { atom, useRecoilState } from "recoil";
import Image from "next/image";
export const menuState = atom({
  key: "menuState",
  default: true,
});
import { GrClose } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import MenuLi from "./MenuLi";
function SmallMenu() {
  const [hide, setHide] = useRecoilState(menuState);

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="bg-red-200 h-screen  absolute left-0"></div>
      <div
        className={`h-screen transition-all duration-200 absolute left-0 z-50 inset-y-0 transform  w-[90vw]  ease-in-out ${
          hide ? "-translate-x-full" : ""
        }`}
      >
        <div
          className="w-full h-full shadow-md bg-white absolute"
          id="sidenavSecExample"
        >
          <div className="pt-4 pb-2 px-6 ">
            <a href="#!">
              <div className="flex items-center justify-between">
                <div className="relative w-12 sm:w-10 md:w-16 cursor-pointer">
                  <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={97}
                    height={139}
                    layout="responsive"
                  />
                </div>
                <GrClose
                  className="text-3xl"
                  onClick={() => {
                    setHide(!hide);
                  }}
                />
              </div>
            </a>
          </div>
          <div>
            <ul className="p-8 space-y-2">
              <MenuLi title={"Home"} active={true} link="/" />
              <MenuLi title={"Toys"} more={true} link="/alpaca-toys" />
              <MenuLi title={"Blog"} more={true} link="/blog" />
              <MenuLi title={"About"} more={true} link="/about" />
            </ul>
          </div>

          <div className="text-center bottom-0 absolute w-full">
            <hr className="m-0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallMenu;
