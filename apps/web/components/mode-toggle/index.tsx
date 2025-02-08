"use client";

import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  const handleClick = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      onClick={handleClick}
      className={cn("", className)}
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
