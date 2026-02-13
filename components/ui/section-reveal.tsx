"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right" | "scale"
  delay?: number
}

export function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: SectionRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const directionClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[direction]

  return (
    <div
      ref={ref}
      className={cn(directionClass, isInView && "reveal-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
