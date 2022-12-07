/** @format */

import { Address } from "../../types/address";
type Data = {
  values: Address;
  userEmail: string;
};
export let createAddress = async (Data: Data) => {
  const { values, userEmail } = Data;
  const resp = await fetch("/api/address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...values, userEmail }),
  });

  const data = await resp.json();
  return data;
};
