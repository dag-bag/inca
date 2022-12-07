/** @format */

import React, { useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { atom, useRecoilState, useRecoilValue } from "recoil";

import Flex from "../utils/Flex";
import Select from "../accountComponents/Select";
import { useSession } from "next-auth/react";

import { EditAddressAtom, editAtom } from "../accountComponents/AddressCard";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../accountComponents/Input";
import Btn from "../buttons/Btn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAddress } from "../../services/account/address";
import { Address } from "../../types/address";
export const modalAtom = atom({
  key: "modalAtom",
  default: false,
});
let stringRequied = Yup.string().required("Required");

const formValidationSchema = Yup.object().shape({
  address1: stringRequied,
  address2: stringRequied,
  city: stringRequied,
  state: stringRequied,
  zipcode: Yup.number().required("Required").min(4, "Too Short!"),

  country: stringRequied,
  lastName: stringRequied,
  firstName: stringRequied,
  phone: Yup.number().required("Required").min(9, "Too Short!"),

  email: Yup.string().email("Invalid email").required("Required"),
});

function Modal({}) {
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
  const onSubmit = async (values: Address, actions: any) => {
    actions.setSubmitting(true);
    let userEmail = await `${session?.user?.email}`;
    await mutation.mutate({ values, userEmail });
    actions.resetForm();
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    validateOnBlur,
    values,
  } = useFormik({
    initialValues: {
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
    },
    validationSchema: formValidationSchema,
    onSubmit: onSubmit,
  });
  const FormData = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      value: values.firstName,
      error: errors.firstName,
      touched: touched.firstName,
      element: "input",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      value: values.lastName,
      error: errors.lastName,
      touched: touched.lastName,
      element: "input",
    },
    {
      label: "Address 1",
      name: "address1",
      type: "text",
      placeholder: "Address 1",
      value: values.address1,
      error: errors.address1,
      touched: touched.address1,
      element: "input",
    },
    {
      label: "Country",
      name: "country",
      type: "string",
      placeholder: "Country",
      value: values.country,
      error: errors.country,
      touched: touched.country,
      element: "select",
      options: ["USA", "Canada", "Mexico"],
    },
    {
      label: "Address 2",
      name: "address2",
      type: "text",
      placeholder: "Address 2",
      value: values.address2,
      error: errors.address2,
      touched: touched.address2,
      element: "input",
    },
    {
      label: "City",
      name: "city",
      type: "text",
      placeholder: "City",
      value: values.city,
      error: errors.city,
      touched: touched.city,
      element: "input",
    },
    {
      label: "State",
      name: "state",
      type: "string",
      placeholder: "State",
      value: values.state,
      error: errors.state,
      touched: touched.state,
      element: "select",
      options: ["Alabama", "Alaska", "Arizona", "Arkansas", "California"],
    },
    {
      label: "Zipcode",
      name: "zipcode",
      type: "number",
      placeholder: "Zipcode",
      value: values.zipcode,
      error: errors.zipcode,
      touched: touched.zipcode,
      element: "input",
    },

    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "Phone",
      value: values.phone,
      error: errors.phone,
      touched: touched.phone,
      element: "input",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      value: values.email,
      error: errors.email,
      touched: touched.email,
      element: "input",
    },
  ];

  return (
    <>
      <div className="modal !mt-0" id="my-modal-2">
        <div className="modal-box w-3/4 max-w-4xl bg-white">
          <div className="relative w-auto my-6 mx-auto ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font-semibold">Add address</h3>
                <a
                  href="#"
                  className="bg-transparent border-0 text-black float-right"
                >
                  <IoCloseCircleOutline className="text-3xl hover:text-red-500" />
                </a>
              </div>
              <div className="relative p-6 flex-auto z-50 ">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 place-items-center shadow-md rounded px-8 pt-6 pb-8 w-full md:flex flex-col items-start space-y-2"
                >
                  <div className="grid grid-cols-2 w-full">
                    {FormData.map((item, index) => {
                      return item.element === "select" ? (
                        <Select
                          key={item.name}
                          label={item.label}
                          name={item.name}
                          placeholder={item.placeholder}
                          value={item.value}
                          error={item.error}
                          options={item.options}
                          title={""}
                          onchange={handleChange}
                        />
                      ) : (
                        <Input
                          key={index}
                          label={item.label}
                          name={item.name}
                          type={item.type}
                          placeholder={item.placeholder}
                          value={item.value}
                          error={item.error}
                          onChange={handleChange}
                        />
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <Btn className="bg-black text-white border-none">
                      Submit
                      <a href="#"></a>
                    </Btn>
                    <a
                      href="#"
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      Close
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-action"></div>
        </div>
      </div>
    </>
  );
}

export default Modal;
