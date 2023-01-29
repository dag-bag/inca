/** @format */

import { find } from "lodash";
/** @format */

/** @format */

import { set } from "lodash";
import { atom, selector } from "recoil";
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
// const CheckoutHandler = selector({
//   key: "checkouthandler",
//   get: () => {},
//   set: ({ set, get }) => {
//     let currentStep = 1;
//     const CheckoutState = get(checkoutSteps);
//     let NewState = CheckoutState.map((state, index) => {
//       if (currentStep === state.step) {
//         return { ...state, status: "active" };
//       }
//     });
//     set(checkoutSteps, NewState);
//   },
// });
const selectedAddress = atom<Address | null>({
  key: "selectedAddress",
  default: null,
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

const IsDisAbledForButtonCheckOutSelector = selector({
  key: "isDisAbledForButtonCheckOut",
  get: ({ get }) => {
    let selectedAdd = get(selectedAddress);
    let deliveryCharges = get(selectedDeliveryCharges);
    let CheckoutStateData = get(checkoutSteps);
    let allData = [
      {
        step: 1,
        data: selectedAdd,
      },
      {
        step: 2,
        data: deliveryCharges,
      },
    ];
    const activeState = find(CheckoutStateData, { status: "active" });

    for (let i = 0; i < allData.length; i++) {
      if (
        allData[i].step === activeState?.step &&
        allData[activeState.step - 1].data
      ) {
        return true;
      }
    }
    return false;
  },
});
export {
  checkout,
  checkoutSteps,
  selectedAddress,
  selectedDeliveryCharges,
  selectedPaymentMethod,
  activeAddressCard,
  IsDisAbledForButtonCheckOutSelector,
};
