"use client";
import React from "react";
import usePlaystationData from "@/hooks/use-playstation-data";
import { ActivityIcons } from "@/components/icons/activity.icon";
import { Skeleton } from "@workspace/ui/components/skeleton";
import ActivityCard from "@/components/layout/activity-card";
import { UseQueryResult } from "@tanstack/react-query";
import Image from "next/image";
import { ChartNoAxesColumn, Trophy } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import SkeletonCard from "../skeleton";


export default function PlaystationCard({ className }: { className?: string }) {
  const {
    data,
    isFetched,
    isLoading,
    isError,
    error,
  }: UseQueryResult<FilteredPSDataProps, Error> = usePlaystationData();

  if (isLoading) {
    return <SkeletonCard className={className} />;
  }

  if (isError || !data) {

    return (
      <ActivityCard
        icon={ActivityIcons.playstation}
        title={"PlayStation"}
        className={cn(` relative`, className)}
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
      icon={ActivityIcons.playstation}
      title={"PlayStation"}
      className={cn(` relative`, className)}
    >
      <div className="flex items-center gap-4">
        {isFetched ? (
          <Image
            src={data.gameImg || ""}
            alt={data.gameName || ""}
            width={200}
            height={200}
            className="rounded-md w-20 h-20 object-cover"
            priority
          />
        ) : (
          <Skeleton className="rounded-md w-20 h-20 bg-gray-200" />
        )}
        <div className="flex-1">
          <h3 className="text-sm">Recently Played</h3>
          <p className="text-base font-semibold ">{data.gameName || "N/A"}</p>
          <p className="text-xs text-muted-foreground">
            {data.isOnline ? "Is Playing Right Now" : `${data.lastPlayedTime}`}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-x-5">
        {isFetched && (
          <div className="mt-4">
            <div className="flex gap-3 mb-2 items-center">
              <h4 className="font-semibold ">Recent Achievements</h4>
            </div>
            <ul className="space-y-2">
              {data.trophies?.map((t) => (
                <li key={t.trophyId} className="flex items-center gap-2">
                  <Trophy
                    className={`h-4 w-4 ${
                      t.trophyType === "gold"
                        ? "text-yellow-500"
                        : t.trophyType === "silver"
                          ? "text-gray-500"
                          : t.trophyType === "bronze"
                            ? "text-orange-700"
                            : "text-primary"
                    }`}
                  />
                  <span className="text-sm">{t.trophyName}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Gaming Stats</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChartNoAxesColumn className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Level {data.trophySum?.level} has been achieved!
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Earned {data.totalTrophiesExist} trophies in total!
              </span>
            </li>
          </ul>
        </div>
      </div>
    </ActivityCard>
  );
}
