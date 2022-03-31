import React from "react";
import Link from "next/link";

function index() {
  return (
    <h2>
      <Link href="/">
        <a>Go To the Home Page</a>
      </Link>
    </h2>
  );
}

export default index;
