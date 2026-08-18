"use client"

import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  MoreHorizontal,
  Plus,
  TrendingUp,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a href="#" className="text-foreground transition-colors hover:text-foreground">
            Dashboard
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Projets
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Analytics
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Équipe
          </a>
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
            <Button size="sm" className="h-8 gap-1">
              <Plus className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Nouveau projet</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {/* Page Title */}
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
        </div>

        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenus totaux</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45 231 €</div>
              <p className="text-xs text-muted-foreground">+20.1% par rapport au mois dernier</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">+180.1% par rapport au mois dernier</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ventes</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12 234</div>
              <p className="text-xs text-muted-foreground">+19% par rapport au mois dernier</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Actifs maintenant</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+201 depuis la dernière heure</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Chart Card */}
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Aperçu des ventes</CardTitle>
                <CardDescription>Ventes mensuelles pour cette année</CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                  Voir tout
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Janvier</span>
                    <span>4 231 €</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Février</span>
                    <span>3 847 €</span>
                  </div>
                  <Progress value={58} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Mars</span>
                    <span>5 123 €</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Avril</span>
                    <span>6 234 €</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Mai</span>
                    <span>4 567 €</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">Nouvelle commande</p>
                  <p className="text-sm text-muted-foreground">Commande #3210 - 234 €</p>
                </div>
                <div className="ml-auto font-medium">+234 €</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">Nouvel utilisateur</p>
                  <p className="text-sm text-muted-foreground">marie.dupont@email.com</p>
                </div>
                <div className="ml-auto font-medium">+1</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">Remboursement</p>
                  <p className="text-sm text-muted-foreground">Commande #3205 - 89 €</p>
                </div>
                <div className="ml-auto font-medium">-89 €</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">Nouvelle commande</p>
                  <p className="text-sm text-muted-foreground">Commande #3204 - 156 €</p>
                </div>
                <div className="ml-auto font-medium">+156 €</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects/Tasks Table */}
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Projets récents</CardTitle>
              <CardDescription>Vos projets les plus récents et leur statut</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <a href="#">
                <Download className="h-4 w-4" />
                Exporter
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Site E-commerce</p>
                    <p className="text-sm text-muted-foreground">En cours</p>
                  </div>
                  <div className="ml-auto">
                    <Progress value={75} className="w-16" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Voir détails</DropdownMenuItem>
                      <DropdownMenuItem>Modifier</DropdownMenuItem>
                      <DropdownMenuItem>Supprimer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">App Mobile</p>
                    <p className="text-sm text-muted-foreground">Terminé</p>
                  </div>
                  <div className="ml-auto">
                    <Progress value={100} className="w-16" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Voir détails</DropdownMenuItem>
                      <DropdownMenuItem>Modifier</DropdownMenuItem>
                      <DropdownMenuItem>Supprimer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Dashboard Analytics</p>
                    <p className="text-sm text-muted-foreground">En attente</p>
                  </div>
                  <div className="ml-auto">
                    <Progress value={25} className="w-16" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Voir détails</DropdownMenuItem>
                      <DropdownMenuItem>Modifier</DropdownMenuItem>
                      <DropdownMenuItem>Supprimer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
