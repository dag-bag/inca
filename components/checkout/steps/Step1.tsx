/** @format */

import React from "react";
import Container from "../CheckoutCatainer";
import { FaRegBuilding } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Address } from "../../../types/address";
import { useRecoilState, useSetRecoilState } from "recoil";
import { activeAddressCard, checkoutSteps } from "../../../atoms/checkout";
import AddressCard from "../AddessCard";
import PrimaryBtn from "../../buttons/PrimaryBtn";
import { useSession } from "next-auth/react";

type Props = {};

function Step1({}: Props) {
  const { data: session } = useSession();
  const fetchAddress = async () => {
    const res = await fetch("/api/address?email=" + session?.user?.email);
    const data = await res.json();
    return data;
  };
  const { data, error, isLoading } = useQuery<Address[]>(
    ["address"],
    fetchAddress
  );
  const setSelectedAddress = useSetRecoilState(activeAddressCard);
  const [checkoutState, setCheckoutState] = useRecoilState(checkoutSteps);
  return (
    <>
      <Container
        Title={"Address"}
        Question="Please Select Your Address ?"
        Level={1}
        ShipCardData={[
          {
            Title: "Ship To",
            Text: "Your Location",
            Icon: FaRegBuilding,
          },
        ]}
      />
      <div className="ml-14 mt">
        <h4 className="font-semibold ">Ship to Your Location</h4>
        <p className="text-xs font-light">
          Have your order delivered to your home, office or anywhere. We work
          with a number of different carriers & will ship via the one who can
          best meet your delivery needs.
        </p>
        {/* <Btn className={"rounded-md"} text={"Add another address"} /> */}
        <div className="flex items-center space-x-2 flex-wrap">
          {data?.map((item, i) => {
            return (
              <AddressCard
                {...item}
                key={i}
                index={i}
                onClick={() => {
                  setSelectedAddress(item);
                }}
              />
            );
          })}
        </div>
      </div>
      <PrimaryBtn
        text="Continue"
        onClick={() => {
          setCheckoutState(
            checkoutState.map((i, index) => {
              return i.status === "active"
                ? { ...i, status: "completed" } // change the status of the active step to completed
                : index === 1 // if the index is 1 then change the status of the next step to active
                ? { ...i, status: "active" }
                : i;
            })
          );
        }}
      />
      <button
        className="absolute bottom-3 right-5 bg-primary-1 rounded-md py-2 px-4 text-white disabled:opacity-50 cursor-pointer"
        // disabled={true ? !active : true}
        // onClick={() => {
        //   setState(2);
        //   Setx({ ...x, 1: "Complete" });
        //   setComplete(true);
        // }}
      >
        Continue to delivery
      </button>
    </>
  );
}

export default Step1;
