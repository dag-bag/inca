/** @format */

import React from "react";

type Props = {
  Level: number;
  Title: string;
};

function HeaderComponent({ Level, Title }: Props) {
  return (
    <h1 className="flex items-center  text-3xl font-semibold">
      <span className="bg-[#333] w-10 h-10 rounded-full  text-white flex justify-center items-center mr-4">
        {Level}
      </span>
      {Title}
    </h1>
  );
}

export default HeaderComponent;
