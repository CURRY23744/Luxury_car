"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { mockUsers } from "@/lib/mock-data"
import type { User } from "@/types"
import { MoreHorizontal, Plus, Search } from "lucide-react"
import { UserDetailModal } from "@/components/user-detail-modal"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { useApp } from "@/contexts/app-context"
import { getRoleColor, getStatusColor } from "@/utils/colors"

export function UsersPage() {
  const [users] = useState<User[]>(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")

  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const { searchFilters, addNotification, selectedUsers, setSelectedUsers } = useApp()

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes((searchFilters.users || searchTerm).toLowerCase()) ||
      user.email.toLowerCase().includes((searchFilters.users || searchTerm).toLowerCase())

    const matchesStatus = searchFilters.users === "pending" ? user.status === "pending" : true

    return matchesSearch && matchesStatus
  })

  const handleViewUser = (user: User) => {
    setSelectedUser(user)
    setIsDetailModalOpen(true)
  }

  const handleSelectUser = (userId: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, userId])
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId))
    }
  }

  const handleBulkAction = (action: string) => {
    if (selectedUsers.length === 0) {
      addNotification("error", "Aucun utilisateur sélectionné")
      return
    }

    switch (action) {
      case "activate":
        addNotification("success", `${selectedUsers.length} utilisateur(s) activé(s)`)
        break
      case "deactivate":
        addNotification("success", `${selectedUsers.length} utilisateur(s) désactivé(s)`)
        break
      case "delete":
        addNotification("success", `${selectedUsers.length} utilisateur(s) supprimé(s)`)
        break
    }
    setSelectedUsers([])
  }

  return (
    <div className="space-y-6">
      <BreadcrumbNav />

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Utilisateurs</h2>
          <p className="text-muted-foreground">Gérez les utilisateurs de votre plateforme</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouvel utilisateur
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des utilisateurs</CardTitle>
          <CardDescription>{filteredUsers.length} utilisateur(s) trouvé(s)</CardDescription>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un utilisateur..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            {selectedUsers.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{selectedUsers.length} sélectionné(s)</span>
                <Button size="sm" variant="outline" onClick={() => handleBulkAction("activate")}>
                  Activer
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleBulkAction("deactivate")}>
                  Désactiver
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleBulkAction("delete")}>
                  Supprimer
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(filteredUsers.map((u) => u.id))
                      } else {
                        setSelectedUsers([])
                      }
                    }}
                  />
                </TableHead>
                <TableHead>Utilisateur</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Dernière connexion</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={(e) => handleSelectUser(user.id, e.target.checked)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString("fr-FR") : "Jamais"}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewUser(user)}>Voir détails</DropdownMenuItem>
                        <DropdownMenuItem>Modifier</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Supprimer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <UserDetailModal user={selectedUser} open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen} />
    </div>
  )
}
