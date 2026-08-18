"use client"

import { useApp } from "@/contexts/app-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"

export function Notifications() {
  const { notifications, removeNotification } = useApp()

  if (notifications.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <Alert
          key={notification.id}
          className={`relative ${
            notification.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : notification.type === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-blue-200 bg-blue-50 text-blue-800"
          }`}
        >
          {notification.type === "success" && <CheckCircle className="h-4 w-4" />}
          {notification.type === "error" && <AlertCircle className="h-4 w-4" />}
          {notification.type === "info" && <Info className="h-4 w-4" />}
          <AlertDescription className="pr-8">{notification.message}</AlertDescription>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1 right-1 h-6 w-6"
            onClick={() => removeNotification(notification.id)}
          >
            <X className="h-3 w-3" />
          </Button>
        </Alert>
      ))}
    </div>
  )
}
