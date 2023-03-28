/** @format */

import { selector, atom } from "recoil";
import { find } from "lodash";
import { recoilPersist } from "recoil-persist";
import { CartItem } from "../types/cart";
import { toast } from "react-hot-toast";

const { persistAtom } = recoilPersist();

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
        if (i.uni === newValue.uni) {
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
export const removeOneItemFromCart = selector({
  key: "removeOneItemFromCart",
  get: ({ get }) => {
    let cardItems = get(cartAtom);
    if (cardItems.length > 0) null;
    // let localCardItems = JSON.parse(localStorage.getItem("cardItems"));
    return cardItems;
  },
  set: ({ set, get }, newValue) => {
    const cardItems = get(cartAtom);
    const alreadyExists = find(cardItems, { uni: newValue.uni });
    if (newValue.qty === 0) {
      let newCartItems = cardItems.filter((i: any) => i.uni !== newValue.uni);
      set(cartAtom, newCartItems);
    } else {
      if (alreadyExists) {
        let newCardItems = cardItems.map((i: any) => {
          if (i.uni === newValue.uni) {
            return {
              ...i,
              qty: i.qty - 1,
            };
          } else {
            return i;
          }
        });
        set(cartAtom, newCardItems);
      } else {
        set(cartAtom, [...cardItems, newValue]);
      }
    }
  },
});

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cartItems = get(cartAtom);
    let total = 0;
    cartItems.map((i: any) => {
      total += i.sellPrice * i.qty;
    });
    return total;
  },
});

export const cartQty = selector({
  key: "cartQty",
  get: ({ get }) => {
    const cartItems = get(cartAtom);
    return cartItems.length;
  },
});

export const cartQuantity = selector({
  key: "cartQuantity",
  get: ({ get }) => {
    const cartItems = get(cartAtom);
    let qty = 0;
    cartItems.map((item) => {
      qty += item.qty;
    });
    return qty;
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

export const SideCartOpenAtom = atom({
  key: "SideCartOpenAtom",
  default: false,
});
