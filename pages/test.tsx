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
import { FetchCartProduct } from "../services/product/products";
import { FetchedProductType } from "../types/product";

type Props = {};

function Test({}: Props) {
  const { data, isLoading } = useQuery(["product"], FetchCartProduct);
  // setTimeout(() => {
  //   setCount((prev) => prev + 1);
  // }, 1000);
  if (isLoading) return <Loader />;
  return (
    <Flex className="justify-center items-center  w-full">
      {/* <Example /> */}
      {data?.products?.map((item: FetchedProductType, index: number) => {
        return <TestCard {...item} key={index} />;
      })}
    </Flex>
  );
}

export default Test;

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";

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
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
