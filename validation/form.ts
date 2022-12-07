/** @format */

import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(2, "Too Short!")

  //     .max(50, "Too Long!")
  //     .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
  // lastName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  // email: Yup.string().email("Invalid email").required("Required"),
});
export const stringValidation = (properties: string[]) => {
  let a = properties.map((property) => {
    let schema = {
      [property]: Yup.string().required("Required").min(2, "Too Short!"),
    };
    return schema;
  });

  let stringSchema = Yup.object().shape(
    a.reduce((acc, cur) => ({ ...acc, ...cur }), {})
  );
  return stringSchema;
};

export const formValidation = (type: "login" | "signup") => {
  let stringSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(1, "Too Short!").required("Required"),
    [type === "signup" ? "name" : ""]: Yup.string()
      .required("Required")
      .min(2, "Too Short!"),
  });
  return stringSchema;
};
