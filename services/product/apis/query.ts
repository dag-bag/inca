/** @format */

import strapi from "../../../utils/strapi";
import { Main, MainDatum } from "../query";

const getQueryProducts = async (query: string) => {
  const response = await strapi.find<MainDatum[]>("variants", {
    filters: {
      name: {
        $containsi: query,
      },
    },
    // fields: ["id"],
    populate: ["images"],
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
export { getQueryProducts };
