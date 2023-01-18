/** @format */

/** @format */

import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Address } from "../types/address";
import { ICheckoutStepType } from "../types/checkout";

const { persistAtom } = recoilPersist();

const checkout = atom({
  key: "checkout",
});

const checkoutSteps = atom<ICheckoutStepType[]>({
  key: "checkoutSteps",
  default: [
    {
      step: 1,
      status: "active",
      title: "Address",
      edit: false,
    },
    {
      step: 2,
      status: "pending",
      title: "Delivery",
      edit: false,
    },
    {
      step: 3,
      status: "pending",
      title: "Payment",
      edit: false,
    },
  ],
});
const selectedAddress = atom<Address | {}>({
  key: "selectedAddress",
  default: {},
});

const selectedDeliveryCharges = atom({
  key: "selectedDeliveryAddress",
  default: 0,
});

const selectedPaymentMethod = atom({
  key: "selectedPaymentMethod",
  default: {},
});

const activeAddressCard = atom<Address | undefined>({
  key: "activeAddressCard",
  default: undefined,
});
export {
  checkout,
  checkoutSteps,
  selectedAddress,
  selectedDeliveryCharges,
  selectedPaymentMethod,
  activeAddressCard,
};
