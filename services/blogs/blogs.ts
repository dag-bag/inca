/** @format */

import axios from "axios";
import { IBlog } from "../../types/blog";

export const getAllBlogs = async () => {
  const resp = await axios.get("/api/blog");

  return resp.data;
};
