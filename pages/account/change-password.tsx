/** @format */

import React from "react";
import ChangePassword from "../../components/accountComponents/ChangePassword";
import AccountLayout from "../../components/layouts/AccountLayout";

type Props = {};

function ChangePassWordPage({}: Props) {
  return (
    <AccountLayout>
      <ChangePassword />
    </AccountLayout>
  );
}

export default ChangePassWordPage;
