/** @format */

import React, { useState } from "react";

import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import Auth from "../components/utils/Auth";

function Login() {
  return <Auth type="login" />;
}

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const provider = await getProviders();
  return {
    props: {
      provider,
    },
  };
};
