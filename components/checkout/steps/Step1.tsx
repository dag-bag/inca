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
import AccountModal from "../../accountComponents/AccountModal";
import HeadLessUiComponent, {
  HeadUiModalOpenAtom,
} from "../../Modals/HeadLessUiModal";
import HeadLessUiButton from "../../Modals/Button/HeadLessUiButton";
import Loader from "../../Loaders/Loader";
import Skeleton from "../../skeleton/Skeleton";

type Props = {};

function Step1({}: Props) {
  const { data: session } = useSession();
  const fetchAddress = async () => {
    let email = session?.user?.email;
    if (!session) {
      email = "guest@gmail.com";
    }
    const res = await fetch("/api/address?email=" + email);
    const data = await res.json();
    return data;
  };
  const { data, error, isLoading } = useQuery<Address[]>(
    ["address"],
    fetchAddress
  );
  const [selectedAddress, setSelectedAddress] =
    useRecoilState(activeAddressCard);
  const [checkoutState, setCheckoutState] = useRecoilState(checkoutSteps);
  const handleClick = () => {
    let isEditAbleOrNot = checkoutState.find((item) => item.edit === true);
    if (!isEditAbleOrNot) {
      setCheckoutState(
        checkoutState.map((i, index) => {
          return i.status === "active"
            ? { ...i, status: "completed" } // change the status of the active step to completed
            : index === 1 // if the index is 1 then change the status of the next step to active
            ? { ...i, status: "active" }
            : i;
        })
      );
    } else {
      setCheckoutState(
        checkoutState.map((i, index) => {
          return i.edit === true && i.step === 1
            ? { ...i, edit: !i.edit } // change the status of the active step to completed
            : i;
        })
      );
    }
  };

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
      <div className="md:ml-14 mt-4">
        <h4 className="font-semibold ">Ship to Your Location</h4>
        <p className="text-xs font-light">
          Have your order delivered to your home, office or anywhere. We work
          with a number of different carriers & will ship via the one who can
          best meet your delivery needs.
        </p>
        {/* <Btn className={"rounded-md"} text={"Add another address"} /> */}
        <div className="flex items-center space-x-2 flex-wrap">
          {isLoading ? (
            <Skeleton />
          ) : (
            data?.map((item, i) => {
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
            })
          )}
        </div>
      </div>
      {/* <AccountModal className="ml-12" /> */}
      {/* <button onClick={() => setOpenModal(true)}>Add New Address</button> */}
      <HeadLessUiButton text="Add New Address" className="md:ml-14" />
      <HeadLessUiComponent />
      <PrimaryBtn text="Continue" onClick={handleClick} className="ml-auto" />
    </>
  );
}

export default Step1;
