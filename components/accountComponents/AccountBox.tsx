/** @format */

import React from "react";

import Link from "next/link";
type Props = {
  label: string;
  Icon: any;
  link: string;
};
function AccountBox({ label, Icon, link }: Props) {
  return (
    <Link href={link}>
      <div className="border border-[#333] px-5 py-8 flex  justify-center space-x-7 cursor-pointer group rounded-md ">
        {/* firsts container that contain icon */}
        <div>
          <Icon className="text-3xl mt-4  " />
        </div>
        {/* second container that contain texts */}
        <div>
          <h4 className="py-3 font-semibold text-2xl group-hover:underline">
            {label}
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            beatae, eveniet deleniti
          </p>
        </div>
      </div>
    </Link>
  );
}

export default AccountBox;
