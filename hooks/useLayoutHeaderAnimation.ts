import { useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import useMediaQuery from "@/hooks/useMediaQuery";

const useLayoutHeaderAnimation = () => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false)
  const openRef = useRef<HTMLButtonElement>(null!);
  const closeRef = useRef<HTMLButtonElement>(null!);
  const navRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const mobileView = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        (event.target as HTMLElement).closest("a")?.href ===
        window.location.href
      )
        setExpanded(false);
    }
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

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
