/** @format */
import { NextApiRequest, NextApiResponse } from "next";

import connectDb from "../../libs/ConnectDb";

import Product from "../../models/Product";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    let a = req.query.cart;
    let b = JSON.stringify(a);
    let c = b.slice(1, -1);
    let d = c.split(",");

    try {
      let carts = await Product.find({
        slug: { $in: d },
      });

      return res.status(200).json(carts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
export default connectDb(handler);
