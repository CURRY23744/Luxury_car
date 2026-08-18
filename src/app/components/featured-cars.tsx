"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cars } from "@/lib/car-data"
import { Heart, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function FeaturedCars() {
  const featuredCars = cars.filter((car) => car.isFeatured)

  return (
    <section className="featured-section">
      <div className="container mx-auto px-6">
        <div className="featured-header">
          <h2 className="featured-title">
            Featured <span className="featured-title-red">Collection</span>
          </h2>
          <p className="featured-description">
            Discover our handpicked selection of the world&apos;s most extraordinary vehicles
          </p>
        </div>

        <div className="featured-grid">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="group featured-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image Container */}
              <div className="featured-image-container">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="featured-image"
                />

                {/* Overlay */}
                <div className="featured-image-overlay" />

                {/* Badges */}
                <div className="featured-badges">
                  {car.isNew && <Badge className="featured-badge-new">New</Badge>}
                  {car.discount && <Badge className="featured-badge-discount">-{car.discount}%</Badge>}
                </div>

                {/* Action Buttons */}
                <div className="featured-action-buttons">
                  <button className="featured-action-button">
                    <Heart className="featured-action-icon" />
                  </button>
                  <Link href={`/catalog/${car.id}`}>
                    <button className="featured-action-button">
                      <Eye className="featured-action-icon" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="featured-card-content">
                <div className="featured-card-header">
                  <div>
                    <h3 className="featured-car-title">
                      {car.brand} {car.model}
                    </h3>
                    <p className="featured-car-year">{car.year}</p>
                  </div>
                  <div className="text-right">
                    {car.originalPrice && (
                      <p className="featured-price-original">€{car.originalPrice.toLocaleString()}</p>
                    )}
                    <p className="featured-price">€{car.price.toLocaleString()}</p>
                  </div>
                </div>

                <p className="featured-description-text">{car.description}</p>

                {/* Specs Preview */}
                <div className="featured-specs-grid">
                  <div className="featured-spec-item">
                    <p className="featured-spec-value">{car.specs.power}</p>
                    <p className="featured-spec-label">Power</p>
                  </div>
                  <div className="featured-spec-item">
                    <p className="featured-spec-value">{car.specs.acceleration}</p>
                    <p className="featured-spec-label">0-100 km/h</p>
                  </div>
                  <div className="featured-spec-item">
                    <p className="featured-spec-value">{car.specs.topSpeed}</p>
                    <p className="featured-spec-label">Top Speed</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/catalog/${car.id}`} className="featured-cta-link">
                  <Button className="group featured-cta-button">
                    View Details
                    <ArrowRight className="featured-cta-icon" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-view-all-section">
          <Link href="/catalog">
            <Button size="lg" variant="outline" className="featured-view-all-button bg-transparent">
              View All Cars
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
