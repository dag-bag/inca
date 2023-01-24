/** @format */

import Image from "next/image";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom } from "../../../atoms/cart";
import {
  checkoutSteps,
  selectedDeliveryCharges,
} from "../../../atoms/checkout";
import { CartItem } from "../../../types/cart";
import PrimaryBtn from "../../buttons/PrimaryBtn";
import BlurImage from "../../utils/BlurImage";
import Container from "../CheckoutCatainer";

type Props = {};

function Step2({}: Props) {
  const cartItems = useRecoilValue<CartItem[]>(cartAtom);
  const [checkoutState, setCheckoutState] = useRecoilState(checkoutSteps);
  const handleClick = () => {
    let isEditAbleOrNot = checkoutState.find((item) => item.edit === true);
    if (!isEditAbleOrNot) {
      setCheckoutState(
        checkoutState.map((i, index) => {
          return i.status === "active"
            ? { ...i, status: "completed" } // change the status of the active step to completed
            : index === 2 // if the index is 1 then change the status of the next step to active
            ? { ...i, status: "active" }
            : i;
        })
      );
    } else {
      setCheckoutState(
        checkoutState.map((i, index) => {
          return i.edit === true && i.step === 2
            ? { ...i, edit: !i.edit } // change the status of the active step to completed
            : i;
        })
      );
    }
  };
  const selectedAddress = useRecoilValue(selectedDeliveryCharges);

  return (
    <>
      <Container
        Title={"Delivery"}
        Question="How soon you would like to receive the products? ?"
        Level={2}
        ShipCardData={[
          {
            Title: "Get It By",
            Text: "Normal Delivery",
            IconText: "40.8$",
            value: 40.8,
          },
          {
            Title: "Get It By",
            Text: "Express Delivery",
            IconText: "70.8$",
            value: 70.8,
          },
        ]}
      />
      <div className="mx-16">
        {cartItems?.map((item, index) => {
          return (
            <li key={index} className="flex py-6 sm:py-10">
              <div className="flex-shrink-0 ">
                <Image
                  src={item.img[0].img}
                  alt="Front of men's Basic Tee in sienna."
                  className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                  width={150}
                  height={150}
                />
                <div className="w-[77px] h-[21px] flex space-x-1 items-center mt-2 cursor-pointer relative justify-center ml-10">
                  {/* <img src="/cart.png" alt="" /> */}
                  <BlurImage
                    image={"/cart.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-sm">
                        <p className="text-left text-black">
                          <span className="text-2xl font-semibold text-left text-black">
                            {item.title}
                          </span>
                          <br />
                          <span className="text-lg font-medium text-left text-black">
                            Color :
                          </span>
                          <span className=" font-light text-left text-black">
                            {" "}
                            {item.color}
                          </span>
                          <br />
                          <span className="text-lg font-medium text-left text-black">
                            Cantidad :{" "}
                          </span>
                          <span className=" font-light text-left text-black">
                            {item.qty}
                          </span>
                          <br />
                          <span className="text-lg font-medium text-left text-black">
                            Talla :
                          </span>
                          <span className=" font-light text-left text-black">
                            {" "}
                            {item.size}
                          </span>
                          <br />
                          <br />
                          <span className="text-sm font-light text-left text-black">
                            REF. 8704403-incan-Mini
                          </span>
                        </p>
                      </h3>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:pr-9">
                    <label htmlFor="quantity-0" className="sr-only">
                      Quantity, Basic Tee
                    </label>

                    <div className="absolute top-0 right-0">
                      {/* Heroicon name: solid/x */}
                      <h4 className="text-2xl font-medium text-left text-black">
                        {item.price} $
                      </h4>
                    </div>
                  </div>
                </div>
                <p className="mt-4 flex text-sm  items-center text-gray-700 space-x-2">
                  {/* Heroicon name: solid/check */}
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-lg">In stock</span>
                </p>
              </div>
            </li>
          );
        })}
      </div>
      <PrimaryBtn text="Continue to Payment" onClick={handleClick} />
    </>
  );
}

export default Step2;
