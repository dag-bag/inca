/** @format */
import * as Yup from "yup";
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

let stringRequired = Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Required");
let LongStringRequired = Yup.string().min(2, "Too Short!").required("Required");

const ReviewSchema = Yup.object().shape({
  title: stringRequired,
  text: Yup.string()
  .min(2, "Too Short!")
  .required("Required"),
  
  rating: Yup.string()
 
    .min(0, "Must be exactly 5 digits")
    .max(5, "Max  is 5 characters"),

 
});
export { ReviewSchema  };
