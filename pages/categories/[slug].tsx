/** @format */

import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../components/Category/Layout";
import dynamic from "next/dynamic";
import { ProductType } from "../../types/product";

import Skeleton from "../../components/skeleton/Skeleton";
import CategoryPage from "../../components/Category/CategoryPage";

import ErrorPage from "../../components/utils/ErrorPage";
import strapi from "../../utils/strapi";
import Head from "next/head";
import { Main } from "../../services/product/product";

type Props = {
  products: ProductType[];
};

function DynamicCateGoryPage({ products }: Props) {
  const [page, setPage] = useState(1);
  const { query, push, pathname } = useRouter();
  const slug = query.slug as string;
  const getProductByCategory = async ({
    pageParam = 1,
  }: {
    pageParam?: number;
  }) => {
    const response = await strapi.find<Main>("products", {
      populate: ["*", "variants", "variants.images"],
      filters: {
        category: slug?.split("-").join(" "),
      },
      pagination: {
        page: page,
        pageSize: 20,
      },
    });
    return response;
  };
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    push(`${pathname}?slug=${slug}&page=${pageNumber}`);
  };

  const { data, isLoading, error } = useQuery(
    ["productsCategories", { category: query?.slug }, { page }],
    getProductByCategory
  );
  console.log(data);
  if (error) return <ErrorPage />;
  const buttons = Array.from(
    // @ts-ignore
    { length: data?.meta.pagination.pageCount },
    (_, index) => (
      <button
        key={index}
        className={`btn btn-lg ${page === index + 1 ? "btn-active" : ""}`}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </button>
    )
  );

  return (
    <Layout>
      <Head>
        <title>Incancestry Alpaca - {slug?.split("-").join(" ")}</title>
      </Head>
      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        // @ts-ignore
        <CategoryPage products={data.data} />
      )}

      <div className="btn-group w-full justify-center items-center md:first-line:col-span-10">
        <button
          className={`btn ${page == 1 && "btn-disabled"} btn-lg`}
          onClick={() => handlePageChange(page - 1)}
        >
          «
        </button>
        {buttons}
        <button
          className={`btn ${
            // @ts-ignore
            page >= data?.meta.pagination.pageCount && "btn-disabled"
          } btn-lg`}
          onClick={() => handlePageChange(page + 1)}
        >
          »
        </button>
      </div>
    </Layout>
  );
}

export default DynamicCateGoryPage;
