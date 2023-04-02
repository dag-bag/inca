/** @format */

import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { createOrderFn } from "../../../services/account/order";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import {
  activeAddressCard,
  selectedAddress,
  selectedDeliveryCharges,
} from "../../../atoms/checkout";
import { cartAtom, cartTotal, DeliverySelector } from "../../../atoms/cart";
import { Address } from "../../../types/address";
import { useSession } from "next-auth/react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import invariant from "tiny-invariant";
import client from "../../../libs/paypal";
import { forEach } from "lodash";
import { recoilPersist } from "recoil-persist";
// This values are the props in the UI
const amount = 2;

const style = { layout: "vertical" };
type Props = {
  currency: string;
  showSpinner: boolean;
};
const { persistAtom } = recoilPersist();
const strapiIDAtom = atom({
  key: "StrapiId",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }: Props) => {
  const { push } = useRouter();
  const address = useRecoilValue(activeAddressCard);
  const [strapiOrderId, setStrapiOrderId] = useRecoilState(strapiIDAtom);

  const total = useRecoilValue(cartTotal);
  const deliveryCharges = useRecoilValue(DeliverySelector);

  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const cart = useRecoilValue(cartAtom);

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);
  console.log({ strapiOrderId });
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={{
          layout: "vertical",
        }}
        disabled={false}
        forceReRender={[amount, currency, style]}
        // fundingSource={undefined}
        createOrder={async () => {
          invariant(typeof address === "object", "Address must be an object");
          let order = await createOrderFn({
            cart,
            address,
            subTotal: total,
            deliveryCharges: deliveryCharges,
          });
          // setStrapiOrderId(order.orderData.data.id);

          // address &&
          // session?.user?.email &&

          return order.orderID;
        }}
        onApprove={async (data, actions) => {
          const resp = await fetch("/api/captureorder", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID,
              strapiOrderID: strapiOrderId,
            }),
          });
          const order = await resp.json();
          push({
            pathname: "/checkout/success",
            query: { orderId: order.id },
          });

          // clearCart();
        }}
      />
    </>
  );
};

export default ButtonWrapper;
