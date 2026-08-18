"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const pathNames: Record<string, string> = {
  "/": "Dashboard",
  "/users": "Utilisateurs",
  "/products": "Produits",
  "/stats": "Statistiques",
  "/settings": "Paramètres",
}
type BreadcrumbItem = {
  title: string
  href: string
  active?: boolean
}

type BreadcrumbNavProps = {
  items: BreadcrumbItem[]
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const pathname = usePathname()
  const pathSegments = pathname?.split("/").filter(Boolean) ?? []

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
      <Link href="/" className="flex items-center hover:text-foreground">
        <Home className="h-4 w-4" />
      </Link>
      {pathSegments.map((segment, index) => {
        const path = "/" + pathSegments.slice(0, index + 1).join("/")
        const isLast = index === pathSegments.length - 1

        return (
          <div key={path} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {isLast ? (
              <span className="font-medium text-foreground">{pathNames[path] || segment}</span>
            ) : (
              <Link href={path} className="hover:text-foreground">
                {pathNames[path] || segment}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
