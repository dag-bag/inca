/**
 * This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import { Fragment } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  cartAtom,
  cartQty,
  cartTotal,
  cartSelector,
  SideCartOpenAtom,
} from "../../atoms/cart";

import React from "react";

import SideCart from "./SideCart";

type Props = {
  svg: any;
};

function PoketCart({ svg }: Props) {
  const setCartOpen = useSetRecoilState(SideCartOpenAtom);
  const Qty = useRecoilValue(cartQty);

  return (
    <>
      <SideCart />
      <div className="flow-root text-sm lg:relative">
        <button
          className="group  p-2 flex items-center relative"
          onClick={(e) => {
            e.stopPropagation();
            setCartOpen(true);
          }}
        >
          {svg}
          <span className="absolute top-0 -right-2 border border-black rounded-full px-1">
            {Qty}
          </span>

          <span className="sr-only">items in cart, view bag</span>
        </button>
      </div>
    </>
  );
}

export default PoketCart;
