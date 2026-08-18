"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import type { ChartData } from "@/types"

interface UsersChartProps {
  data: ChartData[]
}

export function UsersChart({ data }: UsersChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Croissance des utilisateurs</CardTitle>
        <CardDescription>Nouveaux utilisateurs par mois</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            users: {
              label: "Utilisateurs",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="users" fill="var(--color-users)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
