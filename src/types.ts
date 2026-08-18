export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user" | "moderator"
  status: "active" | "inactive" | "pending"
  avatar?: string
  createdAt: string
  lastLogin?: string
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "active" | "inactive" | "out_of_stock"
  image?: string
  createdAt: string
  sales: number
}

export interface AuthUser {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
}

export interface DashboardStats {
  totalUsers: number
  totalProducts: number
  totalRevenue: number
  totalOrders: number
  userGrowth: number
  revenueGrowth: number
  productGrowth: number
  orderGrowth: number
}

export interface ChartData {
  name: string
  value: number
  revenue?: number
  users?: number
  orders?: number
}

export type { Car, Brand, GaugeProps } from "./types/car"