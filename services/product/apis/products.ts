/** @format */

import axios from "axios";
import strapi from "../../../utils/strapi";
import { Main } from "../product";

export const FetchCartProduct = async () => {
  const resp = await axios.get("/api/product");
  return resp.data;
};

export const getProductsFromStrApi = async () => {
  const response = await strapi.find<Main>("products", {
    // filters: {
    //   "products.Variant": "blue-alpaca",
    // },
    // fields: ["id", "attributes],
    populate: ["*", "variants", "variants.images"],
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
