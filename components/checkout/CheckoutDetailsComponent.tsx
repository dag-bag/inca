/** @format */

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CheckoutLayout from "./layout/CheckoutLayout";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkoutSteps } from "../../atoms/checkout";
import HeaderComponent from "./HeaderComponent";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
// import Step3 from "./steps/Step3";
import Step1Complete from "./steps/Step1Complete";
import Step2Completed from "./steps/Step2Completed";
import dynamic from "next/dynamic";
const Step3 = dynamic(() => import("./steps/Step3"), {
  ssr: false,
  loading: () => <Loader />,
});
import { cartQty } from "../../atoms/cart";
import CartEmpty from "../Cart/CartEmpty";
import Sidebar from "./Sidebar";
import Loader from "../Loaders/Loader";

type Props = {};

// Create a smooth payment experience for your customers.
// 1 change the status of first step to active
// 2 change the status of second step to active
function CheckoutDetailsComponent({}: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) router.push("/checkout");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const checkoutState = useRecoilValue(checkoutSteps);

  const CartQty = useRecoilValue(cartQty);
  if (!CartQty) return <CartEmpty />;

  return (
    <div className="flex">
      <div>
        {checkoutState.map((item, index) => {
          return (
            <>
              <>
                {item.status === "completed" &&
                item.step === 1 &&
                item.edit === false ? (
                  <CheckoutLayout>
                    <Step1Complete />
                  </CheckoutLayout>
                ) : item.step === 1 && item.edit === true ? (
                  <CheckoutLayout>
                    <Step1 />
                  </CheckoutLayout>
                ) : null}
                {item.status === "completed" &&
                item.step === 2 &&
                item.edit === false ? (
                  <CheckoutLayout>
                    <Step2Completed />
                  </CheckoutLayout>
                ) : item.step === 2 && item.edit === true ? (
                  <CheckoutLayout>
                    <Step2 />
                  </CheckoutLayout>
                ) : null}
              </>

              {item.status === "active" ? (
                <CheckoutLayout key={index}>
                  {item.status === "active" && item.step === 1 ? (
                    <Step1 />
                  ) : null}

                  {item.status === "active" && item.step === 2 ? (
                    <Step2 />
                  ) : null}
                  {item.status === "active" && item.step === 3 ? (
                    <Step3 />
                  ) : null}
                </CheckoutLayout>
              ) : (
                item.status !== "completed" && (
                  <CheckoutLayout>
                    <HeaderComponent Title={item.title} Level={item.step} />
                  </CheckoutLayout>
                )
              )}
            </>
          );
        })}
      </div>
      <Sidebar />
    </div>
  );
}

export default CheckoutDetailsComponent;
