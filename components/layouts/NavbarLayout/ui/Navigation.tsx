import Link from "next/link";
import Container from "../../../Container";
import navData from "../navData";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";

interface NavigationRowProps {
  children: React.ReactNode;
}

const NavigationRow: React.FC<NavigationRowProps> = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};
interface NavigationItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ href, children, onClick, ...props }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    {...props}
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
};

const groupedNavData = navData.navbar.reduce((acc, item, index) => {
  if (index % 2 === 0) acc.push([]);
  acc[acc.length - 1].push(item);
  return acc;
}, [] as { href: string; label: string }[][]);

const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigate = (href: string) => {
    toast.loading("Wait...", { id: "redirect" });
    router.push(href);
  };
  useEffect(() => {
    toast.dismiss("redirect");
  }, [pathname]);
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      {groupedNavData.map((group, index) => (
        <NavigationRow key={index}>
          {group.map(({ href, label }) => (
            <NavigationItem key={href}  onClick={() => handleNavigate(href)} href={href}>
              {label}
            </NavigationItem>
          ))}
        </NavigationRow>
      ))}
    </nav>
  );
};
export default Navigation;
