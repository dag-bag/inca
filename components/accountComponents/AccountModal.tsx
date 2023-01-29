/** @format */

import React, { Suspense } from "react";

import HeadLessUiButton from "../Modals/Button/HeadLessUiButton";
import HeadLessUiComponent from "../Modals/HeadLessUiModal";

type Props = {
  className?: string;
};

function AccountModal({ className }: Props) {
  return (
    <div className={className}>
      <HeadLessUiButton text={"Add another address"} />
      <Suspense fallback={<p>Loading...</p>}>
        <HeadLessUiComponent />
      </Suspense>
    </div>
  );
}

export default AccountModal;
