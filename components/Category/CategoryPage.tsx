/** @format */

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ProductType } from "../../types/product";
import { motion } from "framer-motion";
import ProductImage from "../Product/ProductImage";
import Router from "next/router";

type Props = { products?: ProductType[] };

function CategoryPage({ products }: Props) {
  const { push, query } = Router;
  const NaviGator = (href: string) => {
    push({
      pathname: href,
      query: {
        keyword: query?.category?.toString().split("-").join(" "),
      },
    });
  };
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
      {products?.map((product: ProductType, index) => {
        return (
          // <Link key={index} href={`/product/${product.variant[0].slug}`}>
          <div
            className="group relative  border-gray-200 p-4 sm:p-6"
            key={index}
            onClick={() => NaviGator(`/product/${product.variant[0].slug}`)}
          >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 ">
              <ProductImage
                image={product.variant[0].img}
                alt={product.desc}
                className="h-full w-full object-cover object-center"
                width={300}
                height={300}
              />
            </div>
            <div className=" pb-4 text-center">
              <h3 className="text-sm font-medium text-gray-900">
                <a href={"#"}>
                  <span aria-hidden="true" />
                  {product.variant[0].title}
                </a>
              </h3>
              <div className="mt-3 flex flex-col items-center">
                <p className="sr-only">{4} out of 5 stars</p>

                <p className="mt-1 text-sm text-gray-500">{15} reviews</p>
              </div>
              <p className="mt-4 text-base font-medium text-gray-900">
                <span className="text-orange-500 text-sm line-through mr-2">
                  ${product.variant[0].price}
                </span>{" "}
                ${product.variant[0].sellPrice}
              </p>
            </div>
          </div>
          // </Link>
        );
      })}
    </div>
  );
}

export default CategoryPage;
