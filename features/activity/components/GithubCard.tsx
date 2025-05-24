"use client";

import { cn } from "@/lib/utils";
import { ActivityIcons } from "@/components/icons/ActivityIcon";
import ActivityCard from "@/components/layouts/ActivityCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useGithubDataCharts from "@/features/activity/hooks/useGithubData";
import GitHubCalendar, { gitHubTheme } from "./github/GithubCalendar";
import { Skeleton as GitHubCalendarSkeleton } from "react-activity-calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function GithubContributionChartsCard({
  className,
}: {
  className?: string;
}) {
  const { data, isError, isLoading, error, isPending } =
    useGithubDataCharts("nbintang");

  if (isLoading)
    return (
      <Card className={cn(className)}>
        <CardHeader>
          <Skeleton className="h-8 w-24 " />
          <Skeleton className="h-4 w-32 " />
        </CardHeader>
        <CardContent>
          <div className="flex items-start flex-col ">
            <GitHubCalendarSkeleton
              blockSize={13}
              theme={gitHubTheme}
              loading={isPending}
            />
          </div>
        </CardContent>
      </Card>
    );
  if (isError || !data) {
    return (
      <ActivityCard
        icon={ActivityIcons.github}
        title={"PlayStation"}
        className={cn(`relative`, className)}
      >
        <div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-destructive ">
            500
          </h1>
          <p className="text-sm text-muted-foreground">
            {error?.message.includes(
              `https://ca.account.sony.com/api/v1/ssocookie.`
            ) && "Something went wrong :)"}
          </p>
        </div>
      </ActivityCard>
    );
  }

  return (
    <ActivityCard
      className={cn("", className)}
      icon={ActivityIcons.github}
      title={"Github"}
      desc="Daily Github Commit and Contribution"
    >
      <ScrollArea>
        <GitHubCalendar
          blockSize={13}
          data={data}
          isError={isError}
          loading={isLoading}
          year="last"
        />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </ActivityCard>
  );
}
