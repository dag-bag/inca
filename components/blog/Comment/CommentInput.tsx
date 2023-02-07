/** @format */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { BiData } from "react-icons/bi";
import { getUserData } from "../../../services/account/user";
import { CreateComment } from "../../../services/comment/comment";
import { IComment } from "../../../types/comment";
import CommentBtn from "./CommentBtn";

type Props = { id: string };

function CommentInput({ id }: Props) {
  const [loading, setLoading] = useState(false);
  const { data: user } = useQuery(["user"], getUserData);

  const [comment, setComment] = useState<string>("");
  const IsDisAbled = isEmpty(comment);
  const createComment = async (e: any) => {
    e.preventDefault();
    if (IsDisAbled) {
      console.log("Please Add something in comment box.");
      return;
    } else {
      setLoading(true);
      const respData = await CreateComment({ id, comment });
      setComment("");
      setLoading(false);
      return respData;
      // setFetchComments(true);
    }
  };
  const queryClient = useQueryClient();
  const mutation = useMutation(createComment, {
    onSuccess: (data) => {
      queryClient.setQueriesData(["comment", { id }], (old: any) => [
        {
          text: comment,
          blog: id,
          user,
          createdAtPost: new Date().getTime().toString(),
        },
        ...old,
      ]);
    },
  });

  return (
    <form onSubmit={(e) => mutation.mutate(e)}>
      <textarea
        name=""
        id=""
        rows={3}
        cols={30}
        className="border border-primary-1  p-4 outline-none"
        placeholder="Escribe tu comentario"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <CommentBtn IsDisAbled={IsDisAbled} isLoading={loading} />
    </form>
  );
}

export default CommentInput;
