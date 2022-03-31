import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function User() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Hello User</title>
      </Head>
      <div>User {id}</div>
    </>
  );
}

export default User;
