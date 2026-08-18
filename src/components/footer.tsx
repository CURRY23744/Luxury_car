import Link from "next/link"
import { ArrowUpRight, CarFront, Mail, MapPin, Phone } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Brands", href: "/brands" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070b] text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-2xl font-bold text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/30">
                <CarFront className="h-5 w-5" />
              </span>
              Luxury<span className="text-red-500">Cars</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              Premium automotive experiences for clients who expect performance, elegance, and precision in every detail.
            </p>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Navigation</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-red-400"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Contact</p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span>+33 1 84 00 55 24</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span>concierge@luxurycars.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-red-400" />
                <span>12 Avenue de la Liberté, Paris</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LuxuryCars. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="transition hover:text-red-400">About</Link>
            <Link href="/contact" className="transition hover:text-red-400">Contact</Link>
            <Link href="/catalog" className="transition hover:text-red-400">Catalog</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
