/** @format */

import client from "../../libs/paypal";
import paypal from "@paypal/checkout-server-sdk";
import Order from "../../models/Order";
import connectDb from "../../libs/ConnectDb";
import { NextApiRequest, NextApiResponse } from "next";
                                        
const handler = async (req: NextApiRequest, res: NextApiResponse) => {                                                                           
  //Capture order to complete payment

  const { orderID } = req.body;

  const PaypalClient = client();
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  // @ts-ignore
  request.requestBody({});
  const response = await PaypalClient.execute(request);
  if (!response) {
    res.status(500);
  }

  const order = await Order.findOneAndUpdate(
    { orderID: orderID },
    { status: "PAID" }
  );

  res.json({ ...response.result });
};

export default connectDb(handler);
