/** @format */

import React from "react";

type Props = { IsDisAbled: boolean };

function CommentBtn({ IsDisAbled }: Props) {
  return (
    <div className=" border-x border-primary-1 border-b h-12 flex justify-end p-1 ">
      <button
        className="rounded-md px-3 py-2 text-white bg-primary disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={IsDisAbled}
      >
        Comment
      </button>
    </div>
  );
}

export default CommentBtn;
