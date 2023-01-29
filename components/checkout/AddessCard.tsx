/** @format */

import React from "react";
import { useRecoilValue } from "recoil";
import { activeAddressCard } from "../../atoms/checkout";

import { Address } from "../../types/address";
interface Props extends Address {
  index: number;
  onClick?: () => void;
}
function AddressCard({
  address1,
  address2,
  city,
  state,
  zipcode,
  country,
  lastName,
  firstName,
  phone,
  email,
  _id,
  index,
  onClick,
}: Props) {
  const selectedId = useRecoilValue<Address | undefined>(activeAddressCard);

  return (
    <div
      className="h-[20rem] w-[20rem] border border-gray-400 mt-3 p-5 rounded-md cursor-pointer"
      onClick={onClick}
    >
      {" "}
      <h5 className="font-bold    flex items-center space-x-2">
        {selectedId ? (
          selectedId._id === _id ? (
            <span className="block p-1 border-2 border-black  rounded-full transition ease-in duration-300 mr-2 ">
              <a
                href="#blue"
                className="block w-5 h-5 bg-primary  rounded-full "
              ></a>
            </span>
          ) : (
            <span className="bg-[#333] w-8 h-8 rounded-full  text-white flex justify-center items-center mr-4">
              {index + 1}
            </span>
          )
        ) : null}
        Shipping address
      </h5>
      <div className="ml-11">
        <p className="py-2">{`${firstName} ${lastName}`}</p>
        <p className="text-sm font-light">{address1}</p>
        <p className="text-sm font-light">{address2}</p>
        <p className="text-sm font-light">{`${city} ${state} ${zipcode}`}</p>
        <p className="text-sm font-light">{country}</p>
        <p className="text-sm font-light">{phone}</p>
        <p className="text-sm font-light truncate">{email}</p>
      </div>
    </div>
  );
}

export default AddressCard;
