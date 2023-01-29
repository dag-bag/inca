/** @format */

import { getSession, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Btn from "../buttons/Btn";
import Input from "./Input";

import { useMutation, useQuery } from "@tanstack/react-query";

import { useFormik } from "formik";
import { GetServerSideProps } from "next";
import { UserProps } from "../../pages/account/personal-details";
import { stringValidation } from "../../validation/form";
import Error from "../utils/Error";
import { getUserData } from "../../services/account/user";

type Props = {
  user: UserProps;
};

function PersonalUserDetails({ user }: Props) {
  var { data: session } = useSession();

  const updateUser = async () => {
    const update = await fetch("/api/user?id=" + session?.user.email, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values?.name,
        username: values?.username,
      }),
    });
    const upd = await update.json();
    return upd;
  };

  const mutation = useMutation(updateUser);
  let onSubmit = () => {
    mutation.mutate();
  };
  const { handleChange, handleSubmit, handleBlur, errors, values, isValid } =
    useFormik<{
      name: string;
      username: string;
      email: string;
    }>({
      initialValues: {
        name: user?.name,
        username: user?.username,
        email: user?.email,
      },
      validationSchema: stringValidation(["name", "username"]),
      onSubmit: onSubmit,
    });
  const UserInputData = [
    {
      label: "Username",
      name: "username",
      isDisabled: false,
      error: errors?.username,
    },
    {
      label: "Name",
      name: "name",
      isDisabled: false,
      error: errors?.name,
    },
    {
      label: "Email",
      name: "email",
      isDisabled: true,
      error: errors?.email,
    },
  ];
  return (
    <form
      className="flex px-2 flex-wrap-reverse items-center justify-center md:justify-start"
      onSubmit={handleSubmit}
    >
      <div className=" my-8 space-y-5">
        <h1 className="font-bold text-[#333] text-3xl">Personal Details</h1>
        <div className="space-y-2">
          {UserInputData.map((input) => (
            <>
              <Input
                label={input.label}
                // @ts-ignore
                value={values[`${input?.name}`]}
                onChange={handleChange}
                name={input.name}
                placeholder="Enter your username"
                disabled={input.isDisabled}
                error={input.error}
              />
              {/* @ts-ignore */}
            </>
          ))}
          {mutation.isSuccess ? (
            <div className="text-green-500">
              User details Updated! Please Wait 2 min for showing details on the
              website.
            </div>
          ) : null}
        </div>
        <Btn
          text="Save Now"
          className="bg-[#333] text-white"
          disabled={!isValid}
          isLoading={mutation.isLoading}
        />
      </div>
    </form>
  );
}

export default PersonalUserDetails;
