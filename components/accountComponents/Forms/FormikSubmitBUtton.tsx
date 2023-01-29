/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikProps, useFormikContext } from "formik";
import { useSession } from "next-auth/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { createAddress } from "../../../services/account/address";
import { createOrderFn } from "../../../services/account/order";
import { FormValues } from "../../../types/checkout";
import HeadLessUiComponent, {
  HeadUiModalOpenAtom,
} from "../../Modals/HeadLessUiModal";

type Props = {};

function FormikSubmitBUtton({}: Props) {
  const setOpen = useSetRecoilState(HeadUiModalOpenAtom);
  const { values, handleSubmit, isValid } = useFormikContext<FormValues>();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const mutation = useMutation(createAddress, {
    onSuccess: (data) => {
      queryClient.setQueriesData(["address"], (old: any) => [
        ...old,
        {
          address1: values.address1,
          address2: values.address2,
          city: values.city,
          state: values.state,
          zipcode: values.zipcode,
          country: values.country,
          lastName: values.lastName,
          firstName: values.firstName,
          phone: values.phone,
          email: values.email,
        },
      ]);
    },
  });
  return (
    <button
      type="submit"
      className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-opacity-30 disabled:cursor-not-allowed"
      onClick={() => {
        setOpen(false);
        let userEmail = `${session?.user?.email}`;
        mutation.mutate({ values, userEmail });
      }}
      disabled={!isValid}
    >
      Add your Address
    </button>
  );
}

export default FormikSubmitBUtton;
