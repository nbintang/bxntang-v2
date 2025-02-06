import { Particles } from "@workspace/ui/components/particles";
import React from "react";
type ChildProps = {
  children: React.ReactNode;
};
export default function ParticlesLayout({ children }: ChildProps) {
  return (
    <main className="relative  pl-5 dark:bg-background w-full min-h-screen  overflow-x-hidden">
      {children}
      <Particles className="absolute inset-0" quantity={200} ease={80} />
    </main>
  );
}
