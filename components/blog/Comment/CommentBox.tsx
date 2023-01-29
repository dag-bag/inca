/** @format */

import { useMutation, useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TimeAgo from "timeago-react";
import { IComment } from "../../../types/comment";
import CommentInput from "./CommentInput";
function CommentBox({ id }: { id: string }) {
  const { data: session } = useSession();
  console.log("session:", session);

  const getComments = async () => {
    const comment = await fetch(`/api/comment?id=${id}`);
    const data = await comment.json();
    return data;
  };
  const { data, isLoading } = useQuery<IComment[]>(
    ["comment", { id }],
    getComments
  );

  return (
    <div className="w-full ">
      <h1 className=" text-3xl font-medium text-left text-[#bd9575] mb-10 ">
        Tu comentario nos importa
      </h1>
      <div className="flex ">
        {/* Image */}
        <div className="mr-5">
          <Image
            src={
              session?.user?.image ? session.user.image : "/assets/Comment.jpg"
            }
            alt=""
            width={50}
            height={50}
          />
        </div>
        {/* Box */}
        <CommentInput id={id} />
      </div>
      <div>
        {data?.map((comment) => {
          return (
            <div key={comment._id} className="flex mt-4">
              <div className="mr-5">
                <Image
                  src={
                    comment?.user?.image
                      ? comment?.user?.image
                      : "/assets/Comment.jpg"
                  }
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              {data.length === 0 && (
                <p className="text-red-500">Please add something in comment</p>
              )}
              <div className="border border-primary-1 p-4">
                <p className="text-primary-1 font-medium">
                  {comment?.user?.name ? comment.user.name : "Anonimo"}
                </p>
                <p>{comment.text}</p>
                <p>
                  <TimeAgo
                    datetime={comment.createdAtPost}
                    locale="vi"
                    className="text-xs text-gray-700  opacity-80"
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentBox;
