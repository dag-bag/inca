/** @format */

import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { cartQty, cartTotal } from "../../atoms/cart";
import PrimaryBtn from "../buttons/PrimaryBtn";
import PoketCart from "../Cart/PoketCart";

type Props = {
  svg: any;
};

function CartDetails({ svg }: Props) {
  const subTotal = useRecoilValue(cartTotal);
  const cartItems = useRecoilValue(cartQty);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-link btn-circle">
        <div className="indicator">
          {svg}
          <span className="badge badge-sm indicator-item">
            {cartItems ? cartItems : 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact dropdown-content w-52 bg-white shadow"
      >
        {/* <PoketCart /> */}
        <div className="card-body">
          <span className="font-bold text-lg">{cartItems} Items</span>
          <span className="text-info">Subtotal: ${subTotal}</span>
          <div className="card-actions">
            <Link href="/cart">
              <PrimaryBtn>View Cart</PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
