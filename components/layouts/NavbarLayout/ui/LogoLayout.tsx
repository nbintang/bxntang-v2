import { cn } from "@/lib/utils";
import type React from "react";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  invert?: boolean;
}

const LogoLayout: React.FC<LogoProps> = ({
  invert = false,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        `text-2xl font-bold `,
        invert ? "text-white" : "text-black",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default LogoLayout;
