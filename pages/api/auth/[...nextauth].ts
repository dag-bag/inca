/** @format */
import NextAuth, { DefaultSession } from "next-auth";

import User from "../../../models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectMongo from "../../../libs/auth/mongoauth";
import bcrypt from "bcryptjs";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// @ts-ignore
import clientPromise from "../../../libs/auth/mongoClient";
import FacebookProvider from "next-auth/providers/facebook";
import { Session } from "inspector";
import { UserProp } from "../../../types/user";
import { loginUserBackend } from "../../../services/auth/login_user";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      username: string;
      /** The user's postal address. */
      id?: string;
    } & DefaultSession["user"];
  }
}
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: `${process.env.FACEBOOK_ID}`,
      clientSecret: `${process.env.FACEBOOK_SECRET}`,
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: {
          label: "Identifier",
          type: "string",
          placeholder: "example@example.com or example",
        },
        password: { label: "Password", type: "password" },
      },

      //@ts-ignore
      async authorize(credentials) {
        const user = await loginUserBackend({
          identifier: credentials?.identifier as string,
          password: credentials?.password as string,
        });
        return user;
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
  },
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    // @ts-ignore
    authorized({ token }: any) {
      if (token) return true; // If there is a token, the user is authenticated
    },
    async jwt({ token, account, user }) {
      if (user) {
        // @ts-ignore
        token.sub = user.id;
        token.username = user?.username;
        return token;
      }
      return token;
      // console.log("user:", user);
      // console.log(user);
      // console.log(token);
    },
    session({ session, token, user }) {
      session.user.id = token.sub;
      session.user.username = token.username as string;

      return session;
    },
  },
});

const signInUser = async (user: any, password?: string) => {
  if (!password) {
    throw new Error("Please Enter Password");
  }
  let isMatch = await bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect Password");
  }

  return user;
};
// const passCompare = await bcrypt.compare(password, user.password);
