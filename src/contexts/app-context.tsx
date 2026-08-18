"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface AppContextType {
  selectedUsers: string[]
  selectedProducts: string[]
  setSelectedUsers: (users: string[]) => void
  setSelectedProducts: (products: string[]) => void
  searchFilters: {
    users: string
    products: string
  }
  setSearchFilters: (filters: { users: string; products: string }) => void
  notifications: Array<{
    id: string
    type: "success" | "error" | "info"
    message: string
    timestamp: Date
  }>
  addNotification: (type: "success" | "error" | "info", message: string) => void
  removeNotification: (id: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [searchFilters, setSearchFilters] = useState({
    users: "",
    products: "",
  })
  const [notifications, setNotifications] = useState<AppContextType["notifications"]>([])

  const addNotification = (type: "success" | "error" | "info", message: string) => {
    const id = Math.random().toString(36).substr(2, 9)
    const notification = { id, type, message, timestamp: new Date() }
    setNotifications((prev) => [...prev, notification])

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id)
    }, 5000)
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <AppContext.Provider
      value={{
        selectedUsers,
        selectedProducts,
        setSelectedUsers,
        setSelectedProducts,
        searchFilters,
        setSearchFilters,
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
