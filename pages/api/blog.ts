/** @format */

import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../libs/ConnectDb";
import Blog from "../../models/Blog";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      if (req.query.slug) {
        const blog = await Blog.findOne({ slug: req.query.slug });

        // if (!blog.comments) {
        //     return res.status(404).json({ message: "Blog not found" });
        // }

        return res.status(200).json(blog);
      } else {
        const blogs = await Blog.find();

        return res.status(200).json(blogs);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "POST") {
    try {
      const { title, slug, text, category, author, img } = req.body;

      if (!title || !slug || !text || !category) {
        return res.status(400).json({
          error: "Please provide title slug text category",
          success: false,
          msg: "Please provide name, email and password",
        });
      }

      const slugExists = await Blog.findOne({ slug });

      if (slugExists) {
        return res.status(400).json({
          error: "Slug already exists",
          success: false,
          msg: "Slug already exists",
        });
      }

      const blog = await Blog.create({
        title,
        slug,
        text,
        category,
        author,
        img,
      });

      if (blog) {
        return res.status(201).json({
          success: true,
          msg: "blog created successfully",
          //   token: generateToken(user._id),
        });
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
