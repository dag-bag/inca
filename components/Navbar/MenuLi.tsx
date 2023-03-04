/** @format */

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { menuState } from "./SmallNavbar";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
type Props = {
  title: string;
  more?: boolean;
  link: string;
  active?: boolean;
  DropDownData?: string[];
  onClick: () => void;
};
function MenuLi({ title, more, link, DropDownData, onClick }: Props) {
  const [hide, setHide] = useRecoilState(menuState);
  const router = useRouter();

  return (
    <div
      className={` ${
        router.pathname === link && "bg-gray-200 rounded-lg"
      } p-4 cursor-pointer `}

      // onClick={() => {
      //   setHide(!hide);
      // }}
    >
      {more ? (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 flex-row">
                <li className="text-2xl">{title}</li>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black mt-2`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pt-4  text-sm text-gray-500">
                {DropDownData?.map((item, index) => {
                  return (
                    <Link href={`${item}`} key={index} onClick={onClick}>
                      <>
                        <button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 flex-row">
                          <li className="text-2xl">{item}</li>
                        </button>
                      </>
                      {/* <li className="text-2xl">{title}</li> */}
                    </Link>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ) : (
        <Link href={link} onClick={onClick}>
          <>
            <button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 flex-row">
              <li className="text-2xl">{title}</li>
            </button>
          </>
          {/* <li className="text-2xl">{title}</li> */}
        </Link>
      )}

      {/* {more && <ChevronUpIcon className="text-2xl" />} */}
    </div>
  );
}

export default MenuLi;
