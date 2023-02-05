/** @format */

import { GetStaticProps } from "next";
import mongoose from "mongoose";
import Product from "../models/Product";
import { FetchedProductType } from "../types/product";

import dynamic from "next/dynamic";
import Loader from "../components/Loaders/Loader";
import Banner from "../components/Home/Banner";

const Main = dynamic(() => import("../components/Home/Main"), {
  loading: () => <Loader />,
});

export default function Home({ products }: { products: FetchedProductType[] }) {
  console.log(products);
  return (
    <div>
      {/* <Skeleton /> */}
      <Banner />
      <Main products={products} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  }

  let products = await Product.find();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
};
