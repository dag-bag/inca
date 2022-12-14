/** @format */
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ButtonWrapper from "./Button";
export default function PaypalComponent() {
  const currency = "USD";
  return (
    <div className="w-full flex justify-start items-center ml-16 my-10">
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper currency={currency} showSpinner={false} />
      </PayPalScriptProvider>
    </div>
  );
}
