/** @format */

import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { createOrderFn } from "../../../services/account/order";
import { useRecoilValue } from "recoil";
import {
  activeAddressCard,
  selectedAddress,
  selectedDeliveryCharges,
} from "../../../atoms/checkout";
import { cartAtom, cartTotal } from "../../../atoms/cart";
import { Address } from "../../../types/address";
import { useSession } from "next-auth/react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import invariant from "tiny-invariant";
import client from "../../../libs/paypal";
// This values are the props in the UI
const amount = 2;

const style = { layout: "vertical" };
type Props = {
  currency: string;
  showSpinner: boolean;
};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }: Props) => {
  const { push } = useRouter();
  const address = useRecoilValue(activeAddressCard);

  const total = useRecoilValue(cartTotal);
  const deliveryCharges = useRecoilValue(selectedDeliveryCharges);
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
          let orderId = await createOrderFn({
            cart,
            address,
            subTotal: total,
            deliveryCost: deliveryCharges,
          });
          // address &&
          // session?.user?.email &&

          return orderId;
        }}
        onApprove={async (data, actions) => {
          const resp = await fetch("/api/captureorder", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID,
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
