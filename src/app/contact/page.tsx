import { Mail, MapPin, Phone, Send } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-400">Contact</p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Speak with a <span className="text-red-500">luxury advisor</span>
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950">
              <img src="/images/Lamborghini%20EVO.jpg" alt="Luxury supercar" className="uniform-image h-64 w-full transition duration-700 hover:scale-105" />
            </div>

            <div className="space-y-4 text-slate-200">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span>+33 1 84 00 55 24</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span>concierge@luxurycars.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>12 Avenue de la Liberté, Paris</span>
              </div>
            </div>
          </div>

          <form className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl transition duration-300 hover:-translate-y-0.5 hover:shadow-red-500/10">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">First name</label>
                <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-red-500" placeholder="John" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Last name</label>
                <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-red-500" placeholder="Smith" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-red-500" placeholder="john@email.com" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-slate-300">Message</label>
                <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-red-500" placeholder="Tell us what kind of vehicle you are looking for..." />
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-500">
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
