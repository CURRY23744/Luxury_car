"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart3, ChevronLeft, Home, Package, Settings, Users, Menu } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Utilisateurs", href: "/users", icon: Users },
  { name: "Produits", href: "/products", icon: Package },
  { name: "Statistiques", href: "/stats", icon: BarChart3 },
  { name: "Paramètres", href: "/settings", icon: Settings },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className,
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {!collapsed && <h2 className="text-lg font-semibold">Admin Panel</h2>}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8">
          {collapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", collapsed && "px-2")}
                >
                  <item.icon className="h-4 w-4" />
                  {!collapsed && <span className="ml-2">{item.name}</span>}
                </Button>
              </Link>
            )
          })}
        </nav>
      </ScrollArea>
    </div>
  )
}
