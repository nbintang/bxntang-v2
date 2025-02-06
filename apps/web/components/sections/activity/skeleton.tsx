"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { cn } from "@workspace/ui/lib/utils";

export default function SkeletonCard({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        {/* Spotify Logo Skeleton */}
        <Skeleton className="h-8 w-24 " />
      </CardHeader>
      <CardContent>
        {/* Currently Playing Section */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Skeleton className="h-[120px] w-[120px] " />
            <div className="space-y-2">
              <Skeleton className="h-5 w-32 " />
              <Skeleton className="h-7 w-56 " />
            </div>
          </div>
        </div>
      </CardContent>

      {/* Recent Activity Section */}
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
