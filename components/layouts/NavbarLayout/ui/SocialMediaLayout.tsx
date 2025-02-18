import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import navData from "../navData";
interface SocialMediaProfile {
  title: string;
  href: string;
  Icon: React.ElementType;
}
export const SocialMediaProfiles: SocialMediaProfile[] = Object.values(
  navData.contact.social
);
interface SocialMediaProps {
  className?: string;
  invert?: boolean;
}
const SocialMediaLayout: React.FC<SocialMediaProps> = ({
  className,
  invert = false,
}) => {
  return (
    <ul role="list" className={cn("flex gap-x-10", className)}>
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link href={item.href} aria-label={item.title}>
            <item.Icon
              className={cn(
                "h-6 w-6",
                "transition hover:text-secondary/80 duration-300 ease-in-out",
                invert ? "text-secondary" : "text-black"
              )}
              aria-hidden={true}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaLayout;
