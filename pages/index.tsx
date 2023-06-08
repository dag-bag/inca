/** @format */

import { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Loader from "../components/Loaders/Loader";
import Banner from "../components/Home/Banner";
import { getTrendingProducts } from "../services/product/apis/trending_products";
import { MainDatum } from "../services/product/trending";
import { getBestSellersProducts } from "../services/product/apis/best_seltlers";

const Main = dynamic(() => import("../components/Home/Main"), {
  loading: () => <Loader />,
});

export default function Home({
  Trending_products,
  Best_sellers_products,
}: {
  Trending_products: MainDatum[];
  Best_sellers_products: MainDatum[];
}) {
  return (
    <div>
      <Head>
        <title>Incancestry Alpaca</title>
      </Head>
      {/* <Skeleton /> */}
      <Banner />
      <Main
        products={Trending_products}
        best_seller_products={Best_sellers_products}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      Trending_products: await getTrendingProducts(),
      Best_sellers_products: await getBestSellersProducts(),
    },
    revalidate: 1800000,
  };
};
