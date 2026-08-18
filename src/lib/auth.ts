import type { AuthUser } from "@/types"

// Mock JWT token
const MOCK_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIFVzZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.mock"

const MOCK_USER: AuthUser = {
  id: "1",
  name: "Admin User",
  email: "admin@example.com",
  role: "admin",
  avatar: "/placeholder.svg?height=40&width=40",
}

export const authService = {
  login: async (email: string, password: string): Promise<{ user: AuthUser; token: string }> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("auth_token", MOCK_TOKEN)
      localStorage.setItem("auth_user", JSON.stringify(MOCK_USER))
      return { user: MOCK_USER, token: MOCK_TOKEN }
    }

    throw new Error("Identifiants invalides")
  },

  logout: () => {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("auth_user")
  },

  getCurrentUser: (): AuthUser | null => {
    const token = localStorage.getItem("auth_token")
    const userStr = localStorage.getItem("auth_user")

    if (token && userStr) {
      return JSON.parse(userStr)
    }

    return null
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("auth_token")
  },
}
