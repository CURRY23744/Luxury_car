import Image from "next/image"
import { brands } from "@/lib/car-data"
import type { Brand } from "@/types/car"

export function BrandGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {brands.map((brand: Brand) => (
        <div key={brand.id} className="flex flex-col items-center">
          <div className="brand-card">
            <div className="brand-logo-container">
              <Image src={brand.logo} alt={brand.name} width={220} height={140} className="brand-logo" />
            </div>
          </div>

          <div className="mt-3 text-center">
            <div className="brand-name">{brand.name}</div>
            <div className="brand-country">{brand.country}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
