/** @format */

import strapi from "../../../utils/strapi";
import { Main } from "../trending";

const getTrendingProducts = async () => {
  const response = await strapi.find<Main>("trending-products", {
    // filters: {
    //   "products.Variant": "blue-alpaca",
    // },
    fields: ["id"],
    populate: ["products.variants", "products.variants.images"],
    // headers: {
    //   foo: "bar",
    // },
  });
  // const variants = response.data.attributes.map(
  //   (product) => product.Variant.slug
  // );

  // // Generate a list of dynamic paths based on the available product variants
  // const paths = variants.map((slug) => ({ params: { slug } }));
  let data = response.data;
  return data;
};
export { getTrendingProducts };
