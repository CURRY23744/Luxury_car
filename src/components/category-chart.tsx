"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import type { ChartData } from "@/types"

interface CategoryChartProps {
  data: ChartData[]
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function CategoryChart({ data }: CategoryChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Répartition par catégorie</CardTitle>
        <CardDescription>Ventes par catégorie de produits</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Ventes",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
