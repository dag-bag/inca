/** @format */

import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
type Props = {
  label: string;
  type?: string;
  placeholder: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  autocomplete?: string;
};
function Input({
  required,
  label,
  value,
  onChange,
  type,
  placeholder,
  error,
  name,
  disabled,
  id,
  autocomplete,
}: Props) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt text-error">{error}*</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autocomplete}
        placeholder={placeholder}
        className={`block w-full px-5 py-3 text-base  transition duration-500 ease-in-out transform  text-[#333]  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2  border-2  placeholder:text-[#333] disabled:opacity-50  ${
          error
            ? "input-error focus:ring-error"
            : "border-[#333] focus:ring-offset-[#333]"
        } rounded-md`}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
