/** @format */
import { atom } from "recoil";
import { BsEmojiSmile } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { BiLock } from "react-icons/bi";
import { FaRegAddressBook } from "react-icons/fa";
export const accountAtom = atom({
  key: "accountAtom",
  default: [
    {
      label: "Account Overview",
      icon: BsEmojiSmile,
      link: "/account",
    },
    {
      label: "Order History",
      icon: GrNotes,
      link: "/account/order-history",
    },
    {
      label: "Personal Details",
      icon: BsEmojiSmile,
      link: "/account/personal-details",
    },
    {
      label: "Change Password",
      icon: BiLock,
      link: "/account/change-password",
    },
    {
      label: "Address Book",
      icon: FaRegAddressBook,
      link: "/account/address-book",
    },
  ],
});
