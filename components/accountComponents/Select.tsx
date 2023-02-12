/** @format */

import React, { Suspense } from "react";

type Props = {
  title: string;
  options?: string[];
  name: string;
  value: string | number;
  onchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  currentCategory?: string;
  className?: string;
  placeholder?: string;
  label?: string;
  error?: string;
};
function Select({
  title,
  options,
  name,
  value,
  onchange,
  disabled,
  currentCategory,
  className,
  placeholder,
  label,
  error,
}: Props) {
  return (
    <Suspense fallback={<h1>Loading.....</h1>}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{label}</span>
          <span className="label-text-alt text-error">{error}*</span>
        </label>
        <select
          id="name"
          disabled={disabled}
          aria-label="Default select example"
          value={value}
          className="select select-bordered"
          onChange={onchange}
          name={name}
        >
          <option disabled selected>
            Pick one
          </option>
          {options?.map((option) => {
            return <option key={option}>{option}</option>;
          })}
        </select>
      </div>{" "}
    </Suspense>
  );
}

export default Select;
