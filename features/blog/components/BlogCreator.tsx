import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";

function safeFormatDate(raw?: string | Date): string {
  if (!raw) return "—";
  const parsed = typeof raw === "string" ? new Date(raw) : raw;
  return isNaN(parsed.getTime()) ? "Invalid date" : format(parsed, "yyyy-MM-dd");
}
export default function BlogCreator({
  author,
  date,
}: {
  author: string;
  date: Date | string;
}) {
  const formattedDate = safeFormatDate(date);

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 my-3 items-center">
        <Avatar className="size-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{author}</AvatarFallback>
        </Avatar>
        <div>
          <p>{author}</p>
          <p className="text-muted-foreground">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
