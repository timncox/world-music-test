"use client";

import { signIn } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      onClick={() => signIn("worldcoin")}
      className="w-full py-4 px-6 rounded-lg flex items-center justify-center space-x-2 text-lg font-semibold bg-indigo-500 hover:bg-indigo-600 transition-all"
    >
      Sign in with World ID
    </button>
  );
}