/** @format */

import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

function Grid({ className, children }: Props) {
  const gridClasses = `${className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 max-w-7xl m-auto`;
  return <div className={gridClasses}>{children}</div>;
}

export default Grid;
