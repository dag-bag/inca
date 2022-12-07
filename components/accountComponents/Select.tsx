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
      {/* <div className="">
        <div className="mb-3 w-full md:w-96">
          <label
            className="block  text-sm text-gray-600 mt-4 pb-1"
            htmlFor={name}
          >
            {placeholder}
          </label>
          <select
            id="name"
            disabled={disabled}
            className={classs}
            aria-label="Default select example"
            value={value}
            onChange={onchange}
            name={name}
          >
            <option value="Select Country">Select Country</option>
            {options.map((option) => {
              return <option key={option}>{option}</option>;
            })}
          </select>
        </div>
      </div> */}
    </Suspense>
  );
}

export default Select;
