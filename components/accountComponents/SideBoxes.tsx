/** @format */

import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  Icon: any;
  link: string;
};
function Sideboxes({ label, Icon, link }: Props) {
  return (
    <Link href={link}>
      <div className="flex   items-center border-t border-gray-400 p-4 cursor-pointer">
        <Icon className="mr-5 text-xl" />
        <h2>{label}</h2>
      </div>
    </Link>
  );
}

export default Sideboxes;
