import Container from "@/components/layouts/Container";
import { generateMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className={cn("mt-24 sm:mt-20 lg:mt-28")}>{children}</Container>
  );
}
export const metadata = generateMetadata({
    title: "Blog | Bxntang",
    description: "Checkout my portfolio blog",
    urlEndpoint: `/blog`,
  });
