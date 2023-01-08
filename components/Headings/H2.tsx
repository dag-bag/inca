/** @format */

import React from "react";

type Props = {
  text?: string;
};

function H2({ text }: Props) {
  return (
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 ml-4">
      {text}
    </h2>
  );
}

export default H2;
