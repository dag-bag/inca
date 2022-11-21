/** @format */

import Order from "../../models/Order";

import connectDb from "../../libs/ConnectDb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      //This code is lifted from
      const { orderID } = req.query;
      const order = await Order.findOne({ orderID: orderID });

      res.json(order);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(500).json({ message: "Invalid request method" });
  }
};
export default connectDb(handler);
