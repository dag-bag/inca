/** @format */

import { RefreshTokenRequest } from "@paypal/checkout-server-sdk/lib/core/refresh_token_request";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Category/Layout";
import Loader from "../../components/Loaders/Loader";
import Skeleton from "../../components/skeleton/Skeleton";
import { ProductType } from "../../types/product";

type Props = {};

function QueryPage({}: Props) {
  const router = useRouter();
  const { keyword } = router.query;
  const SearchQuery = async () => {
    const resp = await fetch(
      `http://localhost:3000/api/query?title=${keyword}`
    );
    const products = await resp.json();
    return products;
  };

  const { data, isLoading, error } = useQuery(
    [`query`, { keyword }],
    SearchQuery
  );

  return (
    <Layout query={`${keyword}`}>
      {isLoading ? (
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
          {data?.map((product: ProductType, index: number) => (
            <Link key={index} href={`/product/${product.variant[0].slug}`}>
              <div
                key={product._id}
                className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <Image
                    src={product.variant[0].img[0].img}
                    alt={product.desc}
                    className="h-full w-full object-cover object-center"
                    width={200}
                    height={200}
                  />
                </div>
                <div className=" pb-4 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={"#"}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.variant[0].title}
                    </a>
                  </h3>
                  <div className="mt-3 flex flex-col items-center">
                    <p className="sr-only">{4} out of 5 stars</p>

                    <p className="mt-1 text-sm text-gray-500">{15} reviews</p>
                  </div>
                  <p className="mt-4 text-base font-medium text-gray-900">
                    {product.variant[0].price}$
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default QueryPage;
