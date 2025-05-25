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
import useFetchServerData from "@/hooks/useFetchServerData";

export default function BlogSlugPage({ slug }: { slug: string }) {
  const pathname = usePathname();
  const {
    data: blog,
    isLoading,
    isError,
    isFetched,
    isSuccess,
    isFetching,
  } = useFetchServerData<Blog>({ endpoint: `/blogs/${slug}` });
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
        <Skeleton className="w-96 h-10" />
        <Skeleton className="w-full h-96" />
        <div className="flex items-center gap-2">
          <Skeleton className="w-20 rounded-full h-20" />
          <span className="flex flex-col gap-2">
            <Skeleton className="w-32 h-5" />
            <Skeleton className="w-20 h-5" />
          </span>
        </div>
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
        <Skeleton className="w-full h-5" />
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
