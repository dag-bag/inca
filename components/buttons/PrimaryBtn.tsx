/** @format */

import { find, isEmpty } from "lodash";
import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeAddressCard,
  checkoutSteps,
  IsDisAbledForButtonCheckOutSelector,
  selectedDeliveryCharges,
} from "../../atoms/checkout";

type Props = {
  className?: string;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

function PrimaryBtn({
  className,
  text,
  // disabled,
  isLoading,
  children,
  onClick,
  type,
}: Props) {
  const selectedAddress = useRecoilValue(activeAddressCard);
  const selectedDeliveryCharge = useRecoilValue(selectedDeliveryCharges);
  const checkOutStateData = useRecoilValue(checkoutSteps);

  const btnClasses = ` btn bg-[#333] text-white border-none outline-none ${className} disabled:opacity-70 ${
    isLoading && "loading"
  } `;
  const IsSelectedOrNot = () => {
    let allData = [
      {
        step: 1,
        data: selectedAddress,
      },
      {
        step: 2,
        data: selectedDeliveryCharge,
      },
    ];
    const activeState = find(checkOutStateData, {
      status: "active",
    });

    for (let i = 0; i < allData.length; i++) {
      if (allData[i].step === activeState?.step) {
        return false;
      }
    }
    return true;
  };

  let disabled = IsSelectedOrNot();
  return (
    <div className="flex justify-end">
      <button
        type={type}
        className={btnClasses}
        disabled={disabled}
        onClick={onClick}
      >
        {text || children}
      </button>
    </div>
  );
}

export default PrimaryBtn;
