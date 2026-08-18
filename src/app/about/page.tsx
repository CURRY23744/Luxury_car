import Link from "next/link"
import { ArrowRight, Gauge, MapPinned, Shield, Star } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-400">About us</p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Crafted for drivers who demand <span className="text-red-500">more</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
              We curate premium automotive experiences, blending design, technology, and emotion into every vehicle we present.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-red-500"
              >
                Discover inventory <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact a specialist
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900 shadow-2xl">
            <img src="/images/ferrari.jpg" alt="Luxury Ferrari" className="uniform-image h-full w-full transition duration-700 hover:scale-105" />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Gauge, title: "Performance", text: "Every model selected for unmatched power and precision." },
            { icon: Shield, title: "Trust", text: "Transparent service and premium care for every client." },
            { icon: MapPinned, title: "Global", text: "An international network for premium vehicle sourcing." },
            { icon: Star, title: "Experience", text: "A luxury service built around the driver’s lifestyle." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40">
              <Icon className="mb-4 h-8 w-8 text-red-400" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">Our mission</p>
            <h2 className="text-3xl font-bold">Elevating the way luxury cars are discovered</h2>
            <p className="mt-4 text-slate-300">
              From iconic grand tourers to electric performance machines, we help enthusiasts and business clients find the right vehicle for their ambitions.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900">
            <img src="/images/Porsche911turbo.jpg" alt="Porsche 911" className="uniform-image h-full w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
