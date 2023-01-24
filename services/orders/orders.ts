/** @format */

export const fetchOrderById = async (orderId: string) => {
  const resp = await fetch("/api/getorder?orderID=" + orderId);
  const respData = await resp.json();
  return respData;
};
