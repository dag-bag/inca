/** @format */

import strapi from "../../utils/strapi";

export const getProductByCategory = async (category: string) => {
  const response = await strapi.find("products", {
    populate: ["*", "variants", "variants.images"],
    filters: {
      category: category,
    },
  });
  return response.data;
};
