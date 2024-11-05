import React from 'react'

interface AlbumArtProps {
  imageUrl: string
  title: string
  artist: string
}

export default function AlbumArt({ imageUrl, title, artist }: AlbumArtProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-square rounded-lg overflow-hidden shadow-2xl border-2 border-indigo-400">
        <img
          src={imageUrl}
          alt={`${title} by ${artist}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-indigo-400">{artist}</p>
      </div>
    </div>
  )
}