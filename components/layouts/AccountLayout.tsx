/** @format */
"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Sidebar from "../accountComponents/Sidebar";
import UserDetail from "../accountComponents/User";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../atoms/account";

import AccountBox from "../accountComponents/AccountBox";
import Flex from "../utils/Flex";
import Grid from "../utils/Grid";

type Props = {
  children?: React.ReactNode;
};

function AccountLayout({ children }: Props) {
  const { data: session } = useSession();
  if (!session) {
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
  return (
    <div>
      <UserDetail />
      <div className="flex flex-wrap-reverse  justify-center items-center md:justify-start md:items-end">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default AccountLayout;
