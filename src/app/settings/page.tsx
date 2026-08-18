"use client"

import { useAuth } from "@/contexts/auth-context"
import { LoginForm } from "@/components/login-form"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Notifications } from "@/components/notifications"
import { Bell, Lock, Palette, UserCircle } from "lucide-react"

const settingsSections = [
  {
    icon: UserCircle,
    title: "Profile",
    description: "Manage personal information and account details.",
  },
  {
    icon: Palette,
    title: "Theme",
    description: "Adjust the dashboard appearance and color theme.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Set your communication preferences and alerts.",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Update passwords, MFA, and sign-in settings.",
  },
]

export default function SettingsPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-24 w-24 animate-spin rounded-full border-b-2 border-red-500" />
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">Settings</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight">Preferences and account</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {settingsSections.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="mt-2 text-sm text-slate-300">{description}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-xl">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950">
                  <img
                    src="/images/BMW.jpg"
                    alt="Luxury dashboard preview"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-red-400">Account overview</p>
                    <h2 className="mt-2 text-2xl font-bold">{user?.name}</h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">Role</p>
                      <p className="mt-2 text-lg font-semibold">Administrator</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">Workspace</p>
                      <p className="mt-2 text-lg font-semibold">LuxuryCars</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">Language</p>
                      <p className="mt-2 text-lg font-semibold">English</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">Status</p>
                      <p className="mt-2 text-lg font-semibold text-emerald-400">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Notifications />
    </div>
  )
}
