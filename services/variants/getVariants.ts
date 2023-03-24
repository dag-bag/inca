/** @format */

import strapi from "../../utils/strapi";
import { Main, MainDatum } from "./variants";

export const getVariants = async () => {
  const response = await strapi.find<Main>("variants", {
    // filters: {
    //   "products.Variant": "blue-alpaca",
    // },
    // fields: ["id", "attributes],
    populate: ["*", "product", "product", "images"],
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
