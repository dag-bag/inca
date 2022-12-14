/** @format */

import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { createOrderFn } from "../../../services/account/order";
import { useRecoilValue } from "recoil";
import { activeAddressCard, selectedAddress } from "../../../atoms/checkout";
import { cartAtom, cartTotal } from "../../../atoms/cart";
import { Address } from "../../../types/address";
import { useSession } from "next-auth/react";
import bcrypt from "bcryptjs";
// This values are the props in the UI
const amount = 2;

const style = { layout: "vertical" };
type Props = {
  currency: string;
  showSpinner: boolean;
};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }: Props) => {
  const address = useRecoilValue(activeAddressCard);
  let hashAddress = bcrypt.hashSync(JSON.stringify(address), 10);
  const total = useRecoilValue(cartTotal);
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const { data: session, status } = useSession();
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
  if (status === "loading") return <div>Loading....</div>;

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={{
          layout: "vertical",
        }}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={async () => {
          let orderId =
            address &&
            session?.user?.email &&
            (await createOrderFn({
              userEmail: session?.user.email,
              cart,
              address,
              total,
            }));
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

          // router.push(`/checkout/success/${order.id}`);

          console.log(order);
          // clearCart();
        }}
      />
    </>
  );
};

export default ButtonWrapper;
