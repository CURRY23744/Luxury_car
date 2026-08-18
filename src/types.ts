export type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "active" | "inactive" | "out_of_stock"
  sales: number
  image?: string
  createdAt: string
}