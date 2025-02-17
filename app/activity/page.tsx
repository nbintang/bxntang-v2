
import GithubContributionChartsCard from "@/features/activity/components/GithubCard";
import PlaystationCard from "@/features/activity/components/PlaystationCard";
import SpotifyCard from "@/features/activity/components/SpotifyCard";
import React from "react";

export default function Activity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  mx-3 my-3">
      <PlaystationCard className="md:col-span-2 col-span-1" />
      <SpotifyCard className="md:col-span-1 col-span-1" />
      <GithubContributionChartsCard className="md:col-span-3 col-span-1 w-full " />
    </div>
  );
}
