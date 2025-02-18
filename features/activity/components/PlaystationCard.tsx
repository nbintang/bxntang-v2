"use client";
import React from "react";
import usePlaystationData from "@/features/activity/hooks/usePlaystationData";
import { ActivityIcons } from "@/components/icons/ActivityIcon";
import { Skeleton } from "@/components/ui/skeleton";
import ActivityCard from "@/components/layouts/ActivityCard";
import { UseQueryResult } from "@tanstack/react-query";
import Image from "next/image";
import { ChartNoAxesColumn, Dot, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import SkeletonCard from "./SkeletonCard";

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
          <div className="relative w-20 h-20 overflow-hidden rounded-md">
            <Image
              src={data.gameImg || ""}
              alt={data.gameName || ""}
              width={200}
              height={200}
              className="h-full w-full object-cover"
              priority
            />

            {data.isOnline ? (
              <Dot className="absolute w-12 h-12 text-green-400  -bottom-4 -right-4" />
            ) : (
              <span className="absolute inset-0 bg-black/50" />
            )}
          </div>
        ) : (
          <Skeleton className="rounded-md w-20 h-20 bg-gray-200" />
        )}
        <div className="flex-1">
          <h3 className="text-sm text-muted-foreground">Recently Played</h3>
          <p
            className={cn(
              " font-semibold ",
              data.gameName!.trim().length > 20 ? "text-sm" : "text-base"
            )}
          >
            {data.gameName || "N/A"}
          </p>
          <p className="text-xs text-muted-foreground">
            {data.isOnline ? "Is Playing Right Now" : `${data.lastPlayedTime}`}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-x-5">
        {isFetched && (
          <div className="mt-4">
            <div className="flex gap-3 mb-2 items-center">
              <h4 className="font-semibold text-primary">
                Recent Achievements
              </h4>
            </div>
            <ul className="space-y-2 text-muted-foreground">
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
        <div className="mt-4 ">
          <h4 className="font-semibold mb-2 text-primary">Gaming Stats</h4>
          <ul className="space-y-2 text-muted-foreground">
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
