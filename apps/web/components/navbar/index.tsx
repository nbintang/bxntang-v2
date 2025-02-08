"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";
import { Dock, DockIcon } from "@workspace/ui/components/dock";
import DATA from "./data";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import useMediaQuery from "@workspace/ui/lib/use-media-query";
import Icons from "../icons/nav.icon";
import { useEmailDialog } from "@/hooks/use-email-dialog";

export default function Navbar() {
  const setOpen = useEmailDialog((state) => state.setOpen);
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const handleNavigate = (href: string) => {
    toast.loading("Wait...", { id: "redirect" });
    router.push(href);
  };
  useEffect(() => {
    toast.dismiss("redirect");
  }, [pathname]);
  return (
    <div className="fixed  bottom-4 left-1/2 -translate-x-1/2">
      <TooltipProvider>
        <Dock
          iconMagnification={isMobile ? 40 : 60}
          className="dark:bg-background dark:text-white"
          direction="middle"
        >
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size={"icon"}
                    aria-label={item.label}
                    variant={"ghost"}
                    className="size-12 rounded-full"
                    onClick={() => handleNavigate(item.href)}
                  >
                    <item.icon className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setOpen(true)}
                  variant={"ghost"}
                  size={"icon"}
                  className="size-12 rounded-full"
                >
                  <Icons.email className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className=" rounded-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
