/** @format */

import client from "../../libs/paypal";
import paypal from "@paypal/checkout-server-sdk";
import Order from "../../models/Order";
import connectDb from "../../libs/ConnectDb";
import { NextApiRequest, NextApiResponse } from "next";
import strapi from "../../utils/strapi";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //Capture order to complete payment
  if (req.method === "POST") {
    const { orderID } = req.body;

    const PaypalClient = client();
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    // @ts-ignore
    request.requestBody({});
    const response = await PaypalClient.execute(request);
    if (!response) {
      res.status(500);
    }
    const strapiOrderId = await strapi.find("orders", {
      filters: {
        orderID: orderID,
      },
      fields: ["id"],
      // populate: ["products.variants", "products.variants.images"],
      // headers: {
      //   foo: "bar",
      // },
    });

    // console.log(strapiOrderId[0].id);
    // @ts-ignore
    await strapi.update("orders", strapiOrderId?.data[0].id, {
      status: "success",
    });
    const order = await Order.findOneAndUpdate(
      { orderID: orderID },
      { status: "PAID" }
    );

    res.json({ ...response.result });
  } else {
    return res.status(404).json({ error: "Invalid Request" });
  }
};

export default connectDb(handler);
