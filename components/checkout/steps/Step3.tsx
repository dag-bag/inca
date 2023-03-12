/** @format */

import React from "react";
import Container from "../CheckoutCatainer";
import { BsPaypal } from "react-icons/bs";
import dynamic from "next/dynamic";
import Loader from "../../Loaders/Loader";
const PaypalComponent = dynamic(() => import("../Paypal/PaypalComponent"), {
  ssr: true,
  loading: () => <Loader />,
});
type Props = {};

function Step3({ }: Props) {
  return (
    <div className="flex h-full flex-col ">
      <Container
        Title={"Payment"}
        Question="How do you want to pay? "
        Level={3}
        ShipCardData={[
          {
            Title: "Paypal",
            Text: "Secure Payment",
            Icon: BsPaypal,
          },
        ]}>

        <PaypalComponent />


      </Container>
    </div>
  );
}

export default Step3;
