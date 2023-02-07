/** @format */

import React from "react";

type Props = { IsDisAbled: boolean; isLoading: boolean };

function CommentBtn({ IsDisAbled, isLoading }: Props) {
  return (
    <div className=" border-x border-primary-1 border-b h-14 flex justify-end p-1 ">
      <button
        className={`rounded-md px-3 py-2 text-white bg-primary disabled:opacity-60 disabled:cursor-not-allowed btn ${
          isLoading && "loading"
        }`}
        disabled={IsDisAbled}
      >
        Comment
      </button>
    </div>
  );
}

export default CommentBtn;
