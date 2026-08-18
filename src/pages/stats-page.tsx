"use client"

import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { UsersChart } from "@/components/users-chart"
import { CategoryChart } from "@/components/category-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockStats, mockChartData, mockCategoryData } from "@/lib/mock-data"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export function StatsPage() {
  return (
    <div className="space-y-6">
      <BreadcrumbNav />

      <div>
        <h2 className="text-3xl font-bold tracking-tight">Statistiques</h2>
        <p className="text-muted-foreground">Analyses détaillées de votre plateforme</p>
      </div>

      <StatsCards stats={mockStats} />

      <div className="grid gap-6 md:grid-cols-2">
        <RevenueChart data={mockChartData} />
        <UsersChart data={mockChartData} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CategoryChart data={mockCategoryData} />
        <Card>
          <CardHeader>
            <CardTitle>Métriques avancées</CardTitle>
            <CardDescription>Indicateurs de performance clés</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Taux de conversion</span>
              <span className="text-sm text-muted-foreground">3.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Panier moyen</span>
              <span className="text-sm text-muted-foreground">275 €</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Taux de rétention</span>
              <span className="text-sm text-muted-foreground">68%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Satisfaction client</span>
              <span className="text-sm text-muted-foreground">4.6/5</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
