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
  link: string;
};

function LinkBtn({
  className,
  text,
  disabled,
  isLoading,
  children,
  onClick,
  link,
}: Props) {
  const btnClasses = `btn btn-primary ${className} disabled:opacity-50 ${
    isLoading && "loading"
  }`;
  return (
    <Link href={`/${link}`}>
      <button className={btnClasses} disabled={disabled} onClick={onClick}>
        {text || children}
      </button>
    </Link>
  );
}

export default LinkBtn;
