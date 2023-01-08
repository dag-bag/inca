/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductType } from "../../types/product";

type Props = {
  data: ProductType[];
};

function Products({ data }: Props) {
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
      {data.map((product, index) => (
        <Link key={index} href={`/product/${product.variant[0].slug}`}>
          <div
            key={product._id}
            className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
          >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
              <Image
                src={product.variant[0].img[0]}
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
  );
}

export default Products;
