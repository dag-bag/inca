/** @format */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { IComment } from "../../../types/comment";
import CommentBtn from "./CommentBtn";

type Props = { id: string };

function CommentInput({ id }: Props) {
  const { data: session } = useSession();

  const [comment, setComment] = useState<string>("");
  const IsDisAbled = isEmpty(comment);
  const createComment = async (e: any) => {
    e.preventDefault();
    if (IsDisAbled) {
      console.log("Please Add something in comment box.");
      return;
    } else {
      const res = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({
          text: comment,
          blog: id,
          email: session?.user?.email,
          createdAtPost: new Date().getTime().toString(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let respData = await res.json();
      setComment("");
      return respData;
      // setFetchComments(true);
    }
  };
  const queryClient = useQueryClient();
  const mutation = useMutation(createComment, {
    onSuccess: () => {
      queryClient.setQueriesData(["comment", { id }], (old: any) => [
        {
          text: comment,
          blog: id,
          email: session?.user?.email,
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
      <CommentBtn IsDisAbled={IsDisAbled} />
    </form>
  );
}

export default CommentInput;
