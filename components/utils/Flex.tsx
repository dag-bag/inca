/** @format */

import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function Flex({ className, children }: Props) {
  const flexClasses = `${className} flex flex-col items-center justify-center`;
  return <div className={flexClasses}>{children}</div>;
}

export default Flex;
