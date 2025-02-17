import { Particles } from "@/components/ui/particles";
import React from "react";
type ChildProps = {
  children: React.ReactNode;
};
export default function ParticlesLayout({ children }: ChildProps) {
  return (
    <main className="relative dark:bg-background w-full   overflow-x-hidden">
      {children}
      <Particles className="absolute inset-0" quantity={100} ease={50} />
    </main>
  );
}
