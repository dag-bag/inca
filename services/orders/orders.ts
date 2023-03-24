/** @format */

import axios from "axios";
import { getSession } from "next-auth/react";
import strapi from "../../utils/strapi";
import { MainDatum } from "../account/types/orders";
import { Main, MainDatum as Order } from "../product/order";

export const fetchOrderById = async (orderId: string) => {
  const order = await strapi.find<Order[]>("orders", {
    filters: {
      orderID: orderId,
    },
  });
  return order;
};

export const getAllOrders = async () => {
  const session = await getSession();
  const userOrders = await strapi.find<MainDatum[]>("orders", {
    filters: {
      userEmail: session?.user.email,
    },
  });
  // const resp = await axios.get("/api/orders?id=" + session?.user.email);
  // const respData = await resp.json();
  return userOrders;
};
