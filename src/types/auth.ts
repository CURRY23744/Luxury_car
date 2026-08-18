// auth.ts
export interface AuthUser {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
}

// index.ts
export * from "./auth"
export * from "./car"
