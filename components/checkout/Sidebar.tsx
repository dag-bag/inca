/** @format */

import React from "react";
import { useRecoilValue } from "recoil";
import { cartTotal } from "../../atoms/cart";
import { selectedDeliveryCharges } from "../../atoms/checkout";

function Sidebar() {
  const Subtotal = useRecoilValue(cartTotal);
  const deliveryCharges = useRecoilValue(selectedDeliveryCharges);

  return (
    <div
      id="summary"
      className=" w-full px-8 py-10 lg:max-w-[1119px] bg-gray-300 lg:bg-white "
    >
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items(s):</span>
        <span className="font-semibold text-sm">{Subtotal}$</span>
      </div>
      <div className="flex justify-between mt-3 mb-5">
        <span className="font-semibold text-sm uppercase">Delivery:</span>
        <span className="font-semibold text-sm">{deliveryCharges}$</span>
      </div>
      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full focus:outline-none focus:border-none"
        />
      </div>
      <button className="bg-primary hover:bg-black px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>{(Subtotal + deliveryCharges).toFixed(2)}$ </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
