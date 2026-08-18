"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useApp } from "@/contexts/app-context"
import { Users, TrendingUp, AlertTriangle, Plus, Eye } from "lucide-react"

export function QuickActions() {
  const router = useRouter()
  const { addNotification, setSearchFilters } = useApp()

  const handleViewPendingUsers = () => {
    setSearchFilters({ users: "pending", products: "" })
    addNotification("info", "Affichage des utilisateurs en attente")
    router.push("/users")
  }

  const handleViewLowStock = () => {
    setSearchFilters({ users: "", products: "low_stock" })
    addNotification("info", "Affichage des produits en rupture")
    router.push("/products")
  }

  const handleViewStats = () => {
    router.push("/stats")
  }

  const handleAddUser = () => {
    addNotification("info", "Ouverture du formulaire d'ajout d'utilisateur")
    router.push("/users")
  }

  const handleAddProduct = () => {
    addNotification("info", "Ouverture du formulaire d'ajout de produit")
    router.push("/products")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions rapides</CardTitle>
        <CardDescription>Accès direct aux tâches importantes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Users className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <div className="font-medium">Utilisateurs en attente</div>
                <div className="text-sm text-muted-foreground">4 utilisateurs à valider</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">4</Badge>
              <Button size="sm" variant="outline" onClick={handleViewPendingUsers}>
                <Eye className="h-3 w-3 mr-1" />
                Voir
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <div className="font-medium">Stock faible</div>
                <div className="text-sm text-muted-foreground">2 produits en rupture</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="destructive">2</Badge>
              <Button size="sm" variant="outline" onClick={handleViewLowStock}>
                <Eye className="h-3 w-3 mr-1" />
                Voir
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">Rapport mensuel</div>
                <div className="text-sm text-muted-foreground">Statistiques détaillées</div>
              </div>
            </div>
            <Button size="sm" variant="outline" onClick={handleViewStats}>
              <Eye className="h-3 w-3 mr-1" />
              Voir
            </Button>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="grid grid-cols-2 gap-2">
            <Button onClick={handleAddUser} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Nouvel utilisateur
            </Button>
            <Button onClick={handleAddProduct} variant="outline" className="w-full bg-transparent">
              <Plus className="h-4 w-4 mr-2" />
              Nouveau produit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
