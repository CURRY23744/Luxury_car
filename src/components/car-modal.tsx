"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gauge, ShieldCheck, Sparkles, X, Zap } from "lucide-react"

import { Car } from "@/types/car"

interface CarModalProps {
  car: Car | null
  isOpen: boolean
  onClose: () => void
}

export function CarModal({ car, isOpen, onClose }: CarModalProps) {
  if (!isOpen || !car) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative w-full max-h-[92vh] max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0f16] shadow-2xl shadow-red-500/10">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-100 transition hover:bg-slate-800 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid max-h-[92vh] overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative h-[260px] overflow-hidden sm:h-[320px] lg:h-full lg:min-h-[420px]">
            <Image src={car.image} alt={`${car.brand} ${car.model}`} fill className="object-cover transition duration-700 hover:scale-105" />
          </div>

          <div className="max-h-[calc(92vh-260px)] overflow-y-auto p-4 sm:p-6 md:p-8 lg:max-h-[92vh]">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-red-400">{car.brand}</p>
                  <h3 className="mt-2 text-2xl font-black sm:text-3xl">{car.model}</h3>
                </div>
                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-300">{car.year}</span>
              </div>

              <div className="flex items-end justify-between gap-3">
                <div>
                  {car.originalPrice && <p className="text-sm text-slate-400 line-through">€{car.originalPrice.toLocaleString()}</p>}
                  <p className="text-2xl font-bold text-white sm:text-3xl">€{car.price.toLocaleString()}</p>
                </div>
                {car.discount && <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">-{car.discount}%</span>}
              </div>

              <p className="text-sm text-slate-300 sm:text-base">{car.description}</p>

              <div className="grid gap-3 sm:grid-cols-2">
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

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link href={`/catalog/${car.id}`} className="flex-1 rounded-full bg-red-600 px-5 py-3 text-center font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-red-500">
                  View details
                </Link>
                <Link href="/contact" className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
