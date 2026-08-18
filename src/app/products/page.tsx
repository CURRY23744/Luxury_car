"use client"

import { useAuth } from "@/contexts/auth-context"
import { LoginForm } from "@/components/login-form"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ProductsPage } from "@/pages/products-page"
import { Notifications } from "@/components/notifications"

export default function Products() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <ProductsPage />
        </main>
      </div>
      <Notifications />
    </div>
  )
}
