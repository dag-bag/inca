/** @format */

import React from "react";

import { useRouter } from "next/router";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AddressCard from "../../components/accountComponents/AddressCard";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderById } from "../../services/orders/orders";
import invariant from "tiny-invariant";
import AuthenticationLayout from "../../components/layouts/AuthenticationLayout";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Loader from "../../components/Loaders/Loader";
import { OrderResponse } from "../../types/order";
import Image from "next/image";
import { MainDatum } from "../../services/product/order";
function Success() {
  const router = useRouter();
  const { orderId } = router.query;
  const { data, isLoading } = useQuery(
    ["/api/getorder", { orderId }],
    async () => {
      invariant(typeof orderId === "string", "orderId must be a string");
      let result = fetchOrderById(orderId);
      return result;
    }
  );
  if (isLoading) return <Loader />;
  const order = data?.data[0];
  console.log(order);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
      <div className="md:w-[85%] md:ml-auto p-5">
        <div className="flex space-x-2">
          <AiOutlineCheckCircle className="text-6xl text-green-500" />
          <div>
            <h3 className="mt-1  text-gray-500">
              Order# {order?.attributes?.orderID}
            </h3>
            <p>
              Thanks{" "}
              {order?.attributes?.address.firstName +
                " " +
                order?.attributes?.address.lastName}{" "}
            </p>
          </div>
        </div>
        <div className="ml-16">
          <div className="mt-5 bg-white shadow cursor-pointer rounded-xl max-w-3xl border border-gray-300 p-5">
            <h4 className=" text-xl">Your order is confirmed</h4>
            <p className="text-sm">
              You’ll receive a confirmation email with your order number
              shortly.
            </p>
          </div>
          <div className="mt-5 bg-white shadow cursor-pointer rounded-xl max-w-3xl border border-gray-300 p-5">
            <h4 className=" text-xl">Order updates</h4>
            <p className="text-sm">
              You’ll get shipping and delivery updates by email.
            </p>
          </div>
          {/* @ts-ignore */}
          <AddressCard {...order?.attributes?.address} button={false} />
        </div>
      </div>
      <div className="bg-gray-50 py-12 md:py-15">
        <div className="mx-auto max-w-lg px-4 lg:px-8">
          <div className="mt-5">
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-gray-200">
                {order &&
                  order.attributes.products.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-between py-4"
                        key={index}
                      >
                        <div className="flex items-start">
                          <Image
                            width={50}
                            height={50}
                            alt="Trainer"
                            src={item.img.data[0].attributes.formats.small.url}
                            className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                          />
                          <div className="ml-4">
                            <p className="text-sm">{item.title}</p>
                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">{item.color}</dd>
                              </div>
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">{item.size}</dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm">
                            $ {item.price}.00
                            <small className="text-gray-500">
                              x {item.qty}
                            </small>
                          </p>
                        </div>
                      </li>
                    );
                  })}

                <li className="flex items-center justify-between py-4">
                  <div className="flex items-start">
                    <div className="ml-4">
                      <p className="text-sm">SubTotal</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">${order?.attributes.subTotal}.00</p>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div className="flex items-start">
                    <div className="ml-4">
                      <p className="text-sm">Shipping</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">
                      ${order?.attributes.deliveryCharges}
                    </p>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 ">
                  <div className="flex items-start">
                    <div className="ml-4">
                      <p className="text-xl">Total</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl">${order?.attributes?.total}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/login",
//       },
//     };
//   } else {
//     return {
//       props: {},
//     };
//   }
// };
