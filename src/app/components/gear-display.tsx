"use client"

interface GearDisplayProps {
  gear: string
  className?: string
}

export function GearDisplay({ gear, className = "" }: GearDisplayProps) {
  const getGearColor = (currentGear: string) => {
    switch (currentGear) {
      case "P":
        return "#ff4444"
      case "R":
        return "#ff8800"
      case "N":
        return "#ffff00"
      case "D":
        return "#00ff88"
      case "S":
        return "#ff00ff"
      default:
        return "#00aaff"
    }
  }

  const color = getGearColor(gear)

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-xs text-gray-400 mb-2">GEAR</div>
      <div
        className="text-6xl font-bold font-mono transition-all duration-300 transform hover:scale-110"
        style={{
          color: color,
          textShadow: `0 0 30px ${color}`,
          filter: `drop-shadow(0 0 20px ${color})`,
        }}
      >
        {gear}
      </div>
      <div className="flex space-x-1 mt-2">
        {["P", "R", "N", "D", "S"].map((g) => (
          <div
            key={g}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${g === gear ? "opacity-100" : "opacity-20"}`}
            style={{
              backgroundColor: g === gear ? color : "#374151",
              boxShadow: g === gear ? `0 0 8px ${color}` : "none",
            }}
          />
        ))}
      </div>
    </div>
  )
}
