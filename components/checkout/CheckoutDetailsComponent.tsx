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
import Step3 from "./steps/Step3";
import Step1Complete from "./steps/Step1Complete";
import Step2Completed from "./steps/Step2Completed";
import { ICheckoutStepType } from "../../types/checkout";
import { cartQty } from "../../atoms/cart";
import CartEmpty from "../Cart/CartEmpty";
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
  const [checkoutState, setCheckoutState] = useRecoilState(checkoutSteps);
  const CartQty = useRecoilValue(cartQty);
  if (!CartQty) return <CartEmpty />;

  return (
    <div>
      {checkoutState.map((item, index) => {
        return (
          <>
            <div>
              {item.status === "completed" && item.step === 1 ? (
                <CheckoutLayout>
                  <Step1Complete />
                </CheckoutLayout>
              ) : null}
              {item.status === "completed" && item.step === 2 ? (
                <CheckoutLayout>
                  <Step2Completed />
                </CheckoutLayout>
              ) : null}
            </div>

            {item.status === "active" ? (
              <CheckoutLayout key={index}>
                {item.status === "active" && item.step === 1 ? <Step1 /> : null}

                {item.status === "active" && item.step === 2 ? <Step2 /> : null}
                {item.status === "active" && item.step === 3 ? <Step3 /> : null}
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
  );
}

export default CheckoutDetailsComponent;
