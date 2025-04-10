import type React from "react"
interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

export function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return <div className={`container relative z-10 px-4 md:px-6 ${className}`}>{children}</div>
}
