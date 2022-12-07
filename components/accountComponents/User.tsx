/** @format */

import { signOut, useSession } from "next-auth/react";
import React from "react";

function UserDetail() {
  const { data: session } = useSession();
  if (!session) return null;

  const username = `${session?.user?.email}`.split("@")[0];

  return (
    <div className="space-y-4 md:ml-20 px-5">
      <h1 className="mt-6 text-2xl font-bold  text-[#333] uppercase ">
        Hello {username}!
      </h1>
      <button
        className="underline font-medium"
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default UserDetail;
