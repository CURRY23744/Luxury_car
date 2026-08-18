"use client"

import { useEffect, useState } from "react"

interface StatItemProps {
  end: number
  label: string
  suffix?: string
  prefix?: string
}

function StatItem({ end, label, suffix = "", prefix = "" }: StatItemProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="stat-item">
      <div className="stat-value">
        <span className="stat-value-gradient">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container mx-auto px-6">
        <div className="stats-grid">
          <StatItem end={500} suffix="+" label="Luxury Cars" />
          <StatItem end={50} suffix="+" label="Premium Brands" />
          <StatItem end={1000} suffix="+" label="Happy Clients" />
          <StatItem end={25} label="Years Experience" />
        </div>
      </div>
    </section>
  )
}
