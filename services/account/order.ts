/** @format */

import { Order } from "@paypal/checkout-server-sdk/lib/orders/lib";
import { Address } from "../../types/address";
import { getUserData } from "./user";

interface OrderType {
  address: Address;
  cart: any;
  subTotal: number;
  deliveryCost: number;
}
const gerAllOrderDetails = async () => {
  const orderResp = await fetch(`/api/orders`);
  const orderData = await orderResp.json();
  return orderData;
};
const createOrderFn = async (OrderData: OrderType) => {
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
  return order?.orderID;
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
// };
export { gerAllOrderDetails, createOrderFn };
