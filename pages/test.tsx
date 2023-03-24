/** @format */

import { FilterIcon } from "@heroicons/react/outline";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { SideCartOpenAtom } from "../atoms/cart";
import SideCart from "../components/Cart/SideCart";
import Loader from "../components/Loaders/Loader";

import Search from "../components/Navbar/Search";
import TestCard from "../components/test/TestCard";
import Flex from "../components/utils/Flex";
import {
  FetchCartProduct,
  getProductsFromStrApi,
} from "../services/product/apis/products";
import { FetchedProductType } from "../types/product";

type Props = {};

function Test({}: Props) {
  const updateOrder = async () => {
    strapi.update("orders", 23, {
      status: "success",
    });
  };
  const createOrder = async () => {
    try {
      const strapiOrder = await strapi.create("orders", {
        orderID: "7C261578FT6101133",
        address: "ljksdfkljfdkljdfljk",
        products: {
          name: "timki",
        },
        userEmail: "virender@gmail.com",
        total: 33,
        subTotal: 22,
        variant_id: 2,
        // deliveryCost,
      });
      console.log(strapiOrder);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const fetcher = async () => {
    const response = await strapi.find("orders", {
      filters: {
        orderID: "9NT15590UA455391M",
      },
      fields: ["id"],
      // populate: ["products.variants", "products.variants.images"],
      // headers: {
      //   foo: "bar",
      // },
    });
    // const variants = response.data.attributes.map(
    //   (product) => product.Variant.slug
    // );

    // // Generate a list of dynamic paths based on the available product variants
    // const paths = variants.map((slug) => ({ params: { slug } }));
    let data = response.data;
    return data;
  };

  const { data, isLoading } = useQuery(["product"], fetcher);
  console.log("data:", data[0].id);

  // setTimeout(() => {
  //   setCount((prev) => prev + 1);
  // }, 1000);
  if (isLoading) return <Loader />;
  return (
    <Flex className="justify-center items-center  w-full">
      <button onClick={updateOrder}>Create Order</button>
      {}
      {/* <Example /> */}
      {/* {data?.products?.map((item: FetchedProductType, index: number) => {
        return <TestCard {...item} key={index} />;
      })} */}
    </Flex>
  );
}

export default Test;

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import strapi from "../utils/strapi";
import { Datum } from "../types/newtypes/params";
import { getVariants } from "../services/variants/getVariants";
import { getParams } from "../services/product/params";
import { getQueryProducts } from "../services/product/apis/query";

function Example() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you&apos;re unhappy with your purchase for any reason, email
                us within 90 days and we&apos;ll refund you in full, no
                questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
