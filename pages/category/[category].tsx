/** @format */

import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Category/Layout";
import dynamic from "next/dynamic";
const Products = dynamic(() => import("../../components/Category/Products"), {
  ssr: true,
});
// import Products from ;
import Product from "../../models/Product";
import { ProductType } from "../../types/product";
import Link from "next/link";
import Image from "next/image";

type Props = {
  products: ProductType[];
};

function DynamicCateGoryPage({ products }: Props) {
  const router = useRouter();
  const fetchProducts = async () => {
    const resp = await fetch(`/api/category?title=${router?.query?.category}`);
    const products = resp.json();
    return products;
  };
  const { data, isLoading, error } = useQuery<ProductType[]>(
    ["productsCategories"],
    fetchProducts,
    {
      initialData: products,
    }
  );
  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
        {products.map((product, index) => (
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
    </Layout>
  );
}

export default DynamicCateGoryPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let slug = await query.category;
  let products = await Product.find({
    category: slug,
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};
