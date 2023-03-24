/** @format */

import { getSession } from "next-auth/react";
import { Address } from "../../types/address";
import { getUserData } from "./user";
type Data = {
  values: Address;
  userEmail: string;
};
export let createAddress = async (Data: Data) => {
  const session = await getSession();
  const { values, userEmail } = Data;
  let email = session?.user?.email;
  if (!session) {
    email = "guest@gmail.com";
  }

  const resp = await fetch("/api/address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...values,
      userEmail: email,
    }),
  });

  const data = await resp.json();
  return data;
};
