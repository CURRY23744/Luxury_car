"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Gauge, ShieldCheck, Sparkles, X, Zap } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cars } from "@/lib/car-data"

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const car = cars.find((item) => item.id === id)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!car) {
    return (
      <div className="min-h-screen bg-[#05070b] px-6 py-24 text-white">
        <Navbar />
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-900/80 p-10 text-center">
          <h1 className="text-3xl font-bold">Vehicle not found</h1>
          <p className="mt-3 text-slate-300">This model is not available in the current collection.</p>
          <Link href="/catalog" className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-500">
            <ArrowLeft className="h-4 w-4" /> Back to catalog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28">
        <Link href="/catalog" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-red-400">
          <ArrowLeft className="h-4 w-4" /> Return to catalog
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <button
              type="button"
              onClick={() => setSelectedImage(car.image)}
              className="block w-full overflow-hidden rounded-[30px] border border-white/10 bg-slate-900 shadow-2xl transition duration-500 hover:-translate-y-1 hover:shadow-red-500/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[30px]">
                <Image src={car.image} alt={`${car.brand} ${car.model}`} fill className="object-cover transition duration-700 hover:scale-105" />
              </div>
            </button>

            <div className="grid gap-4 sm:grid-cols-3">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-500 hover:-translate-y-1 hover:border-red-500/40"
                >
                  <Image src={image} alt={`${car.model} view ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">{car.brand}</p>
                <h1 className="mt-2 text-4xl font-black">{car.model}</h1>
              </div>
              <div className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-300">
                {car.year}
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                {car.originalPrice && <p className="text-sm text-slate-400 line-through">€{car.originalPrice.toLocaleString()}</p>}
                <p className="text-3xl font-bold text-white">€{car.price.toLocaleString()}</p>
              </div>
              {car.discount && <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">-{car.discount}%</span>}
            </div>

            <p className="mt-6 text-slate-300">{car.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <Gauge className="mb-2 h-5 w-5 text-red-400" />
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Power</p>
                <p className="mt-2 font-semibold">{car.specs.power}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <Zap className="mb-2 h-5 w-5 text-red-400" />
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">0-100</p>
                <p className="mt-2 font-semibold">{car.specs.acceleration}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <Sparkles className="mb-2 h-5 w-5 text-red-400" />
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Top speed</p>
                <p className="mt-2 font-semibold">{car.specs.topSpeed}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <ShieldCheck className="mb-2 h-5 w-5 text-red-400" />
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Transmission</p>
                <p className="mt-2 font-semibold">{car.specs.transmission}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="flex-1 rounded-full bg-red-600 px-5 py-3 text-center font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-red-500">
                Book a test drive
              </Link>
              <Link href="/catalog" className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
            <h2 className="mb-5 text-2xl font-bold">Vehicle highlights</h2>
            <ul className="space-y-3 text-slate-300">
              {car.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
            <h2 className="mb-5 text-2xl font-bold">Technical specification</h2>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-2"><span>Engine</span><span className="font-medium text-white">{car.specs.engine}</span></div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2"><span>Fuel type</span><span className="font-medium text-white">{car.specs.fuelType}</span></div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2"><span>Drivetrain</span><span className="font-medium text-white">{car.specs.drivetrain}</span></div>
              <div className="flex items-center justify-between"><span>Category</span><span className="font-medium text-white capitalize">{car.category}</span></div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-white transition hover:bg-slate-800"
              aria-label="Close image"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative h-[60vh] w-full">
              <Image src={selectedImage} alt="Vehicle preview" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
