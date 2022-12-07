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
}: Props) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt text-error">{error}*</span>
      </label>
      <input
        type="text"
        className={`input input-bordered w-full max-w-xs ${
          error ? "input-error" : ""
        }`}
        required={required}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
    // <div className="border border-[#333] flex flex-col px-4 py-2 relative rounded-md">
    //   {value && (
    //     <BsFillPatchCheckFill className="absolute right-5 top-6 text-green-500" />
    //   )}
    //   <label className="label">
    //     <span className="label-text">{label}</span>
    //     <span className="label-text-alt">Alt label</span>
    //   </label>
    //   <input
    //     required={required}
    //     type="text"
    //     name={name}
    //     className={`outline-none ${
    //       value?.length <= 0 ? "text-red-500" : "text-[#333]"
    //     } disabled:opacity-70 disabled:cursor-not-allowed`}
    //     value={value}
    //     placeholder={placeholder}
    //     onChange={onChange}
    //     disabled={disabled}
    //   />
    // </div>
  );
}

export default Input;
