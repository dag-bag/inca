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

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
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
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, session: any) {
        await connectMongo();
        // Add logic here to look up the user from the credentials supplied

        const user = await User.findOne({ email: credentials?.email });

        if (!user) {
          throw new Error("User not found");
        }
        if (user) {
          let verifiedUser = await signInUser(user, credentials?.password);
          // console.log(verifiedUser);
          let fetchedUser = JSON.parse(JSON.stringify(verifiedUser));
          // console.log(fetchedUser);
          session.image = verifiedUser.image;
          session.name = verifiedUser.name;
          session.email = verifiedUser.email;
          session.userId = fetchedUser._id;

          return session;
        }
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
        token.sub = user.userId;
        return token;
      }
      return token;
      // console.log("user:", user);
      // console.log(user);
      // console.log(token);
    },
    session({ session, token, user }) {
      session.user.id = token.sub;

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
