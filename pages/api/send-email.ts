/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Mailjet from "node-mailjet";
import { email_template } from "../../data/email_template";
// import { email_template } from "../../data/email-template";
// const mailjet = require("node-mailjet").connect(
//
//
// );
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { orderID, userEmail } = req.body;
    const mailjet = await Mailjet.apiConnect(
      "7d90f82225053a136a1091fb305edcc6",
      "f74a1eb71d88c0d43676fbd55076a5fc"
    );
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "virenderkumar23435@gmail.com",
            Name: "The person",
          },
          To: [
            {
              Email: "virenderkumar23435@gmail.com",
              Name: "Virender",
            },
          ],
          Subject: "Icancestry Order Confirmed!",
          TextPart: "Greetings from Mailjet!" + orderID,
          HTMLPart: email_template,
        },
      ],
    });
    request
      .then((result) => {
        console.log(result.body);
        return res
          .status(200)
          .json({ name: "Mail SENT", response: result.body });
      })
      .catch((err) => {
        console.log(err.msg);
        return res.status(500).json({ error: "Some Error occurred" });
      });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
// }
