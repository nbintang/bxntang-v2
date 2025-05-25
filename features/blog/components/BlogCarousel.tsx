"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import BlogCard from "@/features/blog/components/BlogCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronsRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import useCarouselBlog from "../hooks/useCarouselBlog";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Blog } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchBlogs } from "../data/blogs";
import useFetchServerData from "@/hooks/useFetchServerData";

export default function CarouselBlog({ className }: { className?: string }) {
  const router = useRouter();
  const { api, setApi, count, current } = useCarouselBlog();
  const { data, isLoading, isError, isSuccess, isFetched, isFetching } =
    useFetchServerData<Blog[]>("/blogs");
  if (isLoading || isFetching)
    return <Skeleton className={cn("rounded-xl min-h-96", className)} />;
  if (isError) return <div className="text-red-500">Something went wrong</div>;
  const handleToastInfo = () =>
    toast.info("We're currently working on this feature, stay tuned!", {
      richColors: true,
      className: "text-xs",
    });
  const handleAppearToast = (slug: string) => router.push(`/blog/${slug}`);
  return (
    <div className={cn("w-full h-full", className)}>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="h-full  ">
          {isSuccess &&
            isFetched &&
            Array.isArray(data) &&
            data?.map(
              (
                { author, updatedAt, description, image, title, slug },
                index
              ) => (
                <CarouselItem key={index} className="h-full ">
                  <BlogCard
                    onClick={() => handleAppearToast(slug)}
                    className="h-full min-h-[50vh] flex cursor-pointer"
                    title={title}
                    description={description}
                    updatedAt={updatedAt}
                    author={author}
                    image={image}
                  />
                </CarouselItem>
              )
            )}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-between">
        <div className=" text-center">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 p-0 mx-1 rounded-full ${
                index === current - 1 ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        {isSuccess && (
          <Button
            variant={"link"}
            size="sm"
            className="text-primary hover:text-primary flex  gap-2 items-center"
            onClick={handleToastInfo}
          >
            <span>See More</span>
            <ChevronsRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
