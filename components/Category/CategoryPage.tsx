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
import { MainDatum } from "../../services/product/product";
// import { MainDatum } from "../../types/newtypes/product";

type Props = { products?: MainDatum[] };

function CategoryPage({ products }: Props) {
  // console.log("products:", products);
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
      {products?.map((product: MainDatum, index) => {
        const {
          attributes: {
            category,
            createdAt,

            publishedAt,
            title,
            updatedAt,
            variants,
            desc,
          },
        } = product;
        let Images = variants.data[0].attributes.images.data;
        let Variant = variants.data[0].attributes;

        return (
          <div
            className="group relative  border-gray-200 p-4 sm:p-6"
            key={product.id}
            onClick={() => NaviGator(`/product/${Variant.slug}`)}
          >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 ">
              <ProductImage
                image={Images}
                alt={""}
                className="h-full w-full object-cover object-center "
                width={300}
                height={300}
              />
            </div>
            <div className=" pb-4 text-center">
              <h3 className="text-sm font-medium text-gray-900">
                <a href={"#"}>
                  <span aria-hidden="true" />
                  {/* Title */}
                  {title}
                </a>
              </h3>
              <div className="mt-3 flex flex-col items-center">
                <p className="sr-only">{4} out of 5 stars</p>

                <p className="mt-1 text-sm text-gray-500">{15} reviews</p>
              </div>
              <p className="mt-4 text-base font-medium text-gray-900">
                <span className="text-orange-500 text-sm line-through mr-2">
                  ${Variant.price}
                </span>{" "}
                ${Variant.sellPrice}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryPage;
