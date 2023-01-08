/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { isEmpty } from "lodash";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom, cartTotal, removeCart } from "../atoms/cart";
import { CartItem } from "../types/cart";
import AddReMoveItem from "../components/Cart/AddReMoveItem";
function Cart() {
  const subTotal = useRecoilValue(cartTotal);
  const cart = useRecoilValue<CartItem[]>(cartAtom);
  const removeItem = useSetRecoilState(removeCart);
  console.log(cart);

  return (
    <>
      <div className="bg-white h-screen">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                {isEmpty(cart) && (
                  <h2 className="p-3 text-2xl">
                    No items in the cart. <br /> Please add few items in the
                    cart
                  </h2>
                )}
                {cart.map((item, index) => {
                  return (
                    <li key={index} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0 ">
                        <Image
                          src={item.img[0]}
                          alt="Front of men's Basic Tee in sienna."
                          className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                          width={150}
                          height={150}
                        />
                        <div className="w-[77px] h-[21px] flex space-x-1 items-center mt-2 cursor-pointer">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 relative"
                            preserveAspectRatio="none"
                          >
                            <path d="M4.5 4.5H5.25V9H4.5V4.5Z" fill="black" />
                            <path d="M6.75 4.5H7.5V9H6.75V4.5Z" fill="black" />
                            <path
                              d="M1.5 2.25V3H2.25V10.5C2.25 10.6989 2.32902 10.8897 2.46967 11.0303C2.61032 11.171 2.80109 11.25 3 11.25H9C9.19891 11.25 9.38968 11.171 9.53033 11.0303C9.67098 10.8897 9.75 10.6989 9.75 10.5V3H10.5V2.25H1.5ZM3 10.5V3H9V10.5H3Z"
                              fill="black"
                            />
                            <path
                              d="M4.5 0.75H7.5V1.5H4.5V0.75Z"
                              fill="black"
                            />
                          </svg>

                          <p
                            className=" text-sm font-light text-left text-black"
                            onClick={() => {
                              let removedItem = {
                                id: item.id,
                                name: item.title,
                                price: item.price,
                                img: item.img,
                                quantity: item.qty,
                                uni: item.uni,
                              };
                              removeItem(removedItem);
                            }}
                          >
                            Eliminar
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <p className="text-left text-black">
                                  <span className="text-2xl font-semibold text-left text-black">
                                    {item.title}
                                  </span>
                                  <br />
                                  <span className="text-lg font-medium text-left text-black">
                                    Color :
                                  </span>
                                  <span className="  text-left text-black">
                                    {" "}
                                    {item.color}
                                  </span>
                                  <br />
                                  <span className="text-lg font-medium text-left text-black">
                                    Qty :{" "}
                                  </span>
                                  <span className="  text-left text-black">
                                    <AddReMoveItem
                                      uni={item.uni}
                                      qty={item.qty}
                                    >
                                      {" "}
                                      {item.qty}
                                    </AddReMoveItem>
                                  </span>
                                  <br />
                                  <span className="text-lg font-medium text-left text-black">
                                    Talla :
                                  </span>
                                  <span className="  text-left text-black">
                                    {" "}
                                    {item.size}
                                  </span>
                                  <br />
                                  <br />
                                  <span className="text-sm font-light text-left text-black">
                                    REF. 8704403-incan-Mini
                                  </span>
                                </p>
                              </h3>
                            </div>
                          </div>
                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <label htmlFor="quantity-0" className="sr-only">
                              Quantity, Basic Tee
                            </label>

                            <div className="absolute top-0 right-0">
                              {/* Heroicon name: solid/x */}
                              <h4 className="text-2xl font-medium text-left text-black">
                                {item.price} $
                              </h4>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 flex text-sm  items-center text-gray-700 space-x-2">
                          {/* Heroicon name: solid/check */}
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-medium text-lg">In stock</span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
            {/* Order summary */}
            {!isEmpty(cart) && (
              <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
              >
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Order summary
                </h2>
                <dl className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ${subTotal}.00
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Shipping estimate</span>
                      <a
                        href="#"
                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">
                          Learn more about how shipping is calculated
                        </span>
                        {/* Heroicon name: solid/question-mark-circle */}
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {" "}
                      <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                        {/* Heroicon name: solid/check */}
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Free Delivery</span>
                      </p>
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex text-sm text-gray-600">
                      <span>Tax estimate</span>
                      <a
                        href="#"
                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">
                          Learn more about how tax is calculated
                        </span>
                        {/* Heroicon name: solid/question-mark-circle */}
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">$0</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${subTotal}.00{" "}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <Link href="/checkout">
                    <button
                      type="submit"
                      className="w-full bg-black border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-white"
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
              </section>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Cart;
