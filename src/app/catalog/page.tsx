"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CatalogPage } from "@/views/catalog-page"

export default function Catalog() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <CatalogPage />
      <Footer />
    </div>
  )
}
