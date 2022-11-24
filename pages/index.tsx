/** @format */

import Banner from "../components/Banner";
import { GetServerSideProps } from "next";
import mongoose from "mongoose";
import Product from "../models/Product";
import { FetchedProductType } from "../types/product";
import Carousel from "../components/Carosel";
import Story from "../components/Story";
import { fakeData } from "../atoms/fakedata";
import SubFooter from "../components/SubFooter";
import Features from "../components/Features";

export default function Home({ products }: { products: FetchedProductType[] }) {
  console.log(products);
  return (
    <div>
      <main>
        <Banner />
        <Carousel products={products} />
        <Story
          title={"Somos"}
          description={
            "Fluffy alpaca wool plushies make the perfect cuddling companion Temperature-regulating slippers keep you comfortable year-round  Made with all-natural, sustainable materials Each purchase supports local Peruvian artisans"
          }
          image={"/assets/home/Artesano.jpg"}
          boxType="left-right"
          type={1}
        />
        <Carousel products={products} />
        <Features />
        <Story
          title={"Nuestros productos"}
          description={
            "At Incancestory, our vision is to not only support the local Peruvians that make our products, but their communities as a whole. We’re inspired by their connection to nature and their simple lifestyle. However, many of these traditional communities live far below the poverty line and their way of life is under threat. Our commitment to fair trading means the local shepherds can afford to continue looking after their alpacas and artisans can support their families. We also invest a portion of our profits back into the community to provide education and skill training for a better future for generations to come."
          }
          image={"/assets/home/Group.png"}
          boxType="left-right"
          type={2}
        />
        <Carousel products={products} />
        <Story
          title={"¿Quieres comprar en grandes cantidades?"}
          description={
            "Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage."
          }
          image={"/assets/home/3toys.png"}
          boxType="center-center"
          type={3}
        />
      </main>
      <SubFooter />
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
