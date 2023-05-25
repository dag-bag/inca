/** @format */

import { useQuery ,useInfiniteQuery} from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../components/Category/Layout";
import dynamic from "next/dynamic";
const Products = dynamic(() => import("../../components/Category/Products"), {
  ssr: true,
});
import { ProductType } from "../../types/product";

import Skeleton from "../../components/skeleton/Skeleton";
import CategoryPage from "../../components/Category/CategoryPage";

import ErrorPage from "../../components/utils/ErrorPage";
import strapi from "../../utils/strapi";

import { getProductByCategory } from "../../services/category/category";
import { Main } from "../../services/product/product";

type Props = {
  products: ProductType[];
};

function DynamicCateGoryPage({ products }: Props) {
  const { query } = useRouter();
  const getProductByCategory = async () => {
    const response = await strapi.find<Main>("products", {
      populate: ["*", "variants", "variants.images"],
      filters: {
        category: query?.category,
      },
    });
    return response.data;
  };

  const { data, isLoading, error } = useQuery<Main>(
    ["productsCategories", { category: query?.category }],
    getProductByCategory
  );
  console.log("data:", data);

  // console.log(data);
  if (error) return <ErrorPage />;

  return (
    <Layout>
      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        // @ts-ignore
        <CategoryPage products={data} />
      )}
    </Layout>
  );
}

export default DynamicCateGoryPage;
