'use client'

import { useSession } from 'next-auth/react'
import AlbumArt from '@/components/AlbumArt'
import SignInButton from '@/components/SignInButton'
import AudioPlayer from '@/components/AudioPlayer'

export default function Home() {
  const { data: session, status } = useSession()
  const isLoading = status === "loading"

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-md">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">World Music App</h1>
            <p className="text-indigo-400">Your gateway to exclusive music</p>
          </div>

          <AlbumArt
            imageUrl="https://timncox.github.io/aj.jpeg"
            title="My People Have Deep Roots"
            artist="Arushi Jain"
          />

          <AudioPlayer
            isUnlocked={!!session}
            audioUrl="https://timncox.github.io/ajroots.m4a"
          />

          {!session && !isLoading && (
            <div className="mt-8">
              <p className="text-center text-gray-300 mb-4">
                Sign in with World ID to unlock exclusive content
              </p>
              <SignInButton />
            </div>
          )}

          {isLoading && (
            <div className="text-center text-indigo-400">
              Loading...
            </div>
          )}

          {session && (
            <p className="text-center text-indigo-400">
              ✨ Welcome! Enjoy your music.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}