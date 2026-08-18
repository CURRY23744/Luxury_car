"use client"

import type React from "react"

interface StatusIndicatorProps {
  active: boolean
  label: string
  color?: string
  icon?: React.ReactNode
  pulse?: boolean
}

export function StatusIndicator({ active, label, color = "#00ff88", icon, pulse = false }: StatusIndicatorProps) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          active ? "opacity-100" : "opacity-30"
        } ${pulse && active ? "animate-pulse" : ""}`}
        style={{
          backgroundColor: active ? color : "#374151",
          boxShadow: active ? `0 0 10px ${color}` : "none",
        }}
      />
      {icon && (
        <div
          className={`transition-all duration-300 ${active ? "opacity-100" : "opacity-30"}`}
          style={{ color: active ? color : "#6b7280" }}
        >
          {icon}
        </div>
      )}
      <span className={`text-sm transition-all duration-300 ${active ? "text-white" : "text-gray-500"}`}>{label}</span>
    </div>
  )
}
