/** @format */

import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  cartAtom,
  cartSelector,
  removeCart,
  removeOneItemFromCart,
} from "../../atoms/cart";
import { CartItem } from "../../types/cart";

type Props = {
  uni: string;
  children: React.ReactNode;
  className?: string;
  qty: number;
};

function AddReMoveItem({ uni, children, className, qty }: Props) {
  const SetCart = useSetRecoilState(cartSelector);
  const removeItem = useSetRecoilState(removeOneItemFromCart);

  return (
    <p className={`${className} text-gray-500 inline-flex`}>
      <button
        disabled={qty === 1}
        type="button"
        className={`${qty === 1 && "cursor-not-allowed pointer-events-none"}`}
      >
        <MinusIcon
          className={`w-3 cursor-pointer text-black hover:scale-110 mx-1  `}
          onClick={() => {
            removeItem({ uni });
          }}
        />
      </button>
      {children}
      <PlusIcon
        className="w-3 cursor-pointer text-black hover:scale-110 ml-1"
        onClick={() => {
          SetCart({ uni, qty });
        }}
      />
    </p>
  );
}

export default AddReMoveItem;
