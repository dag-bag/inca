/** @format */

import Banner from "../components/Banner";
import { GetServerSideProps } from "next";
import mongoose from "mongoose";
import Product from "../models/Product";
import { FetchedProductType } from "../types/product";
import Carousel from "../components/Carosel";
import { fakeData } from "../atoms/fakedata";

export default function Home({ products }: { products: FetchedProductType[] }) {
  console.log(products);
  return (
    <div>
      <main>
        <Banner />
        <Carousel products={products} />
      </main>
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
