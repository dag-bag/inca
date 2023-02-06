/** @format */

import { useQuery } from "@tanstack/react-query";
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

type Props = {
  products: ProductType[];
};

function DynamicCateGoryPage({ products }: Props) {
  const { query } = useRouter();
  const fetchProducts = async () => {
    const resp = await fetch(`/api/category?category=${query?.category}`);
    const products = resp.json();
    return products;
  };
  const { data, isLoading, error } = useQuery<{ products: ProductType[] }>(
    ["productsCategories", { category: query?.category }],
    fetchProducts
  );
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
        <CategoryPage products={data?.products} />
      )}
    </Layout>
  );
}

export default DynamicCateGoryPage;
