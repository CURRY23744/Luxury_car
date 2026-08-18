import React from "react"
import { brands } from "@/data/car-data"
import type { Brand } from "@/types/car"

export function BrandGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {brands.map((brand: Brand) => (
        <div key={brand.id} className="flex flex-col items-center">
          {/* Bloc principal de la carte */}
          <div className="brand-card">
            <div className="brand-logo-container">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          </div>

          {/* Infos en dehors de .brand-card */}
          <div className="mt-3 text-center">
            <div className="brand-name">{brand.name}</div>
            <div className="brand-country">{brand.country}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
