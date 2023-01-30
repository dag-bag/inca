/** @format */

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Banner from "./Banner";
import { FetchedProductType } from "../../types/product";
import Categories from "./Categories";
const Carousel = dynamic(() => import("../utils/Carosel"));
const Story = dynamic(() => import("./Story"));
const SubFooter = dynamic(() => import("../Footers/SubFooter"));
const Features = dynamic(() => import("./Features"));

export default function Main({ products }: { products: FetchedProductType[] }) {
  return (
    <>
      <main>
        <Banner />
        <Categories />
        <Story
          title={"ABOUT US"}
          description={
            "Incancestry is a charitable organization that is dedicated to supporting the Andean communities of Peru. We want to see them thrive as they maintain their deeply rooted ancestral traditions. We carry this out by bringing exposure to the finest artisans in these communities and sharing their handcrafted products with the whole world. "
          }
          image={"/assets/home/Artesano.jpg"}
          boxType="left-right"
          type={1}
        />
        <Carousel products={products} title="Best Sellers" />
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
        <Carousel products={products} title="Dragon Ball Z" />
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
