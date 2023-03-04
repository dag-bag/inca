/** @format */

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  cartAtom,
  cartQty,
  cartSelector,
  cartTotal,
  removeCart,
  removeOneItemFromCart,
  SideCartOpenAtom,
} from "../../atoms/cart";
import { CartItem } from "../../types/cart";
import Flex from "../utils/Flex";
import Router from "next/router";
import Image from "next/image";
import Ads from "./Ads";

type Props = {};
const styles = {
  qty: {
    box: "",
    icons: "h-3 w-3 !text-black font-bold cursor-pointer",
  },
};

function SideCart({}: Props) {
  const [cartOpen, setCartOpen] = useRecoilState(SideCartOpenAtom);
  const cartItems = useRecoilValue<CartItem[]>(cartAtom);

  const subTotal = useRecoilValue(cartTotal);
  const removeItem = useSetRecoilState(removeCart);
  const removeOneItem = useSetRecoilState(removeOneItemFromCart);
  const removeItem_fromCart = (item: CartItem) => {
    if (item.qty === 1) {
      removeItem({ ...item });
    } else {
      removeOneItem({ ...item });
    }
  };
  const Qty = useRecoilValue(cartQty);

  const SetCart = useSetRecoilState(cartSelector);

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40"
        onClose={() => setCartOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="ml-auto relative max-w-md w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto scrollbar-hide">
            <div className="pointer-events-auto w-screen max-w-md h-screen">
              <div className="flex h-screen flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between border-b border-gray-300 pb-6">
                    <h2
                      className="text-lg font-medium text-gray-900 flex space-x-2"
                      id="slide-over-title"
                    >
                      <ShoppingCartIcon className="text-gray-900 font-bold h-6" />
                      <span className="font-light">
                        {!Qty ? "Cart" : `${Qty} Items`}
                      </span>
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setCartOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        {/* Heroicon name: outline/x-mark */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <>
                    <div className="mt-8 h-[55vh] overflow-y-scroll scrollbar-hide">
                      <div className="flow-root h-full">
                        {Qty ? (
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((item, index) => (
                              <li className="flex py-6" key={index}>
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    width={200}
                                    height={200}
                                    src={item.img[0].img}
                                    alt={item.img[0].alt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3 className="h-12">
                                        <a href="#" className="line-clamp-2">
                                          {item.title}
                                        </a>
                                      </h3>
                                      <p className="ml-4 text-primary flex flex-col">
                                        <span>${item.sellPrice}</span>
                                        <span className="text-[#333] line-through">
                                          ${item.price}
                                        </span>
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500 flex border border-gray-200 rounded-md w-20 justify-center items-center">
                                      <AiOutlineMinus
                                        fontWeight={""}
                                        className={styles.qty.box}
                                        cursor={"pointer"}
                                        color={"black"}
                                        onClick={() =>
                                          removeItem_fromCart(item)
                                        }
                                      />
                                      <span className="px-4 text-sm ">
                                        {item.qty}
                                      </span>
                                      <AiOutlinePlus
                                        cursor={"pointer"}
                                        color={"black"}
                                        className={styles.qty.box}
                                        fontWeight="800"
                                        onClick={() =>
                                          SetCart({
                                            ...item,
                                            type: "add",
                                          })
                                        }
                                      />
                                    </p>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-red-500 hover:text-primary"
                                        onClick={() => removeItem({ ...item })}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                            <Ads />

                            {/* More products... */}
                          </ul>
                        ) : (
                          <Flex className="h-full">
                            <h3>Your cart is empty.</h3>
                            <button
                              className="btn bg-[#333] btn-wide text-white border-none outline-none mt-6"
                              onClick={() => {
                                Router.push(
                                  "/category?category=alpaca-stuffed-animals"
                                );
                                setCartOpen(false);
                              }}
                            >
                              Start Shopping
                            </button>
                          </Flex>
                        )}
                      </div>
                    </div>
                    {Qty ? (
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6 ">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${subTotal.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <button
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#333] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary  w-full "
                            onClick={() => {
                              setCartOpen(false);
                              Router.push("/checkout");
                            }}
                          >
                            Checkout
                          </button>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-black hover:text-primary ml-2"
                            >
                              Continue Shopping
                              <span aria-hidden="true"> →</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}

export default SideCart;
