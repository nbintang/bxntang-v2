"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import BlogCreator from "./components/BlogCreator";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug } from "./data/blogs";
import { Skeleton } from "@/components/ui/skeleton";
import { Blog } from "@prisma/client";

export default function BlogSlugPage({ slug }: { slug: string }) {
  const pathname = usePathname();
  const {
    data: blog,
    isLoading,
    isError,
    isFetched,
    isSuccess,
    isFetching,
  } = useQuery<Blog>({
    queryKey: ["blog"],
    queryFn: async () => await fetchBlogBySlug(slug),
  });
  React.useEffect(() => {
    toast.warning("This data is still dummy!", {
      richColors: true,
      id: "warning",
      position: "bottom-right",
    });
    return () => {
      toast.dismiss("warning");
    };
  }, [pathname]);

  if (isLoading || isFetching) {
    return (
      <>
        <Skeleton className="w-full h-96" />
        <Skeleton className="w-full h-20" />
        <Skeleton className="w-full h-20" />
        <Skeleton className="w-full h-20" />
        <Skeleton className="w-full h-20" />
      </>
    );
  }
  if (isError) return <div className="text-red-500">Something went wrong</div>;
  return (
    <>
      {isSuccess && isFetched && (
        <>
          <h1 className="text-3xl font-semibold font-display text-neutral-950">
            {blog.title}
          </h1>
          <Image
            src={blog?.image || "/img/project/default.png"}
            alt={blog?.title || "Placeholder"}
            className="w-full h-56 sm:h-[400px] object-center object-cover"
            width={500}
            height={300}
          />
          <section className="space-y-1">
            <BlogCreator author={blog.author} date={blog.updatedAt} />
            <p className="text-base sm:text-lg">{blog.description}</p>
            <br />
            <p className="text-base sm:text-lg">{blog.content}</p>
          </section>
        </>
      )}
    </>
  );
}
