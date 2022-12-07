/** @format */

import { useQuery } from "@tanstack/react-query";
import { Address } from "cluster";
import { useSession } from "next-auth/react";
import React, { Suspense } from "react";
import ModalBtn from "../buttons/ModalBtn";
import Modal from "../utils/Modal";
import AddressCard from "./AddressCard";

type Props = {};

function Addresses({}: Props) {
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
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something Wrong Went. Please Contact to Developer.</p>;
  return (
    <div className="flex ">
      <div className=" my-8 space-y-5">
        <h1 className="font-bold text-[#333] text-3xl">Address book</h1>
        {data?.map((item, i) => {
          // @ts-ignore
          return <AddressCard {...item} key={i} da={data} />;
        })}

        <ModalBtn text={"Add another address"} />
        <Suspense fallback={<p>Loading...</p>}>
          <Modal />
        </Suspense>
      </div>
    </div>
  );
}

export default Addresses;
