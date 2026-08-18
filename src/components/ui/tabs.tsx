"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type TabsContextValue = {
  value: string
  setValue: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export function Tabs({
  value,
  defaultValue = "",
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const currentValue = value ?? internalValue

  const setTabValue = React.useCallback(
    (nextValue: string) => {
      if (value === undefined) {
        setInternalValue(nextValue)
      }
      onValueChange?.(nextValue)
    },
    [onValueChange, value],
  )

  return (
    <TabsContext.Provider value={{ value: currentValue, setValue: setTabValue }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext)
  const isActive = context?.value === value

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm" : "text-muted-foreground",
        className,
      )}
      onClick={() => context?.setValue(value)}
      {...props}
    >
      {children}
    </button>
  )
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext)

  if (context?.value !== value) {
    return null
  }

  return (
    <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} {...props}>
      {children}
    </div>
  )
}
