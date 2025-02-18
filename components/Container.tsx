import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ as: Component = "div", className, children }) => {
  return (
    <Component className={cn("max-w-7xl  mx-auto px-6 lg:px-8", className)}>
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Component>
  )
}

export default Container

