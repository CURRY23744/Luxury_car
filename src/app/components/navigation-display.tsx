"use client"

import { Navigation, MapPin, Clock } from "lucide-react"

interface NavigationDisplayProps {
  destination: string
  eta: string
  distance: string
}

export function NavigationDisplay({ destination, eta, distance }: NavigationDisplayProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
      <div className="flex items-center space-x-2 mb-4">
        <Navigation className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Navigation</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
          <div>
            <div className="text-white font-medium">{destination}</div>
            <div className="text-gray-400 text-sm">Destination</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
          <div>
            <div className="text-white font-medium">{eta}</div>
            <div className="text-gray-400 text-sm">Estimated arrival</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded-full bg-blue-400 flex-shrink-0" />
          <div>
            <div className="text-white font-medium">{distance}</div>
            <div className="text-gray-400 text-sm">Distance remaining</div>
          </div>
        </div>
      </div>

      {/* Mini Map Placeholder */}
      <div className="mt-4 h-24 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-600">
        <div className="text-gray-500 text-sm">Map View</div>
      </div>
    </div>
  )
}
