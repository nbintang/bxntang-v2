import * as React from "react";
import { cn } from "@/lib/utils";


interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  invert?: boolean;
}

const LogoLayout = React.forwardRef<HTMLDivElement, LogoProps>(
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
LogoLayout.displayName = "LogoLayout"; 
export default LogoLayout;
