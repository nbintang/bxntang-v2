"use client";
import { ActivityIcons } from "@/components/icons/ActivityIcon";
import ActivityCard from "@/components/layouts/ActivityCard";
import useSpotifyData from "@/features/activity/hooks/useSpotifyData";
import { UseQueryResult } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { ListMusic, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SkeletonCard from "./SkeletonCard";

export default function SpotifyCard({ className }: { className?: string }) {
  const {
    data,
    isError,
    isLoading,
    error,
  }: UseQueryResult<SpotifyDataProps, Error> = useSpotifyData();

  if (isError) {
    return (
      <ActivityCard
        icon={ActivityIcons.playstation}
        title={"Spotify"}
        className={cn(` relative`, className)}
      >
        <p className="text-sm text-muted-foreground">
          {error instanceof Error ? error.message : "Something went wrong"}
        </p>
      </ActivityCard>
    );
  }

  if (isLoading || !data || data.nowPlaying?.type === "ad") {
    return <SkeletonCard className={className} />;
  }

  const { followedArtists, nowPlaying, playlist } = data;

  return (
    <ActivityCard
      icon={ActivityIcons.spotify}
      title={"Spotify"}
      titleColor={cn(nowPlaying ? "text-white" : "text-black")}
      className={cn("relative overflow-hidden mix-blend-difference", className)}
    >
      {nowPlaying && (
        <>
          <Image
            src={nowPlaying.image}
            alt="Album cover"
            className="absolute inset-0 z-0 object-cover pointer-events-none"
            fill
          />
          <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm" />
        </>
      )}

      {/* Overlay */}

      {/* Content */}
      <div className="relative z-20">
        <div className="flex items-center gap-4">
          <div className="rounded-md relative group w-20 h-20 overflow-hidden  bg-gray-200 flex-shrink-0 flex items-center justify-center">
            {nowPlaying ? (
              <Link
                href={nowPlaying.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={nowPlaying.image}
                  alt="Album thumbnail"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover  aspect-square"
                />
                {/* blur hover */}
                <div className="absolute inset-0 z-10 bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </Link>
            ) : (
              <div className="w-full h-full grid place-items-center">
                <h1 className="text-2xl font-semibold text-muted-foreground">
                  N/A
                </h1>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3
              className={cn(
                "text-sm ",
                nowPlaying ? "text-gray-300" : "text-muted-foreground"
              )}
            >
              Currently Playing
            </h3>
            {nowPlaying ? (
              <>
                <Link
                  href={`${nowPlaying.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    className={cn(
                      "font-semibold text-white",
                      nowPlaying.title.trim().length > 20
                        ? "text-base"
                        : "text-xl"
                    )}
                  >
                    {nowPlaying.title}
                  </p>
                </Link>
                <div className="flex items-center gap-x-2 flex-wrap">
                  <p className="text-xs text-gray-300">
                    {nowPlaying?.artists?.map((art) => art.name).join(", ")}
                  </p>
                  <p
                    className={cn(
                      " text-gray-300",
                      nowPlaying?.albumName.trim().length > 15
                        ? "text-[9px]"
                        : "text-xs"
                    )}
                  >
                    ({nowPlaying.albumName})
                  </p>
                </div>
              </>
            ) : (
              <p className="text-base sm:text-lg font-semibold  text-gray-300">
                Not playing anything right now
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 mix-blend-normal ">
          <h4
            className={cn(
              "font-semibold mb-2  ",
              nowPlaying ? "text-white" : "text-black"
            )}
          >
            Recent Activity
          </h4>
          <ul className="space-y-2">
            <li
              className={cn(
                "flex items-center gap-2 ",
                nowPlaying ? "text-gray-300" : "text-muted-foreground"
              )}
            >
              <Music className="h-4 w-4" />
              <span className="text-sm">
                Followed {followedArtists} artists
              </span>
            </li>
            <li
              className={cn(
                "flex items-center gap-2 ",
                nowPlaying ? "text-gray-300" : "text-muted-foreground"
              )}
            >
              <ListMusic className="h-4 w-4" />
              <span className="text-sm">Created {playlist} playlists</span>
            </li>
          </ul>
        </div>
      </div>
    </ActivityCard>
  );
}
