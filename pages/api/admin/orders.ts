/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../../libs/ConnectDb";
import Order from "../../../models/Order";
import Cors from "cors";
import initMiddleware from "../../../libs/inititateMiddleWare";
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
  switch (req.method) {
    case "GET":
      try {
        let Orders = await Order.find({});
        return res.status(200).json({ Orders });
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, error: "some went wrong." });
      }
      break;
    case "POST":
      res.status(400).json({ error: "Invalid Request" });

      break;
    case "PUT":
      try {
        let updateProduct = await Order.findByIdAndUpdate(
          req.body.id,
          req.body
        );

        res.status(200).json({ success: "Order updated" });
      } catch (error) {
        res.status(400).json({ error: "Order not updated" });
      }
      break;
    case "DELETE":
      try {
        let id = req.query.id;
        await Order.findByIdAndDelete(id);
        res
          .status(200)
          .json({ success: true, msg: "Order Deleted Successfully" });
      } catch (error) {
        res.status(400).json({ error: "Order not Deleted" });
      }
      break;

    default:
      break;
  }
};
export default connectDb(handler);
