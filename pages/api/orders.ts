/** @format */

import client from "../../libs/paypal";
import Order from "../../models/Order";
import paypal from "@paypal/checkout-server-sdk";
import connectDb from "../../libs/ConnectDb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
  //This code creates an order. It is not used in this project.
  // const request = new paypal.orders.OrdersCreateRequest();
  // request.prefer("return=representation");

  if (req.method === "GET") {
    try {
      //This code is lifted from
      const { id } = req.query;
      const orders = await Order.find({ userEmail: id });

      res.json({ orders });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(500).json({ message: "Invalid request method" });
  }
};
export default connectDb(handler);
