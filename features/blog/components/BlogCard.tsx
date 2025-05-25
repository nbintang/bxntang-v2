import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Blog } from "@prisma/client";

type BlogCardProps = React.HTMLAttributes<HTMLDivElement> & Partial<Blog>;

const BlogCard = React.forwardRef<HTMLDivElement, BlogCardProps>(
  (
    { title, description, updatedAt, author, image, className, ...props },
    ref
  ) => {
    const updated = new Date(updatedAt ?? new Date());
    const formattedDate = isNaN(updated.getTime())
      ? "Invalid date"
      : updated.toISOString().split("T")[0];
    return (
      <Card
        ref={ref}
        className={cn(
          "relative w-full h-full  rounded-xl  overflow-hidden",
          className
        )}
        {...props}
      >
        <Image
          src={image || "/img/project/default.png"}
          alt={title ?? "Placeholder"}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        <div className="absolute inset-0 bg-black/50 " />

        <CardContent className="relative min-h-[50vh] flex flex-col justify-end p-6 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
            {title}
          </h2>
          <p className="mb-4 line-clamp-2 text-gray-200">{description}</p>
          <div className="flex items-center text-sm">
            <CalendarDays className="w-4 h-4 mr-2" />
            <time dateTime={formattedDate}>{formattedDate}</time>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
        </CardContent>
      </Card>
    );
  }
);

BlogCard.displayName = "ArticleCard";
export default BlogCard;
