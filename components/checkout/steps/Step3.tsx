/** @format */

import React from "react";
import Container from "../CheckoutCatainer";
import { BsPaypal } from "react-icons/bs";
import PaypalComponent from "../Paypal/PaypalComponent";
type Props = {};

function Step3({}: Props) {
  return (
    <div>
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
        ]}
      />
      <PaypalComponent />
    </div>
  );
}

export default Step3;
