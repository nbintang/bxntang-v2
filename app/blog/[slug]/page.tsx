import { dummyBlog } from "@/features/blog/dummy";
import BlogSlugPage from "@/features/blog/slug";
import { notFound } from "next/navigation";
import * as React from "react";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
 const slug = (await params).slug
  const blog = dummyBlog.find((blog) => blog.slug === slug);
  if (!blog) notFound();
  return (
    <main className="space-y-3">
      <BlogSlugPage blog={blog} />
    </main>
  );
}
