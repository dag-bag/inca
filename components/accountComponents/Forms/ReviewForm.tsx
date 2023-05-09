/** @format */

import CheckoutForm from "./AddRessForm";

import React from "react";
import { Form, FormikProps, Formik, useFormikContext } from "formik";
import { ICity, ICountry, IState } from "country-state-city";
import { Country, State, City } from "country-state-city";
import { postcodeValidator } from "postcode-validator";
import {
  checkoutSchema,
  formValidationSchema,
} from "../../../validation/address-form";
import { formValidation } from "../../../validation/form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { HeadUiModalOpenAtom } from "../../Modals/HeadLessUiModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { createAddress } from "../../../services/account/address";
import { Address } from "../../../types/address";
import { ReviewModalAtom } from "../../Modals/ReviewModal";
import ReviewForm2 from "./ReviewForm2";
import Btn from "../../buttons/Btn";
import { ReviewSchema } from "../../../validation/Review";
import { createReview } from "../../../services/review/apis/CRUD";
import { ReviewProductIdAtom } from "../../../pages/account/order-history";
type Props = {
  cancelButtonRef: any;
};
export interface FormValues {
  title:string;
  text:string;
  rating:number
}

function ReviewForm({ cancelButtonRef }: Props) {
  const setOpen = useSetRecoilState(ReviewModalAtom);
  const proudctId = useRecoilValue(ReviewProductIdAtom)
 

  return (
    <Formik
      validateOnMount={true}
      initialValues={{
        title: "",
        text: "",
        rating:0
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        setOpen(false)
        createReview({
          ...values,product_id:proudctId
        })
        // createOrderFn(values);
      }}
      validationSchema={ReviewSchema}
    >
      {(props: FormikProps<FormValues>) => {
        const {
          errors,
          touched,
          setFieldValue,
          isValid,
          

          
        } = props;
    


      

        return (
          <Form className="lg:grid  lg:gap-x-12 xl:gap-x-16 px-6 md:px-12" >
            <ReviewForm2
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={props.values}
            />
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <Btn
                      className="bg-black text-white border-none"
                      disabled={!isValid}
                    >
                      {/* <a href="#" type="button"> */}
                      Submit
                      {/* </a> */}
                    </Btn>
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

export default ReviewForm






function FormikSubmitBUtton() {
  const setOpen = useSetRecoilState(HeadUiModalOpenAtom);
  const { values, handleSubmit, isValid } = useFormikContext<FormValues>();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  // const mutation = useMutation(createAddress, {
  //   onSuccess: (data) => {
  //     queryClient.setQueriesData(["review"], (old: any) => [
  //       ...old,
  //       {
  //         title: "",
  //       text: "",
  //       rating:0
  //       },
  //     ]);
  //   },
  // });
  return (
    <button
      type="submit"
      className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-opacity-30 disabled:cursor-not-allowed"
      onClick={() => {
        setOpen(false);
        let userEmail = `${session?.user?.email}`;
        // mutation.mutate({ values, userEmail });
      }}
      disabled={!isValid}
    >
      Add your Address
    </button>
  );
}

