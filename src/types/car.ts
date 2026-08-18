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
