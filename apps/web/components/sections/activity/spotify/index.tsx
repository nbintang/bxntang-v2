"use client";
import { ActivityIcons } from "@/components/icons/activity.icon";
import ActivityCard from "@/components/layout/activity-card";
import useSpotifyData from "@/hooks/use-spotify-data";
import { UseQueryResult } from "@tanstack/react-query";
import { cn } from "@workspace/ui/lib/utils";
import { ListMusic, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SkeletonCard from "../skeleton";

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

  if (isLoading || !data) {
    return <SkeletonCard className={className} />;
  }

  const { followedArtists, nowPlaying, playlist } = data;

  return (
    <ActivityCard
      icon={ActivityIcons.spotify}
      title={"Spotify"}
      className={cn("relative overflow-hidden", className)}
      titleColor={nowPlaying ? "white" : "muted-foreground"}
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
          <div className="rounded-md w-20 h-20 overflow-hidden bg-gray-200 flex-shrink-0">
            {nowPlaying ? (
              <Image
                src={nowPlaying.image}
                alt="Album thumbnail"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full grid place-items-center">
                <h1 className="text-2xl font-semibold text-muted-foreground">
                  N/A
                </h1>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-white">Currently Playing</h3>
            {nowPlaying ? (
              <>
                <Link
                  href={`${nowPlaying.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-xl font-semibold text-white">
                    {nowPlaying.title}
                  </p>
                </Link>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-xs text-gray-300">
                    {nowPlaying?.artists?.map((art) => art.name).join(", ")}
                  </p>
                  <p className="text-xs text-gray-300">
                    ({nowPlaying.albumName})
                  </p>
                </div>
              </>
            ) : (
              <p className="text-xl font-semibold text-gray-300">
                Not playing anything right now
              </p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold mb-2 text-white">Recent Activity</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-300">
              <Music className="h-4 w-4" />
              <span className="text-sm">
                Followed {followedArtists} artists
              </span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <ListMusic className="h-4 w-4" />
              <span className="text-sm">Created {playlist} playlists</span>
            </li>
          </ul>
        </div>
      </div>
    </ActivityCard>
  );
}
