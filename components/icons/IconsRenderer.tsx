// components/icons/TechIconRenderer.tsx
"use client";

import { cn } from "@/lib/utils";
import { TechIconName, TechIcons } from "./TechIcons";

interface Props {
  name: TechIconName;
  className?: string;
}

export default function IconsRenderer({ name, className }: Props) {
  const Icon = TechIcons[name];
  return <Icon className={cn(className)} />;
}
