/** @format */

import { selector, atom } from "recoil";
import { find } from "lodash";
import { recoilPersist } from "recoil-persist";
import { CartItem } from "../types/cart";

const { persistAtom } = recoilPersist();

export const favAtom = atom<CartItem | any>({
  key: "favAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const favSelector = selector({
  key: "favSelector",
  get: ({ get }) => {
    let cardItems = get(favAtom);
    if (cardItems.length > 0) null;
    // let localCardItems = JSON.parse(localStorage.getItem("cardItems"));
    return cardItems;
  },
  set: ({ set, get }, newValue) => {
    const cardItems = get(favAtom);
    const alreadyExists = find(cardItems, { uni: newValue.uni });
    if (alreadyExists) {
      let newCardItems = cardItems.map((i: any) => {
        if (i.id === newValue.id) {
          return {
            ...i,
            qty: i.qty + 1,
          };
        } else {
          return i;
        }
      });
      set(favAtom, newCardItems);
    } else {
      set(favAtom, [...cardItems, newValue]);
    }
  },
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
