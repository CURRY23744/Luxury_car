"use client"

import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { UsersChart } from "@/components/users-chart"
import { CategoryChart } from "@/components/category-chart"
import { QuickActions } from "@/components/quick-actions"
import { RecentActivity } from "@/components/recent-activity"
import { mockStats, mockChartData, mockCategoryData } from "@/lib/mock-data"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <BreadcrumbNav />

      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Vue d'ensemble de votre plateforme</p>
      </div>

      <StatsCards stats={mockStats} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <RevenueChart data={mockChartData} />
          <UsersChart data={mockChartData} />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>

      <CategoryChart data={mockCategoryData} />
    </div>
  )
}
