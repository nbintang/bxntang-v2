import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ActivityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  title?: string;
  desc?: string;
  titleColor?: string;
}
export default function ActivityCard({
  children,
  icon: Icon,
  title,
  desc,
  className,
  titleColor = "text-primary",
  ...props
}: ActivityCardProps) {
  return (
    <Card className={cn("shadow", className)} {...props}>
      <CardHeader className="flex z-20 relative flex-col gap-2">
        <div className="flex flex-row  items-center gap-4">
          <Avatar className="h-8 w-8 ">
            <AvatarFallback className="bg-transparent">
              <Icon className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className={cn(`ml-2 `, titleColor)}>{title}</CardTitle>
        </div>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
