/** @format */

import Order from "../../models/Order";

import connectDb from "../../libs/ConnectDb";
import { NextApiRequest, NextApiResponse } from "next";

const cors = initMiddleware(
  Cors({
    methods: ["POST", "GET", "PUT", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
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
