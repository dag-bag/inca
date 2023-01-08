/** @format */

import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
};
function CheckoutLayout({ children, className }: Props) {
  const classes = `p-10 max-w-6xl bg-gray-50 mb-2 ${className} `;
  return <div className={classes}>{children}</div>;
}

export default CheckoutLayout;
