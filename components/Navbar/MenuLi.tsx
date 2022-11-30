/** @format */

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { menuState } from "./SmallNavbar";
import { useRouter } from "next/router";

type Props = {
  title: string;
  more?: boolean;
  link: string;
  active?: boolean;
};
function MenuLi({ title, more, link }: Props) {
  const [hide, setHide] = useRecoilState(menuState);
  const router = useRouter();

  return (
    <Link href={link}>
      <div
        className={`flex justify-between items-center ${
          router.pathname === link && "bg-gray-200"
        } p-4 cursor-pointer `}
        onClick={() => {
          setHide(!hide);
        }}
      >
        <li className="text-2xl">{title}</li>
        {more && <AiOutlineArrowRight className="text-2xl" />}
      </div>
    </Link>
  );
}

export default MenuLi;
