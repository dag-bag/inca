/** @format */

import axios from "axios";

export const FetchCartProduct = async () => {
  const resp = await axios.get("/api/product");
  return resp.data;
};
