/** @format */
import initMiddleware from "../../libs/inititateMiddleWare";
import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["POST", "GET", "PUT"],
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  if (req.body.secret !== "vir") {
    return res.status(401).json({ message: "Invalid token" });
  }
  let body = req.body;
  if (!body) {
    return res.status(400).json({ message: "No body" });
  }
  const slugToValidate = body.slugToValidate;
  try {
    for (let i = 0; i < body.slugs.length; i++) {
      const slug = body.slugs[i];
      await res.revalidate(slug);
    }
    res.status(200).json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated pages
    return res.status(500).send("Error revalidating");
  }
}
