import GithubContributionChartsCard from "@/components/sections/activity/github";
import PlaystationCard from "@/components/sections/activity/playstation";
import SpotifyCard from "@/components/sections/activity/spotify";
import React from "react";

export default function Activity() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 mr-3">
        <PlaystationCard className="md:col-span-2 col-span-1" />
        <SpotifyCard className="md:col-span-1 col-span-1" />
        <GithubContributionChartsCard className="md:col-span-3 col-span-1 w-full " />
      </div>
    </>
  );
}
