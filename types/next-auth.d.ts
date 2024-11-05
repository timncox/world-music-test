import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      worldcoinId?: string;
    } & DefaultSession["user"];
  }
}