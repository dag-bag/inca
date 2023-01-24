/** @format */

import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};

function Btn({
  className,
  text,
  disabled,
  isLoading,
  children,
  onClick,
}: Props) {
  const btnClasses = `btn btn-primary ${className} disabled:opacity-50 ${
    isLoading && "loading"
  }`;
  return (
    <button
      type="submit"
      className={btnClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {text || children}
    </button>
  );
}

export default Btn;
