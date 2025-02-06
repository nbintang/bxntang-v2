import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/card";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { cn } from "@workspace/ui/lib/utils";
export default function ActivityCard({
  children,
  icon: Icon,
  title,
  desc,
  className,
  titleColor="text-primary",
}: {
  children: React.ReactNode;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element; // Fix tipe icon
  title?: string;
  desc?: string;
  className?: string;
  titleColor?: string;
}) {
  return (
    <Card className={cn("shadow", className)}>
      <CardHeader className="flex z-20 relative flex-col gap-2">
        <div className="flex flex-row  items-center gap-4">
          <Avatar className="h-8 w-8 ">
            <AvatarImage src="" alt="PlayStation" />
            <AvatarFallback className="bg-transparent"> 
                <Icon className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className={`ml-2 text-${titleColor}`}>{title}</CardTitle>
        </div>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}