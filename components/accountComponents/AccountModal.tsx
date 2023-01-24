/** @format */

import React, { Suspense } from "react";
import ModalBtn from "../buttons/ModalBtn";
import Modal from "../Modals/Modal";

type Props = {
  className?: string;
};

function AccountModal({ className }: Props) {
  return (
    <div className={className}>
      <ModalBtn text={"Add another address"} />
      <Suspense fallback={<p>Loading...</p>}>
        <Modal />
      </Suspense>
    </div>
  );
}

export default AccountModal;
