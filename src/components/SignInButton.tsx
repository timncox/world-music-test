import React from 'react'
import { LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function SignInButton() {
  const handleSignIn = async () => {
    try {
      await signIn('worldcoin', { 
        callbackUrl: window.location.origin,
        redirect: true
      })
    } catch (error) {
      console.error('Sign in error:', error)
    }
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