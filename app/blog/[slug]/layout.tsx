import { dummyBlog } from "@/features/blog/dummy";
import { generateMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

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
export const metadata= async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const { slug } = params;
  const data = dummyBlog.find((blog) => blog.slug === slug);

  return generateMetadata({
    title: data?.title,
    description: data?.description,
    urlEndpoint: `/blog/${slug}`,
  });
};
