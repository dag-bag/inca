/** @format */

import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  text: string;
};

function CartButton({ link, text }: Props) {
  return (
    <>
      {" "}
      <Link href={`/${link}`}>
        <button className="w-full bg-black border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black">
          {text}
        </button>
      </Link>
    </>
  );
}

export default CartButton;
