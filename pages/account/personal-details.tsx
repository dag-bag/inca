/** @format */

import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import PersonalUserDetails from "../../components/accountComponents/PersonalUserDetails";
import AccountLayout from "../../components/layouts/AccountLayout";
import User from "../../models/User";

export interface UserProps {
  _id: string;
  name: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}
type Props = {
  user: UserProps;
};

function PersonalDetails({ user }: Props) {
  console.log({ user });
  return (
    <AccountLayout>
      <PersonalUserDetails user={user} />
    </AccountLayout>
  );
}

export default PersonalDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const user = await User.findOne({
    email: session?.user?.email,
  }).select("-password");

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};
