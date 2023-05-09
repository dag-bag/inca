/** @format */

import { Field ,} from "formik";
import React from "react";
import FormikInput from "./FormikInput";
// import DeliveryOption from "./DeliveryOption";
import { ICity, ICountry, IState } from "country-state-city";
import { FormikErrors, FormikTouched } from "formik";
// @ts-ignore
import RatingStars from 'react-rating-stars-component';
import { FormValues } from "./ReviewForm";
type Props = {
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  setFieldValue:any
  values: FormValues;
};

function ReviewForm2({ errors, touched,setFieldValue,values }: Props) {
  return (
    <div>
      {" "}
      <div>
        <h2 className="text-lg font-medium text-gray-900">
        Review Information
        </h2>

        <div className="mt-4">
        <FormikInput
              label="Review Title"
              type="text"
              name="title"
              id="title"
              autoComplete="street-address"
              error={errors.title}
              touched={touched.title}
            />
        </div>
      </div>
      {/* Main Info */}
      <div className="border-t border-gray-200 pt-10">
   
        {/* Real Data IMPORTANT PART */}
        {/* TODO:fIX THE RENDERING OF THE PAYPAL CREATE A SUB COMPONENT FOR CHECKING THE BUGS */}
        <div className=" grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
              <label htmlFor="rating">Rating</label>
              <RatingStars
                count={5}
                size={24}
                value={values.rating}
                onChange={(newValue:number) => setFieldValue("rating", newValue)}
              />
            </div>

          {/* Company Info */}

          {/*  Addresss*/}
          <div className="sm:col-span-2">
          <div>
            <label
              htmlFor="country"
              className="flex justify-between text-sm font-medium text-gray-700"
            >
              <span>Write Review</span>
              <span className="text-error ">
                {errors.text && touched.text ? errors.text : null}*
              </span>
            </label>
            <div className="mt-1">
              <Field
                component="textArea"
                id="text"
                name="text"
                autoComplete="text"
                className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm ${
                  errors.text
                    ? "border-error focus:border-error focus:ring-error"
                    : "focus:border-blue-1 focus:ring-blue-1 "
                }`}
              >
               
              </Field>
            </div>
          </div>
          </div>

          
          
          {/*  */}
        </div>
      </div>
      {/* Delivery Options or Payment Process */}
      {/* <DeliveryOption /> */}
    </div>
  );
}

export default ReviewForm2;
