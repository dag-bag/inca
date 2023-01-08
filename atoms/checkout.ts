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
    },
    {
      step: 2,
      status: "pending",
      title: "Delivery",
    },
    {
      step: 3,
      status: "pending",
      title: "Payment",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
const selectedAddress = atom<Address | {}>({
  key: "selectedAddress",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

const selectedDeliveryCharges = atom({
  key: "selectedDeliveryAddress",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

const selectedPaymentMethod = atom({
  key: "selectedPaymentMethod",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

const activeAddressCard = atom<Address | undefined>({
  key: "activeAddressCard",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
export {
  checkout,
  checkoutSteps,
  selectedAddress,
  selectedDeliveryCharges,
  selectedPaymentMethod,
  activeAddressCard,
};
