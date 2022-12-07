/** @format */

import { ProductType } from "./product";

interface OrderType {
  userID: string;
  userEmail: string;
  orderID: string;
  products: any;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  status: "pending" | "completed" | "cancelled";
  paymentInfo: Object;
}
