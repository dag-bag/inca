/** @format */

import React from "react";
import HeaderComponent from "./HeaderComponent";
import ShipCard from "./ShipCard";
type Props = {
  Question: string;
  Title: string;
  Level: number;
  ShipCardData: {
    Icon?: any;
    Text: string;
    Title: string;
    IconText?: string;
    value?: number;
  }[];
};
function Container({ Question, Title, Level, ShipCardData }: Props) {
  return (
    <>
      <HeaderComponent Title={Title} Level={Level} />
      <div className="bg-gray-200   mt-2 max-w-4xl md:ml-14 rounded-md p-5 ">
        <h4 className="text-xl font-medium">{Question}</h4>
        <div className="flex flex-wrap gap-5 py-5">
          {ShipCardData?.map((item, i) => {
            return (
              <ShipCard
                Title={item.Title}
                Text={item.Text}
                Icon={item.Icon}
                key={i}
                IconText={item.IconText}
                value={item.value}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Container;
