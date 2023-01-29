/** @format */

import React from "react";
import AccountLayout from "../../components/layouts/AccountLayout";
import Container from "../../components/accountComponents/Container";

import { gerAllOrderDetails } from "../../services/account/order";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Order from "../../models/Order";
import { OrderType } from "../../types/order";
import { ProductType } from "../../types/product";
import connectDb from "../../libs/ConnectDb";
type Props = {
  orders: OrderType[];
};

function OrderHistory({ orders }: Props) {
  return (
    <AccountLayout>
      {/* <Container> */}
      <div className="mt-10 space-y-4">
        <h1 className="font-bold text-[#333] text-3xl">Order History</h1>
        <p>
          Check the status of recent and old orders & discover more products
        </p>
        {orders.length > 0
          ? orders.map((item, index) => {
              return (
                <div className="pb-10" key={index}>
                  <div className="flex  rounded-md border border-gray-300 w-[60rem]">
                    <div className="bg-gray-100 w-64 px-10 py-10 rounded-md space-y-4 flex justify-center flex-col">
                      <div>
                        <h5 className="text-lg text-gray-500">Order ID</h5>
                        <p>#{item.orderID}</p>
                      </div>
                      <div>
                        <h5 className="text-lg text-gray-500">Date</h5>
                        <p>{new Date(item.createdAt).toDateString()},</p>
                      </div>
                      <div>
                        <h5 className="text-lg text-gray-500">Total Amount</h5>
                        <p>499.00$</p>
                      </div>
                      <div>
                        <h5 className="text-lg text-gray-500">Order Status</h5>
                        <p className="flex items-center space-x-2">
                          <span className="h-4 w-4 rounded-full bg-yellow-500 block"></span>{" "}
                          <span>Pending</span>
                        </p>
                      </div>
                    </div>

                    <div className=" px-10 py-5 w-full">
                      {Object.keys(item?.products).map((k) => {
                        return (
                          <>
                            <li key={k} className="flex py-2 ">
                              <div className="flex-shrink-0 ">
                                <Image
                                  src={item?.products[k]?.img[0].img}
                                  alt="Front of men's Basic Tee in sienna."
                                  className=" rounded-md object-center object-cover sm:w-48 sm:h-48"
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
                                          <span className="text-xl font-semibold text-left text-black">
                                            {item?.products[k]?.name}
                                          </span>
                                          <br />
                                          <span className=" font-medium text-left text-black">
                                            Color :
                                          </span>
                                          <span className=" font-light text-left text-black">
                                            {" "}
                                            {item.products[k].variant}
                                          </span>
                                          <br />
                                          <span className=" font-medium text-left text-black">
                                            Cantidad :{" "}
                                          </span>
                                          <span className=" font-light text-left text-black">
                                            {item.products[k].qty}
                                          </span>
                                          <br />
                                          <span className=" font-medium text-left text-black">
                                            Talla :
                                          </span>
                                          <span className=" font-light text-left text-black">
                                            {" "}
                                            {item.products[k].size}
                                          </span>
                                          <br />
                                        </p>
                                      </h3>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-7  divide-x-2 ">
                                      <button className=" text-gray-600 hover:text-black w-56">
                                        View Product
                                      </button>

                                      <button className=" text-gray-600 hover:text-black w-52">
                                        Similar Products
                                      </button>
                                    </div>
                                  </div>
                                  <div className="mt-4 sm:mt-0 sm:pr-9">
                                    <label
                                      htmlFor="quantity-0"
                                      className="sr-only"
                                    >
                                      Quantity, Basic Tee
                                    </label>

                                    <div className="absolute top-0 right-0">
                                      <h4 className="text-2xl font-medium text-left text-black">
                                        {item.products[k].price} $
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <hr className="mt-5 border border-gray-200" />
                          </>
                        );
                      })}
                      <div className="mt-5 space-x-2">
                        <button className="px-3 py-2 border border-gray-300 rounded-md">
                          View Order
                        </button>
                        <button className="px-3 py-2 border border-gray-300 rounded-md">
                          View Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </AccountLayout>
  );
}

export default OrderHistory;

export const getServerSideProps: GetServerSideProps = async (context) => {
  await connectDb;
  const session = await getSession(context);

  const orders = await Order.find({ userEmail: session?.user?.email });

  return {
    props: {
      orders: JSON.parse(JSON.stringify(orders)),
    },
  };
};
