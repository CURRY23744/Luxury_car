"use client"

import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

interface MusicPlayerProps {
  isPlaying: boolean
  track: string
  artist: string
  volume: number
  onPlayPause: () => void
  onVolumeChange: (volume: number) => void
}

export function MusicPlayer({ isPlaying, track, artist, volume, onPlayPause, onVolumeChange }: MusicPlayerProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-4">Now Playing</h3>

        {/* Album Art Placeholder */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
          <div className="w-16 h-16 rounded bg-black/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Track Info */}
        <div className="mb-4">
          <div className="text-white font-medium truncate">{track}</div>
          <div className="text-gray-400 text-sm truncate">{artist}</div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors">
            <SkipBack className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={onPlayPause}
            className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            style={{ boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
          >
            {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
          </button>

          <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors">
            <SkipForward className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center space-x-2">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => onVolumeChange(Number(e.target.value))}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
          <span className="text-xs text-gray-400 w-8">{volume}</span>
        </div>
      </div>
    </div>
  )
}
