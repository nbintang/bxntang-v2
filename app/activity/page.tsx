import GithubContributionChartsCard from "@/features/activity/components/GithubCard";
import PlaystationCard from "@/features/activity/components/PlaystationCard";
import SpotifyCard from "@/features/activity/components/SpotifyCard";
import { cn } from "@/lib/utils";
import React from "react";

export default function Activity() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 ">
      <PlaystationCard
        className={cn(
          //mobile
          "col-span-1 rounded-b-none rounded-t-3xl",
          //tablet
          "md:col-span-2  md:row-span-1",
          //desktop
          " lg:rounded-tl-3xl  lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-none"
        )}
      />
      <SpotifyCard
        className={cn(
          "col-span-1 rounded-none flex-grow",
          "md:col-span-1  md:row-span-2 ",
          " lg:rounded-r-3xl lg:rounded-bl-none lg:rounded-tl-none"
        )}
      />
      <GithubContributionChartsCard
        className={cn(
          "rounded-b-3xl col-span-1 rounded-t-none w-full",
          "md:col-span-2 md:row-span-1",
          "lg:rounded-bl-3xl lg:rounded-br-none lg:rounded-tr-none lg:rounded-tl-none"
        )}
      />
    </div>
  );
}
