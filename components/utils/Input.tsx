/** @format */

import React from "react";

type Props = {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  style?: 0 | 1 | 2;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  id?: string;
  setTouched?: (value: boolean) => void;
};

/** @format */

function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
  className,
  style,
  onBlur,
  id,
}: Props) {
  let styles = {
    1: "block w-full px-5 py-4 text-xs  transition duration-500 ease-in-out transform  text-[#333]  border-[#333] focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border  placeholder:text-gray-500 outline-none",
    2: "input input-bordered w-full max-w-xs bg-gray-100",
    3: "block w-full px-5 py-4 text-xs  transition duration-500 ease-in-out transform  text-[#333]  border-[#333] focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border  placeholder:text-gray-500 outline-none",
  };
  const inputClasses = `${style && styles[style]} ${className} `;
  return (
    <input
      autoCorrect="off"
      id={id}
      name={name}
      type={type}
      autoComplete={name}
      required={required}
      placeholder={placeholder}
      className={inputClasses}
      value={value}
      onChange={(e) => onChange(e)}
      onBlur={(e) => onBlur && onBlur(e)}
    />
  );
}

export default Input;
