/** @format */

import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedDeliveryCharges } from "../../atoms/checkout";
type Props = {
  Icon?: any;
  Text: string;
  Title: string;
  IconText?: string;

  value?: number;
};
function ShipCard({ Icon, Text, Title, IconText, value }: Props) {
  return (
    <div
      className={`h-[5rem] w-[20rem] bg-white border-4  flex items-center justify-between px-4 cursor-pointer rounded-md mt-4 border-primary`}
    >
      <div>
        <h5>{Title}</h5>
        <p className="text-primary-1 font-semibold">{Text}</p>
      </div>
      <div>
        {Icon ? (
          <Icon className="text-4xl text-gray-600" />
        ) : (
          <p className="font-bold text-3xl">{IconText}</p>
        )}
      </div>
    </div>
  );
}

export default ShipCard;
