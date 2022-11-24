/** @format */

import { selector, atom } from "recoil";
import { find } from "lodash";
import { recoilPersist } from "recoil-persist";
import { CartItem } from "../types/cart";

const { persistAtom } = recoilPersist();

export const favAtom = atom({
  key: "favAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const favSelector = selector({
  key: "favSelector",
  get: ({ get }) => {
    let favItems = get(favAtom);
    if (favItems.length > 0) null;
    // let localFavItems = JSON.parse(localStorage.getItem("favItems"));
    return favItems;
  },
  set: ({ set, get }, newItem) => {
    const favItems = get(favAtom);
    const alreadyExists = find(favItems, { id: newItem.id });
    if (alreadyExists) {
      console.log("already exists");
    } else {
      set(favAtom, newItem);
      localStorage.setItem("favItems", JSON.stringify([...favItems, newItem]));
    }
  },
});

export const cartAtom = atom<CartItem | any>({
  key: "cartAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const cartSelector = selector({
  key: "cardSelector",
  get: ({ get }) => {
    let cardItems = get(cartAtom);
    if (cardItems.length > 0) null;
    // let localCardItems = JSON.parse(localStorage.getItem("cardItems"));
    return cardItems;
  },
  set: ({ set, get }, newValue) => {
    const cardItems = get(cartAtom);
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
      set(cartAtom, newCardItems);
    } else {
      set(cartAtom, [...cardItems, newValue]);
    }
  },
});

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cartItems = get(cartAtom);
    let total = 0;
    cartItems.map((i: any) => {
      total += i.price * i.qty;
    });
    return total;
  },
});

export const cartQty = selector({
  key: "cartQty",
  get: ({ get }) => {
    const cartItems = get(cartAtom);
    let total = 0;
    cartItems.map((i: any) => {
      total += i.qty;
    });
    return total;
  },
});

export const removeCart = selector({
  key: "removeCart",
  get: ({ get }) => {
    const cartItems = get(cartAtom);
    return cartItems;
  },
  set: ({ set, get }, newValue) => {
    const cartItems = get(cartAtom);
    let newCartItems = cartItems.filter((i: any) => i.uni !== newValue.uni);
    set(cartAtom, newCartItems);
  },
});
