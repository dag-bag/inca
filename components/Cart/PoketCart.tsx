/**
 * This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import { Fragment } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom, cartQty, cartTotal, cartSelector } from "../../atoms/cart";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CartItem } from "../../types/cart";
import AddReMoveItem from "./AddReMoveItem";

type Props = {
  svg: any;
};

function PoketCart({ svg }: Props) {
  const cartItems = useRecoilValue(cartAtom);
  const SetCart = useSetRecoilState(cartSelector);
  const Qty = useRecoilValue(cartQty);
  const subTotal = useRecoilValue(cartTotal);

  return (
    <Popover className="flow-root text-sm lg:relative  z-50">
      <Popover.Button className="group  p-2 flex items-center relative">
        {svg}
        <span className="absolute top-0 -right-2 border border-black rounded-full px-1">
          {Qty}
        </span>

        <span className="sr-only">items in cart, view bag</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
          <form className="max-w-2xl mx-auto px-4">
            {!Qty ? (
              <div className="p-3">
                <p className="font-semibold text-xl my-3">
                  No Items In the cart.
                </p>
                <Link href={"/products"}>
                  <button className="w-full bg-black border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black">
                    View Products
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <ul role="list" className="divide-y divide-gray-200">
                  {cartItems?.map((product: CartItem) => {
                    const {
                      title,
                      color,
                      slug,
                      qty,
                      uni,
                      price,
                      id,
                      img,
                      size,
                      desc,
                    } = product;

                    return (
                      <li
                        key={product.id}
                        className="py-6 flex items-center cursor-pointer"
                      >
                        <Image
                          src={product.img[0]}
                          alt={title}
                          height={200}
                          width={200}
                          className="flex-none w-16 h-16 rounded-md border border-gray-200"
                        />
                        <div className="ml-4 flex-auto">
                          <h3 className="font-medium text-gray-900">
                            <Link href={slug}>{title}</Link>
                          </h3>
                          <p className="text-gray-500">{color}</p>
                          <p className="text-gray-500 flex">
                            Qty:
                            <AddReMoveItem uni={uni} qty={qty}>
                              {qty}
                            </AddReMoveItem>
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Link href={"/checkout"}>
                  <button className="w-full bg-black border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black">
                    Checkout
                  </button>
                </Link>
                <p className="mt-6 text-center">
                  <Link href={"/cart"}>
                    <span className="text-sm font-medium text-black hover:text-black">
                      View Shopping Cart
                    </span>
                  </Link>
                </p>
              </>
            )}
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default PoketCart;
