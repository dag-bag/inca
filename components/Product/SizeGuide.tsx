/** @format */

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HomeIcon } from "@heroicons/react/outline";
import { atom, useRecoilState } from "recoil";
import { CategoriesData } from "../../data/Categoies-Carose-Data";
import FormLayout from "../accountComponents/Forms/FormLayou";
import Image from "next/image";
import { find } from "lodash";
import { ICategories } from "../../types/category";
export const SizeGuideOpenAtom = atom({
  key: "HeadUiModal",
  default: false,
});

const SizingGuideDetails = ({
  category,
  size_Guide_Url,
  size_instructions,
  isSize_instructions,
  link,
  img,
  name,
}: ICategories) => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900 text-center"
      >
        {`${name} Size Guide`}
      </Dialog.Title>
      <div className="mt-2">
        <div>
          <Image
            src={`${size_Guide_Url}`}
            width={500}
            height={500}
            alt="Sizing Chart"
          />
        </div>
        <p className="text-sm text-gray-500 mt-5">{size_instructions}</p>
      </div>
    </>
  );
};
export default function SizeGuide({
  currentCategories,
}: {
  currentCategories: string;
}) {
  const [open, setOpen] = useRecoilState(SizeGuideOpenAtom);

  const cancelButtonRef = useRef(null);
  const sizingGuide = find(CategoriesData, {
    category: currentCategories,
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      {sizingGuide?.isSize_instructions ? (
                        <SizingGuideDetails {...sizingGuide} />
                      ) : (
                        <NotAvailable />
                      )}
                    </div>
                  </div>
                </div>
                {/* <CheckOutL   /> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const NotAvailable = () => {
  return (
    <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900 text-center"
    >
      Sizing Guide Not Available
    </Dialog.Title>
  );
};
