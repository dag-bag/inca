/** @format */

import { Params, PARAM_Main } from "../params";
/** @format */

/** @format */

import strapi from "../../../utils/strapi";
import { StrapiResponse } from "strapi-sdk-js";

export const getParams = async () => {
  const resp = await strapi.find<Params[]>("variants", {
    fields: ["id", "slug"],
  });

  return resp.data.map((item) => item.attributes.slug);
};
