"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { useApp } from "@/contexts/app-context"
import { ArrowUpRight, User, Package, DollarSign, TrendingUp } from "lucide-react"

export function RecentActivity() {
  const router = useRouter()
  const { addNotification } = useApp()

  const activities = [
    {
      id: "1",
      type: "user",
      title: "Nouvel utilisateur inscrit",
      description: "Marie Dubois s'est inscrite",
      time: "Il y a 5 min",
      avatar: "/placeholder.svg?height=32&width=32",
      action: () => {
        addNotification("info", "Navigation vers les utilisateurs")
        router.push("/users")
      },
    },
    {
      id: "2",
      type: "product",
      title: "Produit mis à jour",
      description: "Stock iPhone 15 Pro mis à jour",
      time: "Il y a 15 min",
      icon: Package,
      action: () => {
        addNotification("info", "Navigation vers les produits")
        router.push("/products")
      },
    },
    {
      id: "3",
      type: "sale",
      title: "Nouvelle vente",
      description: "Commande #3245 - 1,299 €",
      time: "Il y a 32 min",
      icon: DollarSign,
      action: () => {
        addNotification("info", "Affichage des détails de la vente")
      },
    },
    {
      id: "4",
      type: "analytics",
      title: "Pic de trafic détecté",
      description: "+45% de visiteurs aujourd'hui",
      time: "Il y a 1h",
      icon: TrendingUp,
      action: () => {
        addNotification("info", "Navigation vers les statistiques")
        router.push("/stats")
      },
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Activité récente</CardTitle>
          <CardDescription>Dernières actions sur la plateforme</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <a href="/activity">
            Voir tout
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={activity.action}
            >
              <div className="flex-shrink-0">
                {activity.avatar ? (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                ) : activity.icon ? (
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <activity.icon className="h-4 w-4" />
                  </div>
                ) : null}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-none">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
              <div className="text-xs text-muted-foreground">{activity.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
