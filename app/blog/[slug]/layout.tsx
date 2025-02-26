import { dummyBlog } from "@/features/blog/dummy";
import { generateMetadata as generateBlogMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

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
  const slug = (await params).slug;
  const data = dummyBlog.find((blog) => blog.slug === slug);
  if (!data) {
    return generateBlogMetadata({
      title: "Blog | Bxntang",
      description: "Checkout my portfolio blog",
      urlEndpoint: `/blog`,
    });
  }
  return generateBlogMetadata({
    title: data.title,
    description: `${data.description.slice(0, 100)}...`,
    urlEndpoint: `/blog/${slug}`,
  });
}
