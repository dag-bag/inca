/** @format */

import { concat, keyBy, merge, union } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../libs/ConnectDb";

import Product from "../../models/Product";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const products = await Product.find({}).select("variant");

      const filterSlug = products.map((product) => {
        return product.variant.map((variant, index) => {
          let slugs = variant.slug;
          return slugs;
        });
      });
      let moreDo = concat(...filterSlug);

      return res.status(200).json(moreDo);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
export default connectDb(handler);
