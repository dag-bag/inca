/** @format */

import React from "react";
import Main from "../../components/accountComponents/Main";
import AccountLayout from "../../components/layouts/AccountLayout";

type Props = {};

function Index({}: Props) {
  return (
    <AccountLayout>
      <Main />
    </AccountLayout>
  );
}

export default Index;
