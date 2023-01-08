/** @format */

import { Order } from "@paypal/checkout-server-sdk/lib/orders/lib";
import { Address } from "../../types/address";

interface OrderType {
  address: Address;
  cart: any;
  userEmail: string;
  total: number;
}
const gerAllOrderDetails = async () => {
  const orderResp = await fetch(`/api/orders`);
  const orderData = await orderResp.json();
  return orderData;
};
const createOrderFn = async (OrderData: OrderType) => {
  const { address, cart, total, userEmail } = OrderData;
  const resp = await fetch("/api/preorder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address,
      Cart: cart,
      userEmail,
      total,
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
