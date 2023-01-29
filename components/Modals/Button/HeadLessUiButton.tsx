/** @format */

import React from "react";
import { useSetRecoilState } from "recoil";
import { HeadUiModalOpenAtom } from "../HeadLessUiModal";

type Props = {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

function HeadLessUiButton({ className, text, onClick }: Props) {
  const classes = `btn bg-[#333] text-white  py-4 px-8 mt-4 w-full md:w-[24rem] cursor-pointer  ${className}  `;
  const setOpenModal = useSetRecoilState(HeadUiModalOpenAtom);
  return (
    <button
      type="button"
      className={classes}
      onClick={() => setOpenModal(true)}
    >
      {text}
    </button>
  );
}

export default HeadLessUiButton;
