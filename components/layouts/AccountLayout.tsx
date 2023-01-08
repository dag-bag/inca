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
import AuthenticationLayout from "./AuthenticationLayout";

type Props = {
  children?: React.ReactNode;
};

function AccountLayout({ children }: Props) {
  const { data: session } = useSession();

  return (
    <AuthenticationLayout>
      <UserDetail />
      <div className="flex flex-wrap-reverse  justify-center items-center md:justify-start md:items-end">
        <Sidebar />
        {children}
      </div>
    </AuthenticationLayout>
  );
}

export default AccountLayout;
