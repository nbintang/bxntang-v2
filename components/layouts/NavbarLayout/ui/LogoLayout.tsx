import type React from "react"

interface LogoProps {
  invert?: boolean
  children: React.ReactNode
}

const LogoLayout: React.FC<LogoProps> = ({ invert = false, children }) => {
  return <div className={`text-2xl font-bold ${invert ? "text-white" : "text-black"}`}>{children}</div>
}

export default LogoLayout

