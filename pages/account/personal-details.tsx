/** @format */

import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import PersonalUserDetails from "../../components/accountComponents/PersonalUserDetails";
import AccountLayout from "../../components/layouts/AccountLayout";
import Loader from "../../components/Loaders/Loader";
import User from "../../models/User";
import { getUserData } from "../../services/account/user";

export interface UserProps {
  _id: string;
  name: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

function PersonalDetails() {
  const { data, isLoading } = useQuery(["user"], getUserData);

  return (
    <AccountLayout>
      {isLoading ? <Loader /> : <PersonalUserDetails user={data} />}
    </AccountLayout>
  );
}

export default PersonalDetails;
