"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import type { ChartData } from "@/types"

interface RevenueChartProps {
  data: ChartData[]
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution des revenus</CardTitle>
        <CardDescription>Revenus mensuels sur les 6 derniers mois</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: {
              label: "Revenus",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                fill="var(--color-revenue)"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
