"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ArticleCard from "@/features/blog/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { dummyBlog } from "../dummy";
import { toast } from "sonner";
import { ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselDApiDemo({
  className,
}: {
  className?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const router = useRouter();
  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

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
          {dummyBlog.map(
            ({ author, date, description, image, title, slug }, index) => (
              <CarouselItem key={index} className="h-full ">
                <ArticleCard
                  onClick={() => handleAppearToast(slug)}
                  className="h-full min-h-[50vh] flex cursor-pointer"
                  title={title}
                  excerpt={description}
                  date={date}
                  author={author}
                  imageUrl={image}
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
        <Button
          variant={"link"}
          size="sm"
          className="text-primary hover:text-primary flex  gap-2 items-center"
          onClick={() =>
            toast.info("We're currently working on this feature, stay tuned!", {
              className: "text-xs",
            })
          }
        >
          <span>See More</span>
          <ChevronsRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
