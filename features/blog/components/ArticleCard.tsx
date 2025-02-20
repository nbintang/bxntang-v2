import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";

interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
}

const ArticleCard = React.forwardRef<HTMLDivElement, ArticleCardProps>(
  ({ title, excerpt, date, author, imageUrl, className, ...props }, ref) => {
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
          src={imageUrl || "/placeholder.svg"}
          alt="Background"
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
          <p className="mb-4 line-clamp-2 text-gray-200">{excerpt}</p>
          <div className="flex items-center text-sm">
            <CalendarDays className="w-4 h-4 mr-2" />
            <time dateTime={date}>{date}</time>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
        </CardContent>
      </Card>
    );
  }
);

ArticleCard.displayName = "ArticleCard";
export default ArticleCard;
