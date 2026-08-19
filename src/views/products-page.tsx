"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, MoreHorizontal, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

import { ProductDetailModal } from "@/components/product-detail-modal"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

import { useApp } from "@/contexts/app-context"
import { mockProducts } from "@/lib/mock-data"
import type { Product } from "@/types"

export function ProductsPage() {
  const [products] = useState<Product[]>(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  const { searchFilters, addNotification, selectedProducts, setSelectedProducts } = useApp()

  const filteredProducts = products.filter((product) => {
    const searchValue = (searchFilters.products || searchTerm).toLowerCase()
    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue)
    const matchesStock = searchFilters.products === "low_stock" ? product.stock < 10 : true
    return matchesSearch && matchesStock
  })

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

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product)
    setIsDetailModalOpen(true)
  }

  const handleSelectProduct = (productId: string, checked: boolean) => {
    setSelectedProducts(
      checked ? [...selectedProducts, productId] : selectedProducts.filter((id) => id !== productId)
    )
  }

  const handleBulkAction = (action: string) => {
    if (selectedProducts.length === 0) {
      addNotification("error", "Aucun produit sélectionné")
      return
    }

    const message = {
      activate: "activé(s)",
      deactivate: "désactivé(s)",
      delete: "supprimé(s)",
    }[action]

    if (message) {
      addNotification("success", `${selectedProducts.length} produit(s) ${message}`)
    }

    setSelectedProducts([])
  }

  return (
    <div className="space-y-6">
      <BreadcrumbNav
        items={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Produits", href: "/dashboard/products", active: true },
        ]}
      />

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Produits</h2>
          <p className="text-muted-foreground">Gérez votre catalogue de produits</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau produit
        </Button>
      </div>

      {selectedProducts.length > 0 && (
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => handleBulkAction("activate")}>Activer</Button>
          <Button variant="outline" onClick={() => handleBulkAction("deactivate")}>Désactiver</Button>
          <Button variant="destructive" onClick={() => handleBulkAction("delete")}>Supprimer</Button>
          <Button variant="link" onClick={() => setSelectedProducts([])}>
            Annuler ({selectedProducts.length})
          </Button>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Catalogue des produits</CardTitle>
          <CardDescription>{filteredProducts.length} produit(s) trouvé(s)</CardDescription>
          <div className="flex items-center space-x-2 mt-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedProducts.length === filteredProducts.length}
                    onCheckedChange={(checked) =>
                      setSelectedProducts(
                        checked ? filteredProducts.map((p) => p.id) : []
                      )
                    }
                  />
                </TableHead>
                <TableHead>Produit</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Ventes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={(checked) =>
                        handleSelectProduct(product.id, !!checked)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Créé le {new Date(product.createdAt).toLocaleDateString("fr-FR")}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price.toLocaleString()} €</TableCell>
                  <TableCell className={product.stock === 0 ? "text-red-600" : ""}>
                    {product.stock}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(product.status)}>
                      {getStatusLabel(product.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.sales}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewProduct(product)}>
                          Voir détails
                        </DropdownMenuItem>
                        <DropdownMenuItem>Modifier</DropdownMenuItem>
                        <DropdownMenuItem>Dupliquer</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ProductDetailModal
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
        product={selectedProduct}
      />
    </div>
  )
}

export default function ProductsPageRoute() {
  return <ProductsPage />
}
