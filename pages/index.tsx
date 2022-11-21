/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signOut, useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        SignOut
      </button>
    </div>
  );
}
