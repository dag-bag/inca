/** @format */

import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { activeAddressCard, selectedAddress } from "../../../atoms/checkout";
import { Address } from "../../../types/address";
import AddressCard from "../AddessCard";

type Props = {};

function Step1Complete({}: Props) {
  const selectedAddress = useRecoilValue<Address | undefined>(
    activeAddressCard
  );
  return (
    <div className="min-w-[1040px] flex justify-start items-start space-x-2 relative">
      <h1 className="flex items-center  text-3xl font-semibold mt-6 mr-4">
        <BsFillPatchCheckFill className=" text-green-600 w-10 h-10 rounded-full flex justify-center items-center mr-4"></BsFillPatchCheckFill>
        {"Address"}
      </h1>
      <div className="">
        {selectedAddress ? (
          <AddressCard {...selectedAddress} index={0} />
        ) : null}
      </div>
      <div className="flex-none  pt-2.5 pr-2.5 pl-1 absolute top-0 right-3">
        <button
          type="button"
          className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95 flex space-x-2"
          //   onClick={() => {
          //     setState(1);
          //     Setx({ ...x, 1: "Pending" });
          //   }}
        >
          <span>Edit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3" />
            <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Step1Complete;
