/** @format */

import { Order } from "@paypal/checkout-server-sdk/lib/orders/lib";
import { getSession } from "next-auth/react";
import { Address } from "../../types/address";
import { getUserData } from "./user";

interface OrderType {
  address: Address;
  cart: any;
  subTotal: number;
  deliveryCharges: number;
}
const gerAllOrderDetails = async () => {
  const orderResp = await fetch(`/api/orders`);
  const orderData = await orderResp.json();
  return orderData;
};
const createOrderFn = async (OrderData: OrderType) => {
  let session = await getSession();
  let email = session?.user?.email;
  if (!session) {
    email = "guest@gmail.com";
  }

  const { address, cart, subTotal, deliveryCharges } = OrderData;
  const resp = await fetch("/api/preorder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address,
      Cart: cart,
      userEmail: email,
      subTotal,
      deliveryCharges,
    }),
  });
  const order = await resp.json();
  return order;
  // ?.orderID
};
// const onApprove = async (data, actions) => {
//   const resp = await fetch("/api/captureorder", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       orderID: data.orderID,
//     }),
//   });
//   const order = await resp.json();

//   router.push(`/checkout/success/${order.id}`);

//   console.log(order);
//   clearCart();
// };rfce
export { gerAllOrderDetails, createOrderFn };
