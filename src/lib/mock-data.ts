import type { User, Product, DashboardStats, ChartData } from "@/types"

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    role: "user",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    createdAt: "2024-01-15",
    lastLogin: "2024-01-20",
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "marie.martin@email.com",
    role: "moderator",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    createdAt: "2024-01-10",
    lastLogin: "2024-01-19",
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "pierre.durand@email.com",
    role: "user",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40",
    createdAt: "2024-01-05",
    lastLogin: "2024-01-15",
  },
  {
    id: "4",
    name: "Sophie Bernard",
    email: "sophie.bernard@email.com",
    role: "user",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40",
    createdAt: "2024-01-18",
  },
]

export const mockProducts: Product[] = [
  {
    id: "1",
    name: 'MacBook Pro 16"',
    category: "Ordinateurs",
    price: 2499,
    stock: 15,
    status: "active",
    image: "/placeholder.svg?height=60&width=60",
    createdAt: "2024-01-01",
    sales: 45,
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: 1199,
    stock: 32,
    status: "active",
    image: "/placeholder.svg?height=60&width=60",
    createdAt: "2024-01-05",
    sales: 78,
  },
  {
    id: "3",
    name: "AirPods Pro",
    category: "Audio",
    price: 279,
    stock: 0,
    status: "out_of_stock",
    image: "/placeholder.svg?height=60&width=60",
    createdAt: "2024-01-10",
    sales: 156,
  },
  {
    id: "4",
    name: "iPad Air",
    category: "Tablettes",
    price: 649,
    stock: 28,
    status: "active",
    image: "/placeholder.svg?height=60&width=60",
    createdAt: "2024-01-12",
    sales: 34,
  },
]

export const mockStats: DashboardStats = {
  totalUsers: 1247,
  totalProducts: 89,
  totalRevenue: 125430,
  totalOrders: 456,
  userGrowth: 12.5,
  revenueGrowth: 8.2,
  productGrowth: 5.1,
  orderGrowth: 15.3,
}

export const mockChartData: ChartData[] = [
  { name: "Jan", revenue: 12000, users: 120, orders: 45 },
  { name: "Fév", revenue: 15000, users: 145, orders: 52 },
  { name: "Mar", revenue: 18000, users: 167, orders: 61 },
  { name: "Avr", revenue: 22000, users: 189, orders: 78 },
  { name: "Mai", revenue: 25000, users: 210, orders: 89 },
  { name: "Jun", revenue: 28000, users: 234, orders: 95 },
]

export const mockCategoryData: ChartData[] = [
  { name: "Ordinateurs", value: 35 },
  { name: "Smartphones", value: 28 },
  { name: "Audio", value: 20 },
  { name: "Tablettes", value: 17 },
]
