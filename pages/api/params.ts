/** @format */

import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../libs/ConnectDb";
import Blog from "../../models/Blog";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const blogs = await Blog.find({}).select("slug");

      return res.status(200).json(blogs);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
export default connectDb(handler);
