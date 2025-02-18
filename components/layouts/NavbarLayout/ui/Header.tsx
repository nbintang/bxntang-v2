import Link from "next/link";
import Container from "../../../Container";
import LogoLayout from "./LogoLayout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEmailDialog } from "@/hooks/useEmailDialog";

interface HeaderProps {
  panelId: string;
  invert?: boolean;
  icon: React.ElementType;
  expanded: boolean;
  onToggle: () => void;
  toggleRef: React.RefObject<HTMLButtonElement>;
}


const Header: React.FC<HeaderProps> = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  const setOpenEmail = useEmailDialog((state) => state.setOpen);
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <LogoLayout invert={invert}>BXNTANG</LogoLayout>
        </Link>
        <div className="flex items-center gap-x-8">
          <Button
            variant={invert ? "secondary" : "black"}
            type="button"
            className={cn( "rounded-full font-medium")}
            onClick={() => setOpenEmail(true)}
          >
            Contact Me
          </Button>
          <Button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            variant={invert ? "black" : "ghost"}
            aria-expanded={expanded}
            aria-controls={panelId}
            size={"icon"}
            className={cn("group rounded-full  transition border")}
            aria-label="Toggle navigation"
          >
            <Icon
              className={cn(
                "h-6 w-6",
                invert ? "text-white " : "text-neutral-950 "
              )}
            />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
