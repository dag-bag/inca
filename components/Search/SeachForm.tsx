/** @format */

import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { stringValidation } from "../../validation/form";
import SearchInput from "./SearchInput";

type Props = {};

function SeachForm({ }: Props) {
  const { push } = useRouter();

  return (
    <Formik
      initialValues={{
        query: "",
      }}
      onSubmit={(values) => {
        push({
          pathname: "/search",
          query: { keyword: values.query },
        });
      }}
      validationSchema={stringValidation(["query"])}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <Form onSubmit={handleSubmit} className="bg-red-500 fixed top-0 left-0">
            <SearchInput value={values.query} onChange={handleChange} />
          </Form>
        );
      }}
    </Formik>
  );
}

export default SeachForm;
