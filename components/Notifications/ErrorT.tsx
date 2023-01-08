/** @format */

import React from "react";
import { Toaster, toast } from "react-hot-toast";

type Props = {};

function ErrorT({}: Props) {
  return <Toaster position="bottom-right" reverseOrder={false} />;
}

export default ErrorT;
