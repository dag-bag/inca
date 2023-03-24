/** @format */

import { useSession } from "next-auth/react";
import React from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Address } from "../../../types/address";
import { getUserData } from "../../account/user";
const { persistAtom } = recoilPersist();
const strapiIDAtom = atom({
  key: "StrapiId2",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
interface OrderType {
  address: Address;
  cart: any;
  subTotal: number;
  deliveryCost: number;
}
function CreateOrder(OrderData: OrderType) {
  const [strapiOrderId, setStrapiOrderId] = useRecoilState(strapiIDAtom);
  const createOrderFn = async () => {
    let session = await getUserData();
    let userEmail = "";
    if (!session) {
      userEmail = "guest@gmail.com";
    }
    if (session) {
      userEmail = session?.email;
    }
    const { address, cart, subTotal, deliveryCost } = OrderData;
    const resp = await fetch("/api/preorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address,
        Cart: cart,
        userEmail,
        subTotal,
        deliveryCost,
      }),
    });
    const order = await resp.json();
    console.log("order:", order);
    // setStrapiOrderId(order.orderData.data.id)
    return order;
    // ?.orderID
  };
  return createOrderFn;
}

export default CreateOrder;
