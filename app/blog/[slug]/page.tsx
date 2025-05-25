import BlogSlugPage from "@/features/blog/BlogSlugPage";
import { notFound } from "next/navigation";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  if (!slug) return notFound();
  return (
    <main className="space-y-3">
      <BlogSlugPage slug={slug} />
    </main>
  );
}
