/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../../libs/ConnectDb";
import Blog from "../../../models/Blog";
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
        let Orders = await Blog.find({}).sort({ updatedAt: -1 });
        return res.status(200).json(Orders);
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, error: "some went wrong." });
      }
      break;
    case "POST":
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

      break;
    case "PUT":
      try {
        let updateProduct = await Blog.findByIdAndUpdate(req.body.id, req.body);

        res.status(200).json({ success: "Blog updated" });
      } catch (error) {
        res.status(400).json({ error: "Blog not updated" });
      }
      break;
    case "DELETE":
      try {
        let id = req.query.id;
        await Blog.findByIdAndDelete(id);
        res
          .status(200)
          .json({ success: true, msg: "Blog Deleted Successfully" });
      } catch (error) {
        res.status(400).json({ error: "Blog not Deleted" });
      }
      break;

    default:
      break;
  }
};
export default connectDb(handler);
