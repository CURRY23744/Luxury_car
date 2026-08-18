"use client"

import { useState, useEffect } from "react"
import { AnimatedGauge } from "./animated-gauge"
import { StatusIndicator } from "./status-indicator"
import { GearDisplay } from "./gear-display"
import { ClimateControl } from "./climate-control"
import { MusicPlayer } from "./music-player"
import { NavigationDisplay } from "./navigation-display"
import type { CarData } from "@/types/car"
import { Lightbulb, ArrowLeft, ArrowRight, Car, FuelIcon as Engine, Power } from "lucide-react"

export function CarDashboard() {
  const [carData, setCarData] = useState<CarData>({
    speed: 0,
    rpm: 0,
    fuel: 75,
    temperature: 90,
    gear: "P",
    odometer: 45678,
    tripDistance: 234.5,
    engineStatus: false,
    headlights: false,
    turnSignals: { left: false, right: false },
    doors: { frontLeft: false, frontRight: false, rearLeft: false, rearRight: false },
    climate: { temperature: 22, fanSpeed: 2, ac: true },
    music: {
      isPlaying: false,
      track: "Midnight Drive",
      artist: "Synthwave Artist",
      volume: 65,
    },
    navigation: {
      destination: "Downtown Plaza",
      eta: "15:30",
      distance: "12.5 km",
    },
  })

  const [isStarted, setIsStarted] = useState(false)

  // Simulate car data changes
  useEffect(() => {
    if (!isStarted) return

    const interval = setInterval(() => {
      setCarData((prev) => ({
        ...prev,
        speed: Math.max(0, prev.speed + (Math.random() - 0.5) * 10),
        rpm: Math.max(0, Math.min(8000, prev.rpm + (Math.random() - 0.5) * 500)),
        fuel: Math.max(0, prev.fuel - 0.01),
        temperature: Math.max(60, Math.min(120, prev.temperature + (Math.random() - 0.5) * 2)),
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [isStarted])

  const handleEngineStart = () => {
    setIsStarted(!isStarted)
    setCarData((prev) => ({
      ...prev,
      engineStatus: !isStarted,
      gear: !isStarted ? "D" : "P",
      rpm: !isStarted ? 800 : 0,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Car className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-2xl font-bold">Tesla Model S</h1>
              <p className="text-gray-400">Advanced Dashboard</p>
            </div>
          </div>

          <button
            onClick={handleEngineStart}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              isStarted
                ? "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/50"
                : "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/50"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Power className="w-5 h-5" />
              <span>{isStarted ? "STOP ENGINE" : "START ENGINE"}</span>
            </div>
          </button>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Panel - Main Gauges */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <AnimatedGauge value={carData.speed} max={200} label="SPEED" unit="km/h" color="#00ff88" size={250} />
              <AnimatedGauge value={carData.rpm} max={8000} label="RPM" unit="x1000" color="#ff4444" size={250} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AnimatedGauge value={carData.fuel} max={100} label="FUEL" unit="%" color="#ffaa00" size={120} />
              <AnimatedGauge
                value={carData.temperature}
                max={120}
                min={60}
                label="TEMP"
                unit="°C"
                color="#00aaff"
                size={120}
              />
              <div className="col-span-2 flex justify-center">
                <GearDisplay gear={carData.gear} />
              </div>
            </div>
          </div>

          {/* Right Panel - Controls */}
          <div className="space-y-6">
            <ClimateControl
              temperature={carData.climate.temperature}
              fanSpeed={carData.climate.fanSpeed}
              ac={carData.climate.ac}
              onTemperatureChange={(temp) =>
                setCarData((prev) => ({ ...prev, climate: { ...prev.climate, temperature: temp } }))
              }
              onFanSpeedChange={(speed) =>
                setCarData((prev) => ({ ...prev, climate: { ...prev.climate, fanSpeed: speed } }))
              }
              onACToggle={() => setCarData((prev) => ({ ...prev, climate: { ...prev.climate, ac: !prev.climate.ac } }))}
            />

            <MusicPlayer
              isPlaying={carData.music.isPlaying}
              track={carData.music.track}
              artist={carData.music.artist}
              volume={carData.music.volume}
              onPlayPause={() =>
                setCarData((prev) => ({ ...prev, music: { ...prev.music, isPlaying: !prev.music.isPlaying } }))
              }
              onVolumeChange={(volume) => setCarData((prev) => ({ ...prev, music: { ...prev.music, volume } }))}
            />
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Status Indicators */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Vehicle Status</h3>
            <div className="grid grid-cols-2 gap-4">
              <StatusIndicator
                active={carData.engineStatus}
                label="Engine"
                color="#00ff88"
                icon={<Engine className="w-4 h-4" />}
                pulse={true}
              />
              <StatusIndicator
                active={carData.headlights}
                label="Headlights"
                color="#ffff00"
                icon={<Lightbulb className="w-4 h-4" />}
              />
              <StatusIndicator
                active={carData.turnSignals.left}
                label="Left Turn"
                color="#ff8800"
                icon={<ArrowLeft className="w-4 h-4" />}
                pulse={true}
              />
              <StatusIndicator
                active={carData.turnSignals.right}
                label="Right Turn"
                color="#ff8800"
                icon={<ArrowRight className="w-4 h-4" />}
                pulse={true}
              />
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Odometer:</span>
                <span className="text-white font-mono">{carData.odometer.toLocaleString()} km</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-400">Trip:</span>
                <span className="text-white font-mono">{carData.tripDistance} km</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <NavigationDisplay
            destination={carData.navigation.destination}
            eta={carData.navigation.eta}
            distance={carData.navigation.distance}
          />
        </div>
      </div>
    </div>
  )
}
