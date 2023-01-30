/** @format */

import axios from "axios";
import { getUserData } from "../account/user";
interface Data {
  comment: string;
  id: string;
}
export const CreateComment = async ({ comment, id }: Data) => {
  const user = await getUserData();

  const createNewComment = await axios({
    method: "POST",
    url: "/api/comment",
    data: {
      text: comment,
      blog: id,
      user: user ? user._id : "63d6e074ee348fb17ec416fd",
      createdAtPost: new Date().getTime().toString(),
    },
  });
  return createNewComment.data;
};
