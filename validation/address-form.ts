/** @format */
import * as Yup from "yup";
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

let stringRequired = Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Required");
let LongStringRequired = Yup.string().min(2, "Too Short!").required("Required");

const checkoutSchema = Yup.object().shape({
  firstName: stringRequired,
  lastName: stringRequired,
  email: Yup.string().email("Invalid email").required("Required"),
  address: stringRequired,

  city: stringRequired,
  country: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  state: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  postalCode: Yup.string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(6, "Max  is 6 characters"),

  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
const formValidationSchema = Yup.object().shape({
  address1: LongStringRequired,
  address2: LongStringRequired,
  city: stringRequired,
  country: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  state: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  zipcode: Yup.string()
    .required("Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(6, "Max  is 6 characters"),

  lastName: stringRequired,
  firstName: stringRequired,
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),

  email: Yup.string().email("Invalid email").required("Required"),
});
export { checkoutSchema, formValidationSchema };
