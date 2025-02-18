import GithubContributionChartsCard from "@/features/activity/components/GithubCard";
import PlaystationCard from "@/features/activity/components/PlaystationCard";
import SpotifyCard from "@/features/activity/components/SpotifyCard";
import React from "react";

export default function Activity() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-1 lg:gap-3">
      <PlaystationCard className="md:col-span-2 col-span-1 md:row-span-1 lg:rounded-tl-3xl rounded-t-3xl lg:rounded-tr-md" />
      <SpotifyCard className="md:col-span-1 col-span-1 md:row-span-2 flex-grow lg:rounded-r-3xl" />
      <GithubContributionChartsCard className="md:col-span-2 col-span-1 w-full md:row-span-1 lg:rounded-bl-3xl lg:rounded-br-md  rounded-b-3xl" />
    </div>
  );
}
