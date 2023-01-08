/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../libs/ConnectDb";
import Product from "../../models/Product";
import Cors from "cors";
import initMiddleware from "../../libs/inititateMiddleWare";
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
        let category = await req.query.category;
        let products = await Product.find({
          category: category,
        });
        return res.status(200).json({ products });
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, error: "some went wrong." });
      }
      break;

    default:
      break;
  }
};
export default connectDb(handler);
