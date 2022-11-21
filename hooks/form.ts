/** @format */
import { result } from "lodash";
import { LoginUser } from "../types/user";
import { signIn } from "next-auth/react";

interface Props {
  type: "login" | "signup";
}

export const loginUser = async (user: LoginUser) => {
  const res = await signIn("credentials", {
    email: user.email,
    password: user.password,
    redirect: false,
    callbackUrl: "/",
  });

  return res;
};

export const createUser = async (user: LoginUser) => {
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      name: user?.name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const respData = await response.json();
  return respData;
};
