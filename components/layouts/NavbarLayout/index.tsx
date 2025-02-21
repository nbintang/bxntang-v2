"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import { motion, MotionConfig } from "motion/react";
import Container from "@/components/layouts/Container";
import { AlignRight, XIcon } from "lucide-react";
import OfficesLayout from "@/components/layouts/NavbarLayout/ui/AddressLayout";
import SocialMediaLayout from "@/components/layouts/NavbarLayout/ui/SocialMediaLayout";
import { cn } from "@/lib/utils";
import useLayoutHeaderAnimation from "@/hooks/useLayoutHeaderAnimation";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation";

interface RootLayoutInnerProps {
  children: React.ReactNode;
}
const RootLayoutInner: React.FC<RootLayoutInnerProps> = ({ children }) => {
  const {
    panelId,
    expanded,
    setExpanded,
    openRef,
    closeRef,
    navRef,
    mobileView,
    shouldReduceMotion,
    handleToggle
  } = useLayoutHeaderAnimation();


  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 10 } : undefined}>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header>
          <div
            className="absolute left-0 right-0 top-2 z-40 pt-14"
            aria-hidden={expanded ? "true" : undefined}
            inert={expanded ? true : undefined}
          >
            <Header
              panelId={panelId}
              icon={AlignRight}
              toggleRef={openRef}
              expanded={expanded}
              onToggle={handleToggle}
            />
          </div>
          <motion.div
            layout
            id={panelId}
            className={cn(
              "relative z-50  bg-neutral-950 pt-2",
              expanded && mobileView
                ? "overflow-y-auto overflow-x-hidden"
                : "overflow-hidden",
              expanded ? "h-[100dvh] sm:h-auto" : "h-[0.5rem]"
            )}
            aria-hidden={expanded ? undefined : "true"}
            inert={expanded ? undefined : false}
          >
            <motion.div layout className="bg-neutral-800">
              <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
                <Header
                  invert
                  panelId={panelId}
                  icon={XIcon}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() =>{
                    setExpanded((expanded) => !expanded);
                    window.setTimeout(() =>
                      closeRef.current?.focus({ preventScroll: true })
                    );
                  }}
                />
              </div>
              <Navigation ref={navRef} />
              <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
                <Container>
                  <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                    <div>
                      <h2 className="font-display text-base font-semibold text-white">
                        Address
                      </h2>
                      <OfficesLayout
                        invert
                        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                      />
                    </div>
                    <div className="sm:border-l sm:border-transparent sm:pl-16">
                      <h2 className="font-display text-base font-semibold text-white">
                        Follow Me
                      </h2>
                      <SocialMediaLayout className="mt-6" invert />
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/*  Body   */}
        <motion.div
          layout
          style={{ borderRadius: 40 }}
          className="relative flex-1 overflow-hidden bg-white"
        >
          <motion.div layout className="relative isolate h-full w-full pt-14">
            {children}
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const NavbarLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default NavbarLayout;
