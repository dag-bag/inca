/** @format */

import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import PersonalUserDetails from "../../components/accountComponents/PersonalUserDetails";
import AccountLayout from "../../components/layouts/AccountLayout";
import Loader from "../../components/Loaders/Loader";
import Error from "../../components/utils/Error";
import User from "../../models/User";
import { getUserData } from "../../services/account/user";
import strapi from "../../utils/strapi";

export interface UserProps {
  id: string;
  name: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

function PersonalDetails() {
  const getUser = async () => {
    const session = await getSession();
    const data = await strapi.findOne("users", session?.user?.id as string);

    return data;
  };
  const { data, isLoading, error } = useQuery(["user"], getUser);
  if (error) return <Error />;

  return (
    <AccountLayout>
      {/* @ts-ignore */}
      {isLoading ? <Loader /> : <PersonalUserDetails user={data} />}
    </AccountLayout>
  );
}

export default PersonalDetails;
