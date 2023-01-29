/** @format */

import axios from "axios";
import { getSession } from "next-auth/react";

export const fetchOrderById = async (orderId: string) => {
  const resp = await fetch("/api/getorder?orderID=" + orderId);
  const respData = await resp.json();
  return respData;
};

export const getAllOrders = async () => {
  const session = await getSession();
  const resp = await axios.get("/api/orders?id=" + session?.user.email);
  // const respData = await resp.json();
  return resp.data.orders;
};
