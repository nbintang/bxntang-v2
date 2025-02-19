import { useEffect, useId, useRef, useState, useTransition } from "react";
import { useReducedMotion } from "motion/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";

const useLayoutHeaderAnimation = () => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const mobileView = useMediaQuery("(max-width: 768px)");
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setShowContent(false); // Tampilkan blank dulu
      setTimeout(() => setShowContent(true), 300); // Delay 300ms sebelum render halaman
    });
  }, [pathname]);
  
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;

      // Pastikan yang diklik adalah <a> di dalam Navigation
      if (target.closest("a") && navRef.current?.contains(target)) {
        setExpanded(false);
      }
    }

    if (expanded) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [expanded]);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [expanded]);

  return {
    isPending,
    showContent,
    panelId,
    expanded,
    setExpanded,
    openRef,
    closeRef,
    navRef,
    mobileView,
    shouldReduceMotion,
  };
};

export default useLayoutHeaderAnimation;
