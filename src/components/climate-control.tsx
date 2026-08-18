"use client"
import { Minus, Plus, Wind, Snowflake } from "lucide-react"

interface ClimateControlProps {
  temperature: number
  fanSpeed: number
  ac: boolean
  onTemperatureChange: (temp: number) => void
  onFanSpeedChange: (speed: number) => void
  onACToggle: () => void
}

export function ClimateControl({
  temperature,
  fanSpeed,
  ac,
  onTemperatureChange,
  onFanSpeedChange,
  onACToggle,
}: ClimateControlProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">Climate</h3>

        {/* Temperature Control */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={() => onTemperatureChange(Math.max(16, temperature - 1))}
            className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 transition-all duration-200 border border-blue-500/30"
          >
            <Minus className="w-4 h-4 text-blue-400" />
          </button>

          <div className="text-center">
            <div
              className="text-3xl font-bold font-mono"
              style={{
                color: "#00aaff",
                textShadow: "0 0 20px #00aaff",
              }}
            >
              {temperature}°
            </div>
          </div>

          <button
            onClick={() => onTemperatureChange(Math.min(30, temperature + 1))}
            className="p-2 rounded-full bg-red-600/20 hover:bg-red-600/40 transition-all duration-200 border border-red-500/30"
          >
            <Plus className="w-4 h-4 text-red-400" />
          </button>
        </div>

        {/* Fan Speed */}
        <div className="mb-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Wind className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Fan Speed</span>
          </div>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((speed) => (
              <button
                key={speed}
                onClick={() => onFanSpeedChange(speed)}
                className={`w-6 h-6 rounded transition-all duration-200 ${
                  speed <= fanSpeed ? "bg-cyan-500 shadow-lg shadow-cyan-500/50" : "bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* AC Toggle */}
        <button
          onClick={onACToggle}
          className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            ac
              ? "bg-cyan-600/30 border-cyan-500 text-cyan-400"
              : "bg-gray-700/50 border-gray-600 text-gray-400 hover:bg-gray-600/50"
          } border`}
          style={ac ? { boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" } : {}}
        >
          <Snowflake className="w-4 h-4" />
          <span className="text-sm font-medium">A/C</span>
        </button>
      </div>
    </div>
  )
}
