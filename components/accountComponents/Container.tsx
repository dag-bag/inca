/** @format */

import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <main className="max-w-6xl  m-auto w-full relative">{children}</main>;
}

export default Container;
