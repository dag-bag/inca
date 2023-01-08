/** @format */

import Link from "next/link";
import React from "react";

type Props = {};

function IsValidUser({}: Props) {
  return (
    <div className="h-[60vh] flex justify-center items-center flex-col">
      <h1 className="mt-6 text-4xl font-bold text-center text-[#333] uppercase">
        Please Login into your account
      </h1>
      <Link href={"/login"}>
        <button className="bg-[#333] text-white rounded-sm py-2 px-3 mt-4">
          Login Now
        </button>
      </Link>
    </div>
  );
}

export default IsValidUser;
