/** @format */

import Link from "next/link";
import React from "react";
type Props = {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};
function ModalBtn({ text, onClick, className }: Props) {
  const classes = `btn bg-[#333] text-white  py-4 px-8 mt-4 w-full md:w-[24rem] cursor-pointer  ${className} `;
  return (
    <a href="#my-modal-2" onClick={onClick} className={classes}>
      {text}
    </a>
  );
}

export default ModalBtn;
