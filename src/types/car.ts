export interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: "luxury" | "sport" | "suv" | "electric" | "classic"
  specs: {
    engine: string
    power: string
    acceleration: string
    topSpeed: string
    fuelType: string
    transmission: string
    drivetrain: string
  }
  features: string[]
  description: string
  isNew: boolean
  isFeatured: boolean
  discount?: number
}

export interface Brand {
  id: string
  name: string
  logo: string
  description: string
  founded: number
  country: string
}

export interface GaugeProps {
  value: number
  max: number
  min?: number
  label: string
  unit: string
  color?: string
  size?: number
}

export interface CarData {
  speed: number
  rpm: number
  fuel: number
  temperature: number
  gear: string
  odometer: number
  tripDistance: number
  engineStatus: boolean
  headlights: boolean
  turnSignals: {
    left: boolean
    right: boolean
  }
  doors: {
    frontLeft: boolean
    frontRight: boolean
    rearLeft: boolean
    rearRight: boolean
  }
  climate: {
    temperature: number
    fanSpeed: number
    ac: boolean
  }
  music: {
    isPlaying: boolean
    track: string
    artist: string
    volume: number
  }
  navigation: {
    destination: string
    eta: string
    distance: string
  }
}
