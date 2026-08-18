"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Car, Phone, Heart, User } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "Brands", href: "/brands" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className={`navbar-container ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-content">
        {/* Logo */}
        <Link href="/" className="navbar-logo-link">
          <div className="navbar-logo-icon-wrapper">
            <Car className="navbar-logo-icon" />
          </div>
          <span className="navbar-logo-text">
            Luxury<span className="navbar-logo-text-red">Cars</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-nav">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="navbar-nav-item">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-desktop-actions">
          <button className="navbar-action-button">
            <Heart className="navbar-action-icon" />
          </button>
          <button className="navbar-action-button">
            <User className="navbar-action-icon" />
          </button>
          <Button className="navbar-contact-button">
            <Phone className="navbar-contact-icon" />
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="navbar-mobile-menu-button">
          {isOpen ? <X className="navbar-mobile-menu-icon" /> : <Menu className="navbar-mobile-menu-icon" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isOpen ? "navbar-mobile-menu-open" : "navbar-mobile-menu-closed"}`}>
        <div className="navbar-mobile-menu-content">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="navbar-mobile-nav-item" onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}
          <div className="navbar-mobile-contact-section">
            <Button className="navbar-mobile-contact-button">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
