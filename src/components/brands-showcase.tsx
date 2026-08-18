"use client"

import { brands } from "@/lib/car-data"
import Image from "next/image"
import Link from "next/link"

export function BrandsShowcase() {

  return (
    <section className="brands-section">
      <div className="container mx-auto px-6">
        <div className="brands-header">
          <h2 className="brands-title">
            Luxury <span className="brands-title-red">Brands</span>
          </h2>
          <p className="brands-description">
            Explore vehicles from the world&apos;s most prestigious automotive manufacturers
          </p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <Link key={brand.id} href={`/catalog?brand=${brand.id}`} className="brand-card-link">
              <div
                className="group brand-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Logo */}
                <div className="brand-logo-container">
                  <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="brand-logo" />
                </div>

                {/* Brand Name */}
                <h3 className="brand-name">{brand.name}</h3>

                {/* Country */}
                <p className="brand-country">{brand.country}</p>

                {/* Hover Effect */}
                <div className="brand-hover-overlay" />

                {/* Glow Effect */}
                <div className="brand-glow-effect" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
