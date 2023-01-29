/** @format */

import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../libs/ConnectDb";
import Blog from "../../models/Blog";
import Comment from "../../models/Comment";
import User from "../../models/User";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      let query = req.query;

      const comments = await Comment.find({ blog: query.id }).populate(
        "email",
        "name email image"
      );

      // .populate("user", "name image")
      // .sort({ _id: -1 });
      res.status(200).json(comments);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "POST") {
    try {
      const { text, blog, email, createdAtPost } = req.body;
      console.log(req.body);

      if (!text) {
        return res.status(400).json({
          error: "Please provide title slug text category",
          success: false,
          msg: "Please provide name, email and password",
        });
      }

      const comment = await Comment.create({
        text,
        blog,
        email,
        createdAtPost,
      });
      console.log(comment);

      const postRelated = await Blog.findByIdAndUpdate(blog, {
        $push: { comments: comment },
      });

      // push the comment into the post.comments array

      if (comment) {
        res.status(201).json(comment);
      } else {
        return res.status(400).json({
          error: "blog not created",
          success: false,
          msg: "Blog not created",
        });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message, success: false });
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
