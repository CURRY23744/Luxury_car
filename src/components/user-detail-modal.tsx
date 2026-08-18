"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { User } from "@/types"
import { Calendar, Mail, Shield, Activity, ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"
import { useApp } from "@/contexts/app-context"

interface UserDetailModalProps {
  user: User | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserDetailModal({ user, open, onOpenChange }: UserDetailModalProps) {
  const router = useRouter()
  const { addNotification } = useApp()

  if (!user) return null

  const handleViewOrders = () => {
    // Simulate viewing user orders
    addNotification("info", `Affichage des commandes de ${user.name}`)
    onOpenChange(false)
    // In a real app, you would navigate to orders page with user filter
  }

  const handleSendMessage = () => {
    addNotification("success", `Message envoyé à ${user.name}`)
    onOpenChange(false)
  }

  const getStatusColor = (status: User["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div>{user.name}</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
          </DialogTitle>
          <DialogDescription>Détails complets de l'utilisateur</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Informations</TabsTrigger>
            <TabsTrigger value="activity">Activité</TabsTrigger>
            <TabsTrigger value="orders">Commandes</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">{user.role}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Inscrit le {new Date(user.createdAt).toLocaleDateString("fr-FR")}</span>
                </div>
                {user.lastLogin && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Dernière connexion : {new Date(user.lastLogin).toLocaleDateString("fr-FR")}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Activité récente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Connexion réussie</span>
                    <span className="text-xs text-muted-foreground ml-auto">Il y a 2h</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Profil mis à jour</span>
                    <span className="text-xs text-muted-foreground ml-auto">Il y a 1j</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                    <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Commande passée</span>
                    <span className="text-xs text-muted-foreground ml-auto">Il y a 3j</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Historique des commandes</CardTitle>
                <CardDescription>3 commandes au total</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Commande #3210</div>
                        <div className="text-sm text-muted-foreground">15 janvier 2024</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">234 €</div>
                      <Badge variant="outline" className="text-xs">
                        Livrée
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Commande #3156</div>
                        <div className="text-sm text-muted-foreground">8 janvier 2024</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">156 €</div>
                      <Badge variant="outline" className="text-xs">
                        Livrée
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex gap-2 pt-4">
          <Button onClick={handleViewOrders} variant="outline" className="flex-1 bg-transparent">
            Voir les commandes
          </Button>
          <Button onClick={handleSendMessage} className="flex-1">
            Envoyer un message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
