"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function SkeletonCard({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <Skeleton className="h-8 w-24 " />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Skeleton className="h-[90px] w-[90px] " />
            <div className="space-y-2">
              <Skeleton className="h-5 sm:w-32 w-24 " />
              <Skeleton className="h-7 sm:w-32 md:w-40 w-32 " />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="space-y-4">
          <Skeleton className="h-7 w-36 " />
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-5 w-5 " />
              <Skeleton className="h-5 w-32 " />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-5 w-5 " />
              <Skeleton className="h-5 w-36 " />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
