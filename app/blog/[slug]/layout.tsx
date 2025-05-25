import { cn } from "@/lib/utils";
import { fetchMetadata } from "./metadata";

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={cn("mt-24 sm:mt-20 lg:mt-28 text-black pb-24")}>
      {children}
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return fetchMetadata({ params });
}
