/** @format */

import { toast } from "react-hot-toast";
/** @format */

import { selector, atom, selectorFamily } from "recoil";
import { find } from "lodash";
import { recoilPersist } from "recoil-persist";
import { CartItem } from "../types/cart";

const { persistAtom } = recoilPersist();

export const favAtom = atom<CartItem | any>({
  key: "favAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const favSelector = selectorFamily({
  key: "favSelector",
  get:
    (uni) =>
    ({ get }) => {
      let cardItems = get(favAtom);
      if (cardItems.length > 0) null;
      const alreadyExists = find(cardItems, { uni: uni });
      if (alreadyExists) {
        return true;
      } else {
        return false;
      }
      // let localCardItems = JSON.parse(localStorage.getItem("cardItems"));
    },
  // @ts-ignore
  set:
    (P) =>
    ({ set, get }, newValue: CartItem) => {
      const cardItems = get(favAtom);
      const alreadyExists = find(cardItems, { uni: newValue.uni });
      if (alreadyExists) {
        const deleteFavItem = cardItems.filter(
          (item: CartItem) => item.uni !== newValue.uni
        );
        set(favAtom, deleteFavItem);
        toast("Remove From favraites Items.", {
          icon: "💓",
        });
      } else {
        set(favAtom, [...cardItems, newValue]);
        toast("Added to favraites Items.", {
          icon: "💓",
        });
      }
    },
});

export const isFavOrNotSelectorFamily = selectorFamily({
  key: "isFavOrNotSelectorFamily",
  get:
    (uni) =>
    ({ get }) => {
      let cardItems = get(favAtom);
      if (cardItems.length > 0) null;
      const alreadyExists = find(cardItems, { uni: uni });
      if (alreadyExists) {
        return true;
      } else {
        return false;
      }
      // let localCardItems = JSON.parse(localStorage.getItem("cardItems"));
    },
  set:
    () =>
    ({ set, get }) => {},
});
export const favTotal = selector({
  key: "favTotal",
  get: ({ get }) => {
    const cartItems = get(favAtom);
    let total = 0;
    cartItems.map((i: any) => {
      total += i.price * i.qty;
    });
    return total;
  },
});

export const favQty = selector({
  key: "favQty",
  get: ({ get }) => {
    const cartItems = get(favAtom);
    let total = 0;
    cartItems.map((i: any) => {
      total += i.qty;
    });
    return total;
  },
});

export const removeFav = selector({
  key: "removeFav",
  get: ({ get }) => {
    const cartItems = get(favAtom);
    return cartItems;
  },
  set: ({ set, get }, newValue) => {
    const cartItems = get(favAtom);
    let newCartItems = cartItems.filter((i: CartItem) => i.uni !== newValue);
    set(favAtom, newCartItems);
  },
});
export const isFavOrNotAtom = atom({
  key: "isFavOrNotAtom",
  default: false,
});
