/** @format */

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import connectDb from "../../libs/ConnectDb";
import Address from "../../models/Address";
import Blog from "../../models/Blog";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const ip = req.connection.remoteAddress;

      let { email } = req.query;
      if (email === "guest@gmail.com") {
        email = `guest${ip}@gmail.com`;
      }

      const address = await Address.find({ userEmail: email });
      return res.status(200).json(address);
    } catch (error) {
      if (!error) return res.status(404).json({ message: "Address not found" });
      res.status(500).json({ error: `Internal Server Error ${error} ` });
    }
  }
  if (req.method === "POST") {
    try {
      let {
        userEmail: userEmail,
        address1,
        city,
        state,
        zipcode,
        country,
        firstName,
        lastName,
        phone,
        email,
        address2,
      } = req.body;
      const ip = req.connection.remoteAddress;

      if (
        !address1 ||
        !city ||
        !state ||
        !zipcode ||
        !country ||
        !firstName ||
        !phone ||
        !email
      ) {
        return res.status(400).json({
          error: "Please provide title slug text category",
          success: false,
          msg: "Please provide name, email and password",
        });
      }
      if (userEmail === "guest@gmail.com") {
        userEmail = `guest${ip}@gmail.com`;
      }
      const blog = await Address.create({
        userEmail: userEmail,
        address1,
        address2,
        city,
        state,
        zipcode,
        country,
        firstName,
        lastName,
        phone,
        email,
      });

      if (blog) {
        return res.status(201).json({
          success: true,
          msg: "address created successfully",
        });
      } else {
        return res.status(400).json({
          error: "blog not created",
          success: false,
          msg: "Blog not created",
        });
      }
    } catch (error) {
      res.status(500).json({ error: `Internal Server error`, success: false });
    }
  }
  //   if (req.method === "PUT") {
  //     try {
  //       const post = await Post.findByIdAndUpdate(req.body._id, req.body);

  //       res.status(200).json(post);
  //     } catch (error) {
  //       res.status(500).json({ error: error.message });
  //     }

  //   }
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const post = await Address.findByIdAndDelete(id);

      res.status(200).json({ success: true, msg: "address deleted", id: id });
    } catch (error) {
      res.status(500).json({ error: `internal server error ${error}` });
    }
  }
};
export default connectDb(handler);
