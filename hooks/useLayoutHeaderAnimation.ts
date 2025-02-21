import { useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const useLayoutHeaderAnimation = () => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const mobileView = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();

  const handleToggle = () => {
    if (window.scrollY === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setExpanded((expanded) => !expanded);
      window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }));
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setExpanded((expanded) => !expanded);
        window.setTimeout(() =>
          closeRef.current?.focus({ preventScroll: true })
        );
      }, 300);
    }
  };

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (link && navRef.current?.contains(target)) {
        const isDownloadLink =
          link.hasAttribute("download") || link.href.endsWith(".pdf");

        if (!isDownloadLink) {
          event.preventDefault();
          setExpanded(false);

          if (link.href === window.location.href) {
            toast.loading("Wait...", {
              id: "loading",
              position: mobileView ? "bottom-center" : "top-right",
            });
            setTimeout(() => {
              toast.dismiss("loading");
            }, 500);
          } else {
            toast.loading("Wait...", {
              id: "loading",
              position: mobileView ? "bottom-center" : "top-right",
            });
          }
        }
      }
    }

    if (expanded) {
      document.addEventListener("click", handleClick, { once: true });
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [expanded, mobileView]);
  
  useEffect(() => {
    toast.dismiss("loading");
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "visible";
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
    handleToggle
  };
};

export default useLayoutHeaderAnimation;
