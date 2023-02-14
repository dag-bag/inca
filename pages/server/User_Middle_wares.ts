/** @format */

import next, { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import User from "../../models/User";

export const UserNameIdentifyFire = async (
  username: string,
  res: NextApiResponse
) => {
  const isUserNameExist = await User.find({ username });
  if (isUserNameExist) {

  } else {
    return res.json({ error: "User Name Already taken", ok: false })
  }
};
