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

export interface OrderResponse {
  _id: string;
  userEmail: string;
  orderID: string;
  products: Product[];
  address: Address;
  total: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Address {
  _id: string;
  userEmail: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: number;
  country: string;
  lastName: string;
  firstName: string;
  phone: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Product {
  title: string;
  uni: string;
  price: number;
  color: string;
  size: string;
  img: Img[];
  slug: string;
  id: string;
  qty: number;
}

export interface Img {
  alt: string;
  img: string;
}
