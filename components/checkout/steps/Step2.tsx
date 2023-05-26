/** @format */

import Image from "next/image";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  cartAtom,
  cartQty,
  cartQuantity,
  cartTotal,
  DeliverySelector,
} from "../../../atoms/cart";
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
  const deliveryCharges = useRecoilValue<number>(DeliverySelector);
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

  return (
    <>
      <Container
        Title={"Delivery"}
        Question="How soon you would like to receive the products ?"
        Level={2}
        ShipCardData={[
          {
            Title: "Standard shipping",
            Text: "Get It in 3-4 weeks",
            IconText: `${deliveryCharges === 0 ? "Free" : deliveryCharges}`,
            value: deliveryCharges,
          },
        ]}
      />
      <div className="lg:mx-16 max-w-4xl mb-5">
        {cartItems?.map((item, index) => {
          return (
            <li
              key={index}
              className="mt-5 rounded-md pr-5 flex py-2 w-full sm:py-5 flex-col lg:flex-row border-2"
            >
              <div>
                <Image
                  src={item.img.data[0].attributes.formats.medium.url}
                  alt="Front of men's Basic Tee in sienna."
                  className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                  width={150}
                  height={150}
                />
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
                      <p className="text-2xl font-medium text-left text-black flex flex-col">
                        <span>${item.sellPrice}</span>
                        <span className="text-primary line-through">
                          ${item.price}
                        </span>
                      </p>
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
