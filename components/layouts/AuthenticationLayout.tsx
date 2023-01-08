/** @format */

import { useSession } from "next-auth/react";
import React from "react";
import IsValidUser from "../utils/isValidUser";

type Props = {
  children: React.ReactNode;
};

function AuthenticationLayout({ children }: Props) {
  const { data: session } = useSession();
  if (!session) return <IsValidUser />;
  return <>{children}</>;
}

export default AuthenticationLayout;
