/** @format */

import { GetServerSideProps } from "next";
import mongoose from "mongoose";
import Product from "../models/Product";
import { FetchedProductType } from "../types/product";

import dynamic from "next/dynamic";
const Main = dynamic(() => import("../components/Home/Main"));

export default function Home({ products }: { products: FetchedProductType[] }) {
  console.log(products);
  return (
    <div>
      <Main products={products} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  }

  let products = await Product.find({ category: "slipers" });

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
};
