"use client";
import { dummyBlogProps } from "@/features/blog/dummy";
import Image from "next/image";
import {  usePathname } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import BlogCreator from "../components/BlogCreator";

export default function BlogSlugPage({ blog }: { blog: dummyBlogProps }) {
  const pathname = usePathname();
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
  return (
    <>
      <h1 className="text-3xl font-semibold font-display text-neutral-950">
        {blog.title}
      </h1>
      <Image
        src={blog?.image}
        alt={blog?.title}
        className="w-full h-56 sm:h-[400px] object-center object-cover"
        width={500}
        height={300}
      />
      <section className="space-y-1">
        <BlogCreator author={blog.author} date={blog.date} />
        <p className="text-base sm:text-lg">{blog.description}</p>
        <br />
        <p className="text-base sm:text-lg">{blog.content}</p>
      </section>
    </>
  );
}
