"use client"

import { HeroSection } from "@/components/hero-section"
import { FeaturedCars } from "@/components/featured-cars"
import { BrandsShowcase } from "@/components/brands-showcase"
import { StatsSection } from "@/components/stats-section"

export function Homepage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturedCars />
      <BrandsShowcase />
      <StatsSection />
    </div>
  )
}
