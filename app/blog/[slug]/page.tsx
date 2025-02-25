"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dummySLug } from "@/features/blog/dummy";
import Image from "next/image";
import { notFound, usePathname } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";

export default function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const blog = dummySLug.find((blog) => blog.slug === slug);
  const pathname = usePathname();
  if (!blog) notFound();
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
    <main className="space-y-3">
      <h1 className="text-3xl font-semibold font-display text-neutral-950">
        {blog?.title}
      </h1>
      <Image
        src={blog?.image}
        alt={blog?.title}
        className="w-full h-56 sm:h-[400px] object-center object-cover"
        width={500}
        height={300}
      />
      <section className="space-y-1">
        <div className="flex flex-col">
          <div className="flex gap-4 my-3 items-center">
            <Avatar className="size-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{blog?.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p>{blog?.author}</p>
              <p className="text-muted-foreground">{blog?.date}</p>
            </div>
          </div>
        </div>
        <p className="text-base sm:text-lg">{blog?.description}</p>
        <br />
        <p className="text-base sm:text-lg">{blog?.content}</p>
      </section>
    </main>
  );
}
