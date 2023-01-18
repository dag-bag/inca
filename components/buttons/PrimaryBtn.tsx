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
  type?: "submit" | "reset" | "button";
};

function PrimaryBtn({
  className,
  text,
  disabled,
  isLoading,
  children,
  onClick,
  type,
}: Props) {
  const btnClasses = ` btn bg-[#333] text-white border-none outline-none ${className} disabled:opacity-50 ${
    isLoading && "loading"
  } `;
  return (
    <button
      type={type}
      className={btnClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {text || children}
    </button>
  );
}

export default PrimaryBtn;
