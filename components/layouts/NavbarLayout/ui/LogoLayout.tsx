import { cn } from "@/lib/utils";
import type React from "react";
import { forwardRef } from "react";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  invert?: boolean;
}

const LogoLayout = forwardRef<HTMLDivElement, LogoProps>(
  ({ invert = false, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
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
  }
);
LogoLayout.displayName = "LogoLayout"; // Add this line
export default LogoLayout;
