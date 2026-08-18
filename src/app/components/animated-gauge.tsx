"use client"

import { useEffect, useState } from "react"

type GaugeProps = {
  value: number
  max: number
  min?: number
  label: string
  unit: string
  color?: string
  size?: number
}

export function AnimatedGauge({ value, max, min = 0, label, unit, color = "#00ff88", size = 200 }: GaugeProps) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value)
    }, 100)
    return () => clearTimeout(timer)
  }, [value])

  const percentage = ((animatedValue - min) / (max - min)) * 100
  const angle = (percentage / 100) * 240 - 120 // 240 degrees arc, starting at -120

  const radius = size / 2 - 20
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = (240 / 360) * circumference
  const strokeDashoffset = strokeDasharray - (percentage / 100) * strokeDasharray

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
          style={{ filter: `drop-shadow(0 0 10px ${color})` }}
        >
          {/* Background arc */}
          <path
            d={`M ${size / 2 - radius * Math.cos((Math.PI * 2) / 3)} ${size / 2 - radius * Math.sin((Math.PI * 2) / 3)} 
                A ${radius} ${radius} 0 1 1 
                ${size / 2 - radius * Math.cos(Math.PI / 3)} ${size / 2 - radius * Math.sin(Math.PI / 3)}`}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Animated arc */}
          <path
            d={`M ${size / 2 - radius * Math.cos((Math.PI * 2) / 3)} ${size / 2 - radius * Math.sin((Math.PI * 2) / 3)} 
                A ${radius} ${radius} 0 1 1 
                ${size / 2 - radius * Math.cos(Math.PI / 3)} ${size / 2 - radius * Math.sin(Math.PI / 3)}`}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{ filter: `drop-shadow(0 0 5px ${color})` }}
          />

          {/* Needle */}
          <line
            x1={size / 2}
            y1={size / 2}
            x2={size / 2 + (radius - 30) * Math.cos((angle * Math.PI) / 180)}
            y2={size / 2 + (radius - 30) * Math.sin((angle * Math.PI) / 180)}
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
            style={{ filter: `drop-shadow(0 0 8px ${color})` }}
          />

          {/* Center dot */}
          <circle cx={size / 2} cy={size / 2} r="6" fill={color} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
        </svg>

        {/* Digital display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="text-4xl font-bold font-mono transition-all duration-300"
            style={{
              color: color,
              textShadow: `0 0 20px ${color}`,
              transform: `scale(${1 + percentage / 1000})`,
            }}
          >
            {Math.round(animatedValue)}
          </div>
          <div className="text-xs text-gray-400 mt-1">{unit}</div>
        </div>
      </div>

      <div className="text-sm text-gray-300 mt-2 font-semibold tracking-wider">{label}</div>
    </div>
  )
}
