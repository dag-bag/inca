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
        let products = await Product.find();
        res.status(200).json({ products });
      } catch (error) {
        res.status(400).json({ success: false, error: "some went wrong." });
      }
      break;
    case "POST":
      try {
        const { title, desc, variant, category, tag } = req.body;
        const titleExists = await Product.findOne({ title });

        if (!title)
          return res.status(400).json({ error: "Product Name is required." });

        if (variant.length <= 0)
          return res.status(400).json({ error: "Variant is required" });
        if (!desc)
          return res.status(400).json({ error: "Description is required" });
        if (!category)
          return res.status(400).json({ error: "Category is required" });

        if (titleExists) {
          return res.status(400).json({
            error: "Product already exists",
            success: false,
            msg: "Product already exists",
          });
        }
        for (let i = 0; i < variant.length; i++) {
          let element = variant[i];

          if (!element.slug)
            return res.status(400).json({ error: "Slug is required" });
          if (!element.img)
            return res.status(400).json({ error: "Image is required" });
          if (!element.availableQty)
            return res.status(400).json({ error: "Stock is required" });
          if (!element.color)
            return res.status(400).json({ error: "Color is required" });
          if (element.price <= 0)
            return res.status(400).json({ error: "Price is required" });
          if (element.sellPrice <= 0)
            return res.status(400).json({ error: "Sell Price is required" });
          if (!element.title)
            return res.status(400).json({ error: "Title is required" });
          if (!element.metadesc)
            return res
              .status(400)
              .json({ error: "Meta Description is required" });

          let productSlug = await Product.findOne({
            "variant.slug": element.slug,
          });
          if (productSlug) {
            return res.status(400).json({
              error: "Product slug already exists",
              success: false,
              msg: "Product slug already exists",
            });
          }
        }

        let newProduct = new Product({
          title,
          tag,
          desc,
          category,
          // availableQty: req.body[i].availableQty,
          variant,
        });
        let savedProduct = await newProduct.save();

        res.status(200).json({
          savedProduct,
          success: true,
          msg: "Product Created SuccessFully yahhh",
        });
      } catch (error) {
        res.status(400).json({ error: "Product not Created", msg: error });
      }
      break;
    case "PUT":
      try {
        let updateProduct = await Product.findByIdAndUpdate(
          req.body.id,
          req.body
        );

        res.status(200).json({ success: "Products updated" });
      } catch (error) {
        res.status(400).json({ error: "Product not updated" });
      }
      break;
    case "DELETE":
      try {
        let id = req.query.id;
        await Product.findByIdAndDelete(id);
        res
          .status(200)
          .json({ success: true, msg: "Product Deleted Successfully" });
      } catch (error) {
        res.status(400).json({ error: "Product not Deleted" });
      }
      break;

    default:
      break;
  }
};
export default connectDb(handler);
