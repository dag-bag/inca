/** @format */

import React from "react";
import CartButton from "./CartButton";

type Props = {};

function CartEmpty({}: Props) {
  return (
    <>
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
              <h2 className="p-3 text-2xl">
                No items in the cart. <br /> Please add few items in the cart
              </h2>
            </ul>
            <CartButton link="products" text="View Products" />
          </section>
        </form>
      </div>
    </>
  );
}

export default CartEmpty;
