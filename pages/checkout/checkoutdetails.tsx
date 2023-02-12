/** @format */

import React from "react";
import dynamic from "next/dynamic";
const CheckoutDetailsComponent = dynamic(
  () => import("../../components/checkout/CheckoutDetailsComponent"),

  {
    suspense: true,
    ssr: false,
  }
);

type Props = {};

function CheckoutDetails({}: Props) {
  return (
    <>
      <CheckoutDetailsComponent />
    </>
  );
}

export default CheckoutDetails;
