'use client'

import { signIn } from 'next-auth/react'
import { LogIn } from 'lucide-react'

export default function SignInButton() {
  const handleSignIn = () => {
    signIn('worldcoin', { 
      callbackUrl: '/',
      redirect: true
    }).catch(console.error)
  }

  return (
    <button
      onClick={handleSignIn}
      className="w-full py-4 px-6 rounded-lg flex items-center justify-center space-x-2 text-lg font-semibold bg-indigo-500 hover:bg-indigo-600 transition-all"
    >
      <LogIn className="w-6 h-6" />
      <span>Sign in with World ID</span>
    </button>
  )
}