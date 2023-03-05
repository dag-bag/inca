/** @format */

import React from "react";
import { atom, useRecoilState } from "recoil";
import Image from "next/image";
import { useEffect } from "react";
export const menuState = atom({
  key: "menuState",
  default: true,
});
import { GrClose } from "react-icons/gr";
import MenuLi from "./MenuLi";

interface Props {
  NavData: {
    title: string;
    href: string;
    dropdown?: boolean;
    DropDownData?: string[];
  }[];
}
const SmallNavbar = ({ NavData }: Props) => {
  const [hide, setHide] = useRecoilState(menuState);

  useEffect(() => {
    const body = document.querySelector('body') as any;
    if (!hide) {
      body.classList.add('overflow-y-hidden');
    } else {
      body.classList.remove('overflow-y-hidden');
    }
  }, [hide]);

  return (
    <>
      <div className="bg-red-200 h-screen  absolute left-0 z-50 top-0"></div>
      <div
        className={`h-screen transition-all duration-200 absolute left-0 z-50 inset-y-0 transform  w-[90vw]  ease-in-out ${hide ? "-translate-x-full" : ""
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
            <ul className="p-8 space-y-2 overflow-y-scroll h-[80vh]">
              {NavData.map((item, index) => {
                return (
                  <MenuLi
                    key={index}
                    title={item.title}
                    link={item.href}
                    more={item.dropdown}
                    DropDownData={item.DropDownData}
                    onClick={() => setHide(true)}
                  />
                );
              })}
            </ul>
          </div>

          <div className="text-center bottom-0 absolute w-full">
            <hr className="m-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallNavbar;
