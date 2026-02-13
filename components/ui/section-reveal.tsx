"use client"

import { useCallback } from "react"
import { useInView } from "@/hooks/use-in-view"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "left" | "right" | "scale"
  delay?: number
}

const hiddenStyles: Record<string, React.CSSProperties> = {
  up: { opacity: 0, transform: "translateY(30px)" },
  left: { opacity: 0, transform: "translateX(-40px)" },
  right: { opacity: 0, transform: "translateX(40px)" },
  scale: { opacity: 0, transform: "scale(0.9)" },
}

const visibleStyle: React.CSSProperties = {
  opacity: 1,
  transform: "translateY(0) translateX(0) scale(1)",
}

export function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: SectionRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      (ref as React.MutableRefObject<HTMLElement | null>).current = node
    },
    [ref]
  )

  const baseTransition = `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`

  const style: React.CSSProperties = isInView
    ? { ...visibleStyle, transition: baseTransition }
    : { ...hiddenStyles[direction], transition: baseTransition }

  return (
    <div ref={setRef} className={className} style={style}>
      {children}
    </div>
  )
}
