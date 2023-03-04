/** @format */

import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
};
function CheckoutLayout({ children, className }: Props) {
  const classes = `p-10  bg-gray-50 mb-2 ${className} border-2-- border-green-500--`;
  return <div className={classes}>{children}</div>;
}

export default CheckoutLayout;
