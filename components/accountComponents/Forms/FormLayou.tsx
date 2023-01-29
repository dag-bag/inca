/** @format */

import CheckoutForm from "./AddRessForm";

import React from "react";
import { Form, FormikProps, Formik } from "formik";
import { FormValues } from "../../../types/checkout";
import { ICity, ICountry, IState } from "country-state-city";
import { Country, State, City } from "country-state-city";
import {
  checkoutSchema,
  formValidationSchema,
} from "../../../validation/address-form";
import { formValidation } from "../../../validation/form";
import { useSetRecoilState } from "recoil";
import { HeadUiModalOpenAtom } from "../../Modals/HeadLessUiModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { createAddress } from "../../../services/account/address";
import { Address } from "../../../types/address";
import FormikSubmitBUtton from "./FormikSubmitBUtton";
type Props = {
  cancelButtonRef: any;
};

function FormLayout({ cancelButtonRef }: Props) {
  const setOpen = useSetRecoilState(HeadUiModalOpenAtom);

  return (
    <Formik
      validateOnMount={true}
      initialValues={{
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: 0,
        country: "",
        lastName: "",
        firstName: "",
        phone: 0,
        email: "",
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        // createOrderFn(values);
      }}
      validationSchema={formValidationSchema}
    >
      {(props: FormikProps<FormValues>) => {
        const {
          errors,
          touched,
          isSubmitting,
          isValid,

          isValidating,
          values,
        } = props;

        const countries = Country.getAllCountries();
        const states = State.getStatesOfCountry(values.country);
        const cities = City.getCitiesOfState(values.country, values.state);

        const onSubmit = async (values: Address, actions: any) => {
          actions.setSubmitting(true);
          // let userEmail = await `${session?.user?.email}`;
          // await mutation.mutate({ values, userEmail });
          actions.resetForm();
        };

        return (
          <Form className="lg:grid  lg:gap-x-12 xl:gap-x-16 px-6 md:px-12">
            <CheckoutForm
              errors={errors}
              touched={touched}
              countries={countries}
              states={states}
              cities={cities}
            />
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <FormikSubmitBUtton />
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setOpen(false)}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormLayout;
