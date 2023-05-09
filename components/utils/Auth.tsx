/** @format */

import React from "react";
import { signIn, useSession } from "next-auth/react";
import Input from "./Input";
import { FormikValues, useFormik } from "formik";
import Btn from "../buttons/Btn";
import { formValidation, formValidationSchema } from "../../validation/form";
import { createUser } from "../../services/auth/register";
import { useRouter } from "next/router";
import Link from "next/link";
import BlurImage from "./BlurImage";
import { loginUserClientSide } from "../../services/auth/login_user";
import Head from "next/head";
import Email from "next-auth/providers/email";
type Props = {
  type: "login" | "signup";
};
type Res = {
  error?: string;
  url?: string;
  status: number;
  ok: boolean;
};

function Auth({ type }: Props) {
  const router = useRouter();

  let InputsData = [
    type === "signup" && {
      type: "name",
      name: "name",
      placeholder: "Name",
      label: "Name",
    },

    {
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email Address",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];

  const onSubmit = async (
    values: FormikValues,
    // @ts-ignore
    { setSubmitting, setErrors, resetForm }
  ) => {
    let loginUserDetails = {
      email: values.email,
      password: values.password,
      name: values?.name,
      username: values?.email.split("@")[0],
    };
    setSubmitting(true);
    switch (type) {
      case "login":
        let isVerified = await loginUserClientSide({
          identifier: values?.email,
          password: values?.password,
        });
        if (isVerified?.status === 200) {
          router.push("/");
          resetForm();
        } else {
          setErrors({ email: isVerified?.error });
        }

        break;
      case "signup":
        try {
          let isSignedUp = await createUser(loginUserDetails);
          if (isSignedUp.user) {
            let isVerified = await loginUserClientSide({
              identifier: values?.email,
              password: values?.password,
            });
            isVerified?.status === 200 && router.push(`${isVerified?.url}`),
              resetForm();
          }
        } catch (error: any) {
          setErrors({ email: error?.error?.message });
        }
        break;
      default:
        break;
    }

    setSubmitting(false);
  };
  let InitialValue = {
    email: "",
    password: "",
    [type === "signup" ? "name" : ""]: "",
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,

    isSubmitting,
    isValidating,
    isValid,
    setTouched,
    values,
    touched,
  } = useFormik({
    initialValues: InitialValue,
    validationSchema: formValidation(type),
    onSubmit: onSubmit,
  });

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <Head>
        <title>Incancestry Alpaca - {type}</title>
      </Head>
      ;
      <div className="bg-white hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen relative">
        <BlurImage image="/login.JPG" alt="Random" width={200} height={200} />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-primary">
            {type === "login"
              ? "Log in to your account"
              : "Create a new account"}{" "}
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            {InputsData?.map((item, index) => {
              if (!item) return null;
              return (
                <div className="mt-4" key={index}>
                  <label className="block text-gray-700">{item?.label}</label>
                  <Input
                    type={item?.type}
                    name={item?.name}
                    id={item?.name}
                    placeholder={item?.placeholder}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    value={values[`${item?.name}`]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}
                  />
                  {errors[`${item?.name}`] && (
                    <p className="text-red-500 text-xs italic">
                      {" "}
                      {errors[`${item?.name}`]}
                    </p>
                  )}
                </div>
              );
            })}

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>
            <Btn
              text={type === "login" ? "Log In" : "Sign Up"}
              className="btn-block mt-4"
              isLoading={isSubmitting}
              disabled={isSubmitting || isValidating || !isValid}
            />
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span
                className="ml-4"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                Log in with Google
              </span>
            </div>
          </button>
          <p className="mt-8">
            Need an account?{" "}
            <Link href={`/${type === "login" ? "signup" : "login"}`}>
              <span className="text-blue-500 hover:text-blue-700 font-semibold">
                {type === "login"
                  ? "Create an Account"
                  : "Login to your account"}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Auth;
