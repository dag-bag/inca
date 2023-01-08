/** @format */

import React from "react";
import { Field } from "formik";
type Props = {
  value: string;
  onChange: (value: string) => void;
};

function SearchInput({ value, onChange }: Props) {
  return (
    <div className="card-body ">
      <Field
        id="query"
        type="text"
        name="query"
        placeholder="Search here"
        className="input input-bordered w-full "
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;
