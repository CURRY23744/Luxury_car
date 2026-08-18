"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Product } from "@/types"
import { Package, DollarSign, TrendingUp, Calendar, BarChart3 } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import Image from "next/image"

interface ProductDetailModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDetailModal({ product, open, onOpenChange }: ProductDetailModalProps) {
  const { addNotification } = useApp()

  if (!product) return null

  const handleUpdateStock = () => {
    addNotification("success", `Stock mis à jour pour ${product.name}`)
    onOpenChange(false)
  }

  const handleViewAnalytics = () => {
    addNotification("info", `Affichage des analytics pour ${product.name}`)
    onOpenChange(false)
  }

  const getStatusColor = (status: Product["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "out_of_stock":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusLabel = (status: Product["status"]) => {
    switch (status) {
      case "active":
        return "Actif"
      case "inactive":
        return "Inactif"
      case "out_of_stock":
        return "Rupture"
      default:
        return status
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={40}
              height={40}
              className="rounded-md"
            />
            <div>
              <div>{product.name}</div>
              <div className="text-sm text-muted-foreground">{product.category}</div>
            </div>
          </DialogTitle>
          <DialogDescription>Détails complets du produit</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Informations</TabsTrigger>
            <TabsTrigger value="sales">Ventes</TabsTrigger>
            <TabsTrigger value="inventory">Inventaire</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informations produit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{product.price.toLocaleString()} €</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span>Stock : {product.stock} unités</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <Badge className={getStatusColor(product.status)}>{getStatusLabel(product.status)}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Créé le {new Date(product.createdAt).toLocaleDateString("fr-FR")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  <span>{product.sales} ventes totales</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance des ventes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Ventes totales</span>
                    <span className="font-medium">{product.sales}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Revenus générés</span>
                    <span className="font-medium">{(product.sales * product.price).toLocaleString()} €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ventes ce mois</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tendance</span>
                    <Badge variant="outline" className="text-green-600">
                      +15%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gestion d'inventaire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Stock actuel</span>
                    <span className={`font-medium ${product.stock < 10 ? "text-red-600" : ""}`}>
                      {product.stock} unités
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Stock minimum</span>
                    <span className="font-medium">5 unités</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Dernière mise à jour</span>
                    <span className="text-sm text-muted-foreground">Il y a 2 jours</span>
                  </div>
                  {product.stock < 10 && (
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-sm text-orange-800">⚠️ Stock faible - Réapprovisionnement recommandé</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex gap-2 pt-4">
          <Button onClick={handleUpdateStock} variant="outline" className="flex-1 bg-transparent">
            Mettre à jour le stock
          </Button>
          <Button onClick={handleViewAnalytics} className="flex-1">
            Voir les analytics
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
