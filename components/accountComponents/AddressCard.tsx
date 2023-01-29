/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { atom, useSetRecoilState } from "recoil";
import { Address } from "../../types/address";
export const modalAtom = atom({
  key: "modalAtom",
  default: false,
});

export const EditAddressAtom = atom({
  key: "EditAddressAtom",
  default: {},
});
export const editAtom = atom({
  key: "editAtom",
  default: false,
});
type Props = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: number;
  country: string;
  lastName: string;
  firstName: string;
  phone: number;
  email: string;
  _id?: string;
  button?: boolean;
};
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

  button,
}: Props) {
  const setEditData = useSetRecoilState(EditAddressAtom);
  const setShowModal = useSetRecoilState(modalAtom);
  const setEdit = useSetRecoilState(editAtom);
  const query = useQueryClient();

  const mutation = useMutation(
    async () => {
      await fetch("/api/address?id=" + _id, {
        method: "DELETE",
      });
    },
    {
      onSuccess: () => {
        query.setQueryData(["address"], (oldData: any) => {
          const newData = oldData.filter((task: any) => task._id !== _id);
          return newData;
        });
      },
    }
  );
  return (
    <div className="mt-5 bg-white shadow cursor-pointer rounded-xl max-w-3xl border border-gray-300 p-3  ">
      {/* <h3 className="text-2xl ml-4">{Title}</h3> */}
      <div className="flex">
        <div className="flex-1 grid grid-cols-2 py-5 pl-5 overflow-hidden gap-x-10 gap-y-3">
          <ul>
            <li className="text-xs text-gray-600 uppercase "> Name</li>
            <li className="max-w-2xl">{firstName + " " + lastName}</li>
          </ul>
          {
            <ul>
              <li className="text-xs text-gray-600 uppercase ">
                Payment Method
              </li>
              <li className="max-w-2xl">PayPal</li>
            </ul>
          }

          <ul>
            <li className="text-xs text-gray-600 uppercase ">Address 1</li>
            <li className="max-w-2xl">{address1}</li>
          </ul>
          <ul>
            <li className="text-xs text-gray-600 uppercase ">Address 2</li>
            <li className="max-w-2xl">{address2}</li>
          </ul>
          <ul>
            <li className="text-xs text-gray-600 uppercase ">City</li>
            <li className="max-w-2xl">{city}</li>
          </ul>
          <ul>
            <li className="text-xs text-gray-600 uppercase ">State</li>
            <li className="max-w-2xl">{state}</li>
          </ul>
          <ul>
            <li className="text-xs text-gray-600 uppercase ">ZipCode</li>
            <li className="max-w-2xl">{zipcode}</li>
          </ul>
          <ul>
            <li className="text-xs text-gray-600 uppercase ">Country</li>
            <li className="max-w-2xl">{country}</li>
          </ul>

          <ul>
            <li className="text-xs text-gray-600 uppercase ">Phone</li>
            <li className="max-w-2xl">{phone}</li>
          </ul>
          <ul>
            <li className="text-xs text-gray-600 uppercase ">Email</li>
            <li className="max-w-2xl truncate w-42">{email}</li>
          </ul>
        </div>

        <div>
          <div className="flex-none  pt-2.5 pr-2.5 pl-1 ">
            <button
              className="px-2 py-2 font-medium tracking-wide  capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
              onClick={() => mutation.mutate()}
            >
              <AiTwotoneDelete className="text-2xl text-red-400" />
            </button>
          </div>
          {button ? (
            <div className="flex-none  pt-2.5 pr-2.5 pl-1">
              <button
                type="button"
                className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
                onClick={() => {
                  setEditData({
                    _id,
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
                  });
                  setEdit(true);
                  setShowModal(true);
                }}
              >
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
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
