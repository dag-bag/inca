/** @format */

import axios from "axios";
import strapi from "../../../utils/strapi";
import { Main } from "../product";
import { MainDatum } from "../trending";

export const FetchCartProduct = async () => {
  const resp = await axios.get("/api/product");
  return resp.data;
};

export const getCartAdsProductsFromStrApi = async () => {
  const response = await strapi.find<MainDatum[]>("cart-ads", {
    // filters: {
    //   "products.Variant": "blue-alpaca",
    // },
    // fields: ["id", "attributes],
    populate: ["products", "products.variants", "products.variants.images"],
    // headers: {
    //   foo: "bar",
    // },
  });
  // const variants = response.data.attributes.map(
  //   (product) => product.Variant.slug
  // );

  // // Generate a list of dynamic paths based on the available product variants
  // const paths = variants.map((slug) => ({ params: { slug } }));

  return response.data;
};
