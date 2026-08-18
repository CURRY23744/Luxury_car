"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "Ferrari F8 Tributo",
    subtitle: "Pure Italian Excellence",
    description: "Experience the pinnacle of automotive engineering with our exclusive Ferrari collection.",
    image: "/images/ferrari.jpg",
    price: "€280,000",
    cta: "Discover Now",
  },
  {
    id: 2,
    title: "Lamborghini Huracán EVO",
    subtitle: "Unleash Your Passion",
    description: "Feel the power of the legendary V10 engine in this masterpiece of Italian design.",
    image: "/images/Lamborghini EVO.jpg",
    price: "€250,000",
    cta: "Explore Collection",
  },
  {
    id: 3,
    title: "Tesla Model S Plaid",
    subtitle: "The Future is Electric",
    description: "Revolutionary performance meets sustainable luxury in the world's fastest sedan.",
    image: "/images/TeslaS.jpg",
    price: "€135,000",
    cta: "Test Drive",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="hero-section-container">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div key={slide.id} className={`hero-background-slide ${index === currentSlide ? "active" : "inactive"}`}>
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="hero-image"
              priority={index === 0}
            />
            <div className="hero-overlay" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="hero-content-wrapper">
        <div className="container mx-auto px-6">
          <div className="hero-content-inner">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`hero-slide-item ${index === currentSlide ? "active" : "inactive"}`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <div className="hero-subtitle-wrapper">
                  <span className="hero-subtitle-badge">{slide.subtitle}</span>
                </div>

                <h1 className="hero-title">
                  <span className="hero-title-gradient">{slide.title.split(" ")[0]}</span>
                  <br />
                  <span className="hero-title-secondary">{slide.title.split(" ").slice(1).join(" ")}</span>
                </h1>

                <p className="hero-description">{slide.description}</p>

                <div className="hero-cta-group">
                  <div className="hero-price">{slide.price}</div>
                  <Link href="/catalog">
                    <Button size="lg" className="hero-cta-button">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="hero-navigation-controls">
        <div className="hero-navigation-inner">
          <button onClick={prevSlide} className="hero-nav-button">
            <ChevronLeft className="hero-nav-icon" />
          </button>

          <div className="hero-pagination-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`hero-pagination-dot ${index === currentSlide ? "active" : ""}`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="hero-nav-button">
            <ChevronRight className="hero-nav-icon" />
          </button>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`hero-autoplay-button ${isAutoPlaying ? "active" : ""}`}
          >
            <Play className={`hero-nav-icon ${isAutoPlaying ? "hero-autoplay-icon active" : ""}`} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-indicator-inner">
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </div>
  )
}
