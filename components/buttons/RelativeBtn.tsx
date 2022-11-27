/** @format */

import React from "react";

type Props = {
  Icon: any;
  onClick: () => void;
  className?: string;
  text?: string;
  type?: "primary" | "secondary";
};

function RelativeBtn({ Icon, className, onClick }: Props) {
  return (
    <div className={`absolute ${className}`}>
      <Icon
        className="text-2xl text-red-500 hover:opacity-50 hover:scale-105 transition-all duration-200"
        onClick={onClick}
      />
    </div>
  );
}

export default RelativeBtn;
