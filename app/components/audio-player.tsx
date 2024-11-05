"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  isUnlocked: boolean;
  audioUrl: string;
}

export function AudioPlayer({ isUnlocked, audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current || !isUnlocked) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-indigo-950/50 p-4 rounded-lg">
      <audio ref={audioRef} src={audioUrl} />
      <button
        onClick={togglePlay}
        disabled={!isUnlocked}
        className={`w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 ${
          isUnlocked ? "bg-indigo-500 hover:bg-indigo-600" : "bg-gray-600"
        } transition-colors disabled:cursor-not-allowed`}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
        <span>{isUnlocked ? (isPlaying ? "Pause" : "Play") : "Locked"}</span>
      </button>
    </div>
  );
}