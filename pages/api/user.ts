/** @format */

import { UserProp } from "./../../types/user";
/** @format */

import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../libs/ConnectDb";
import User from "../../models/User";

var bcrypt = require("bcryptjs");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { email } = req.query;

      const user = await User.findOne({ email: email }).select(
        "name email username image"
      );

      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "POST") {
    try {
      const { email, password, name, pic } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: "Please provide name, email and password",
          ok: false,
        });
      }

      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({
          error: "User already exists",
          ok: false,
        });
      }
      let salt = bcrypt.genSaltSync(10);

      const secPassword = bcrypt.hashSync(password, salt);
      const user = await User.create({
        name,
        email,
        password: secPassword,
        image: pic,
      });

      if (user) {
        res.status(200).json({
          status: 200,
          _id: user._id,
          email: user.email,
          name: user.name,
          error: null,

          msg: "User created successfully",
        });
      } else {
        return res.status(400).json({
          error: "User not created",
          success: false,
          msg: "User not created",
        });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message, success: false });
    }
  }
  if (req.method === "PUT") {
    try {
      const user = await User.findOneAndUpdate(
        { email: req.query.id },
        req.body
      );

      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  //   if (req.method === "DELETE") {
  //     try {
  //       const post = await Post.findByIdAndDelete(req.body._id);

  //       res.status(200).json(post);
  //     } catch (error) {
  //       res.status(500).json({ error: error.message });
  //     }
  //   }
};
export default connectDb(handler);
