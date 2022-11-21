/** @format */

import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../libs/ConnectDb";

import Product from "../../models/Product";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const products = await Product.find({
        "variant.size": req.query.size,
      });

      //

      return res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
export default connectDb(handler);
