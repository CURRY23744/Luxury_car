import Link from "next/link"
import { ArrowRight, ShieldCheck, Sparkles, Trophy } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { brands } from "@/lib/car-data"

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">
        <div className="mb-12 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-red-600/20 via-slate-900 to-slate-950 shadow-2xl">
          <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-400">Our marques</p>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Iconic <span className="text-red-500">automotive brands</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
                Discover the houses that define performance, innovation, and prestige in the luxury automotive world.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-red-500"
                >
                  View collection <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  About us
                </Link>
              </div>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900">
              <img
                src="/images/TeslaS.jpg"
                alt="Luxury performance vehicles"
                className="uniform-image h-full w-full opacity-90 transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <Trophy className="mb-4 h-8 w-8 text-red-400" />
            <h3 className="text-xl font-semibold">Heritage</h3>
            <p className="mt-2 text-sm text-slate-300">Decades of engineering excellence and motorsport legacy.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <Sparkles className="mb-4 h-8 w-8 text-red-400" />
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p className="mt-2 text-sm text-slate-300">Pushing design, efficiency, and electric performance forward.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-red-400" />
            <h3 className="text-xl font-semibold">Craftsmanship</h3>
            <p className="mt-2 text-sm text-slate-300">Every model stands for precision, luxury, and driver emotion.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {brands.map((brand) => (
            <article key={brand.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-lg transition duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-red-500/10">
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img src={brand.logo} alt={brand.name} className="uniform-image h-full w-full opacity-90 transition duration-700 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold text-white">{brand.name}</h2>
                  <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-300">
                    {brand.country}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{brand.description}</p>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Founded</span>
                  <span className="font-medium text-slate-200">{brand.founded}</span>
                </div>
                <Link href="/catalog" className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300">
                  Explore models <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
