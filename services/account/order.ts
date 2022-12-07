/** @format */

const gerAllOrderDetails = async () => {
  const orderResp = await fetch(`/api/orders`);
  const orderData = await orderResp.json();
  return orderData;
};
export { gerAllOrderDetails };
