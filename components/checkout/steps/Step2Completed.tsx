/** @format */

import Image from "next/image";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartAtom } from "../../../atoms/cart";
import { checkoutSteps } from "../../../atoms/checkout";
import { CartItem } from "../../../types/cart";
import BlurImage from "../../utils/BlurImage";

type Props = {};

function Step2Completed({}: Props) {
  const cartItems = useRecoilValue<CartItem[]>(cartAtom);
  const [checkoutState, setCheckoutState] = useRecoilState(checkoutSteps);
  const handleClick = () => {
    let UpdatedSTate = checkoutState.map((item, i) => {
      return item.step === 2 ? { ...item, edit: true } : item;
    });

    setCheckoutState(UpdatedSTate);
  };
  return (
    <div className="--min-w-[1040px] flex flex-col justify-start items-start space-x-2 relative ">
      <h1 className="flex items-center  text-3xl font-semibold mt-6 mr-4 ">
        <BsFillCheckCircleFill className=" text-green-500 w-10 h-10 rounded-full flex justify-center items-center mr-4"></BsFillCheckCircleFill>
        {"Delivery"}
      </h1>
      <div>
        {/* <h4 className="font-semibold mt-5">Expected Thu, Oct 13 </h4> */}
        <div className="0">
          {cartItems?.map((item, index) => {
            return (
              <li
                key={index}
                className="mt-5 rounded-md p-3 flex  w-full  flex-col lg:flex-row border-2"
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
      </div>
      <div className="flex-none  pt-2.5 pr-2.5 pl-1 absolute top-0 right-3">
        <button
          type="button"
          className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95 flex space-x-2"
          onClick={handleClick}
          //   onClick={() => {
          //     setState(2);
          //     Setx({ ...x, 2: "Pending" });
          //   }}
        >
          <span>Edit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3" />
            <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Step2Completed;
