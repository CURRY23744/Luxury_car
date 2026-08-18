"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Homepage } from "@/pages/homepage"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  )
}
