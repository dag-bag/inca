/** @format */

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Banner from "./Banner";
import { FetchedProductType } from "../../types/product";
import Categories from "./Categories";
import Loader from "../Loaders/Loader";

const Carousel = dynamic(() => import("../utils/Carosel"), {
  loading: () => <Loader />,
});
const Story = dynamic(() => import("./Story"), {
  loading: () => <Loader />,
});
const SubFooter = dynamic(() => import("../Footers/SubFooter"), {
  loading: () => <Loader />,
});
const Features = dynamic(() => import("./Features"), {
  loading: () => <Loader />,
});

export default function Main({ products }: { products: FetchedProductType[] }) {
  return (
    <>
      <main>
        {/* <Banner /> */}
        <Categories />

        <Story
          title={"ABOUT US"}
          description={
            "Incancestry is a charitable organization that is dedicated to supporting the Andean communities of Peru. We want to see them thrive as they maintain their deeply rooted ancestral traditions. We carry this out by bringing exposure to the finest artisans in these communities and sharing their handcrafted products with the whole world. "
          }
          image={"/assets/home/Artesano.jpg"}
          boxType="left-right"
          type={1}
          link="/about"
        />
        <Carousel products={products} title="Best Sellers" />
        <Features />

        <Story
          title={"CONNECTING THE WORLD WITH A SUSTAINABLE LIFESTYLE"}
          description={
            "At Incancestry, we support fashion and lifestyle by protecting, not harming the planet. Making it our mission to promote a sustainable environment, we work with the Andean communities to create products that don't damage the beautiful world around us. Our products are made of 100% natural materials, with ethically raised alpaca fiber and wool. The dyes in our products are natural and undertaken by local Andean weavers who work from home. We work with and listen to the advice and instructions of the artisans we work with, who are experts in the field of farming, harvesting and producing sustainable products."
          }
          image={
            "https://res.cloudinary.com/hellooworkd/image/upload/v1675092246/Inca_kkenr5.jpg"
          }
          boxType="left-right"
          type={2}
          link="/social-impact"
        />
        <Carousel products={products} title="Trending Products" />
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
    </>
  );
}
