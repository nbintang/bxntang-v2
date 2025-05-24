import Container from "@/components/layouts/Container";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container className="mt-14 sm:mt-16 mb-3 text-primary">{children}</Container>;
}
