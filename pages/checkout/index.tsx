/** @format */

// import React, { useEffect, useState } from "react";
// import CheckoutComponents from "../../components/checkout/CheckoutComponents";
// // import CheckOutBtn from "../../components/buttons/CheckOutBtn";
// // import CheckOutHeader from "../../components/checkout/CheckOutHeader";

// // 1:Left Side Authentification Complete Krna hai
// function Index() {
//   return (
//     <>
//       <CheckoutComponents />
//     </>
//   );
// }

// export default Index;

/** @format */

import React from "react";
import dynamic from "next/dynamic";
import Loader from "../../components/Loaders/Loader";
const CheckoutDetailsComponent = dynamic(
  () => import("../../components/checkout/CheckoutDetailsComponent"),

  {
    suspense: true,
    ssr: false,
    loading: () => <Loader />,
  }
);
// import CheckoutDetailsComponent from "../../components/checkout/CheckoutDetailsComponent";

type Props = {};

function CheckoutDetails({}: Props) {
  return (
    <>
      <CheckoutDetailsComponent />
    </>
  );
}

export default CheckoutDetails;
