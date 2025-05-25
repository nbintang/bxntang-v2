
import { dummyBlog } from "@/features/blog/dummy";
import { generateMetadata as generateBlogMetadata } from "@/lib/metadata";
async function generateMetadata({
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
    description: `${data.description.slice(0, 70)}...`,
    urlEndpoint: `/blog/${slug}`,
  });
}


export { generateMetadata as fetchMetadata };