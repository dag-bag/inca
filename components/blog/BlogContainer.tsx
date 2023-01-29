/** @format */

import React from "react";

function BlogContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm h-auto sm:mx-auto lg:max-w-full">
        {children}
      </div>
    </div>
  );
}

export default BlogContainer;
