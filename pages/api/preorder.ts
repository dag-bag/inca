/** @format */

import client from "../../libs/paypal";
import Order from "../../models/Order";
import paypal from "@paypal/checkout-server-sdk";
import connectDb from "../../libs/ConnectDb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
  //This code creates an order. It is not used in this project.
  // const request = new paypal.orders.OrdersCreateRequest();
  // request.prefer("return=representation");

  if (req.method === "POST") {
    const { Cart, userEmail, total, address } = req.body;
    console.log(req.body);

    try {
      const PaypalClient = client();
      //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
      const request = new paypal.orders.OrdersCreateRequest();
      // @ts-ignore
      request.headers["prefer"] = "return=representation";
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "100.00",
            },
          },
        ],
      });
      const response = await PaypalClient.execute(request);
      if (response.statusCode !== 201) {
        res.status(500);
      }
      const order = await Order.create({
        orderID: response.result.id,
        address: address,
        products: Cart,
        userEmail: userEmail,
        total: total,
      });

      res.json({ orderID: response.result.id });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(500).json({ message: "Invalid request method" });
  }
};
export default connectDb(handler);
