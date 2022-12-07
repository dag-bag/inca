/** @format */

import React from "react";

type Props = {
  error?: string;
};

function Error({ error }: Props) {
  return error ? <div className="text-red-500">{error}</div> : null;
}

export default Error;
