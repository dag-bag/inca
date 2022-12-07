/** @format */

import React from "react";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../atoms/account";
import AccountBox from "./AccountBox";

type Props = {};

function Main({}: Props) {
  const data = useRecoilValue(accountAtom);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl md:ml-5 gap-5 mt-8 px-4 md:px-0 md:mb-4">
      {data?.map((item, index) => {
        return (
          <AccountBox
            label={item.label}
            Icon={item.icon}
            link={item.link}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Main;
