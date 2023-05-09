/** @format */

import checkoutNodeJssdk from "@paypal/checkout-server-sdk";

const configureEnvironment = function () {
  const clientId = `${process.env.NEXT_PUBLIC_PAYPAL_CLINET_ID}`;
  const clientSecret = `${process.env.NEXT_PUBLIC_PAYPAL_CLINET_SECRECT}`;

  // return process.env.NODE_ENV === "production"
  //   ? new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret)
  //   : new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret);

  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret)
};

const client = function () {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
};

export default client;
