/** @format */

import axios from "axios";
import { getSession } from "next-auth/react";

export const getUserData = async () => {
  const session = await getSession();
  if (!session) return null;
  const user = await axios.get("/api/user?email=" + session?.user.email);
  return user.data;
};
