"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import {  buttonVariants } from "@workspace/ui/components/button";

export function NextThemeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemesProvider>
  );
}

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <div
      onClick={handleClick}
      className={cn("", className, buttonVariants({ variant: "ghost" }))}
    >
      {!mounted ? null : theme === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </div>
  );
}

