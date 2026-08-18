"use client"

import { useState } from "react"
import { cars, brands } from "@/lib/car-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Grid, List, Heart, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CarModal } from "@/components/car-modal"

export function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedCar, setSelectedCar] = useState<(typeof cars)[number] | null>(null)

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = selectedBrand === "all" || car.brand.toLowerCase() === selectedBrand.toLowerCase()
    const matchesCategory = selectedCategory === "all" || car.category === selectedCategory
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "under-100k" && car.price < 100000) ||
      (priceRange === "100k-200k" && car.price >= 100000 && car.price < 200000) ||
      (priceRange === "200k-300k" && car.price >= 200000 && car.price < 300000) ||
      (priceRange === "over-300k" && car.price >= 300000)

    return matchesSearch && matchesBrand && matchesCategory && matchesPrice
  })

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "year":
        return b.year - a.year
      case "brand":
        return a.brand.localeCompare(b.brand)
      default:
        return b.isFeatured ? 1 : -1
    }
  })

  return (
    <div className="catalog-page-container">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="catalog-header">
          <h1 className="catalog-title">
            Car <span className="catalog-title-red">Catalog</span>
          </h1>
          <p className="catalog-description">Discover our complete collection of luxury and performance vehicles</p>
        </div>

        {/* Filters */}
        <div className="catalog-filters-container">
          <div className="catalog-filters-grid">
            {/* Search */}
            <div className="catalog-search-wrapper">
              <Search className="catalog-search-icon" />
              <Input
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="catalog-search-input"
              />
            </div>

            {/* Brand Filter */}
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="catalog-filter-select">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand.id} value={brand.name}>
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="catalog-filter-select">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="sport">Sport</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="catalog-filter-select">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-100k">Under €100k</SelectItem>
                <SelectItem value="100k-200k">€100k - €200k</SelectItem>
                <SelectItem value="200k-300k">€200k - €300k</SelectItem>
                <SelectItem value="over-300k">Over €300k</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="catalog-filter-select">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="year">Newest First</SelectItem>
                <SelectItem value="brand">Brand A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* View Mode & Results */}
          <div className="catalog-view-mode-section">
            <p className="catalog-results-text">
              Showing {sortedCars.length} of {cars.length} cars
            </p>
            <div className="catalog-view-mode-buttons">
              <button
                onClick={() => setViewMode("grid")}
                className={`catalog-view-mode-button ${viewMode === "grid" ? "active" : "inactive"}`}
              >
                <Grid className="catalog-view-mode-icon" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`catalog-view-mode-button ${viewMode === "list" ? "active" : "inactive"}`}
              >
                <List className="catalog-view-mode-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className={`catalog-cars-grid ${viewMode === "grid" ? "grid-view" : "list-view"}`}>
          {sortedCars.map((car, index) => (
            <div key={car.id} className="group catalog-car-card" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Image */}
              <div className="catalog-car-image-container cursor-pointer" onClick={() => setSelectedCar(car)}>
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="catalog-car-image"
                />
                <div className="catalog-car-image-overlay" />

                {/* Badges */}
                <div className="catalog-car-badges">
                  {car.isNew && <Badge className="catalog-car-badge-new">New</Badge>}
                  {car.discount && <Badge className="catalog-car-badge-discount">-{car.discount}%</Badge>}
                </div>

                {/* Actions */}
                <div className="catalog-car-actions">
                  <button className="catalog-car-action-button">
                    <Heart className="catalog-car-action-icon" />
                  </button>
                  <Link href={`/catalog/${car.id}`}>
                    <button className="catalog-car-action-button">
                      <Eye className="catalog-car-action-icon" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="catalog-car-content">
                <div className="catalog-car-header">
                  <div>
                    <h3 className="catalog-car-title">
                      {car.brand} {car.model}
                    </h3>
                    <p className="catalog-car-year">{car.year}</p>
                  </div>
                  <div className="text-right">
                    {car.originalPrice && (
                      <p className="catalog-car-price-original">€{car.originalPrice.toLocaleString()}</p>
                    )}
                    <p className="catalog-car-price">€{car.price.toLocaleString()}</p>
                  </div>
                </div>

                {/* Specs */}
                <div className="catalog-car-specs-grid">
                  <div className="catalog-car-spec-item">
                    <p className="catalog-car-spec-value">{car.specs.power}</p>
                    <p className="catalog-car-spec-label">Power</p>
                  </div>
                  <div className="catalog-car-spec-item">
                    <p className="catalog-car-spec-value">{car.specs.acceleration}</p>
                    <p className="catalog-car-spec-label">0-100</p>
                  </div>
                  <div className="catalog-car-spec-item">
                    <p className="catalog-car-spec-value">{car.specs.topSpeed}</p>
                    <p className="catalog-car-spec-label">Top Speed</p>
                  </div>
                </div>

                <Link href={`/catalog/${car.id}`}>
                  <Button className="catalog-car-detail-button">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedCars.length === 0 && (
          <div className="catalog-no-results">
            <div className="catalog-no-results-icon">🚗</div>
            <h3 className="catalog-no-results-title">No cars found</h3>
            <p className="catalog-no-results-description">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>

      <CarModal car={selectedCar} isOpen={Boolean(selectedCar)} onClose={() => setSelectedCar(null)} />
    </div>
  )
}

export default function CatalogPageRoute() {
  return <CatalogPage />
}
