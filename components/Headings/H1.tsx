/** @format */

import React from "react";

type Props = {
  className?: string;
  text: string;
};

function H1({ className, text }: Props) {
  const h1Classes = `${className} text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold rounded-md`;
  return (
    <h1
      className={h1Classes}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    ></h1>
  );
}

export default H1;
