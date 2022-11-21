/** @format */

import React from "react";

type Props = {
  className?: string;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
};

function Btn({ className, text, disabled, isLoading }: Props) {
  const btnClasses = `btn btn-primary ${className} disabled:opacity-50 ${
    isLoading && "loading"
  }`;
  return (
    <button className={btnClasses} disabled={disabled}>
      {text}
    </button>
  );
}

export default Btn;
