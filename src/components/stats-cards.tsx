"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { DashboardStats } from "@/types"
import { ArrowUpIcon, ArrowDownIcon, DollarSign, Users, Package, ShoppingCart } from "lucide-react"

interface StatsCardsProps {
  stats: DashboardStats
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: "Revenus totaux",
      value: `${stats.totalRevenue.toLocaleString()} €`,
      change: stats.revenueGrowth,
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Utilisateurs",
      value: stats.totalUsers.toLocaleString(),
      change: stats.userGrowth,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Produits",
      value: stats.totalProducts.toString(),
      change: stats.productGrowth,
      icon: Package,
      color: "text-purple-600",
    },
    {
      title: "Commandes",
      value: stats.totalOrders.toString(),
      change: stats.orderGrowth,
      icon: ShoppingCart,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className={`h-4 w-4 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {card.change > 0 ? (
                <ArrowUpIcon className="mr-1 h-3 w-3 text-green-500" />
              ) : (
                <ArrowDownIcon className="mr-1 h-3 w-3 text-red-500" />
              )}
              <span className={card.change > 0 ? "text-green-500" : "text-red-500"}>{Math.abs(card.change)}%</span>
              <span className="ml-1">par rapport au mois dernier</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
