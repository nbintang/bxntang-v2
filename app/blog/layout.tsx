import Container from "@/components/layouts/Container";
import { generateMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className={cn("mt-24 sm:mt-32 lg:mt-32")}>{children}</Container>
  );
}
export const metadata = generateMetadata({
    title: "Blog | Bxntang",
    description: "Checkout my portfolio blog",
    urlEndpoint: `/blog`,
  });
