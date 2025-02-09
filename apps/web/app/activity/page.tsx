import GithubContributionChartsCard from "@/components/sections/activity/github";
import PlaystationCard from "@/components/sections/activity/playstation";
import SpotifyCard from "@/components/sections/activity/spotify";
import { generateMetadata } from "@/lib/metadata";
import { mainURL, metaDataOpenGraph } from "@/lib/openGraph";
import { Metadata } from "next";
import React from "react";

export default function Activity() {
  return (
    <>
      <main className=" mx-auto   w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  mx-3 my-3">
          <PlaystationCard className="md:col-span-2 col-span-1" />
          <SpotifyCard className="md:col-span-1 col-span-1" />
          <GithubContributionChartsCard className="md:col-span-3 col-span-1 w-full " />
        </div>
      </main>
    </>
  );
}

export const metadata: Metadata = generateMetadata({
  title: "Bxntang | Activity",
  description: "This is Bxntang activity page",
  authors: {
    name: "Nur Bintang Hidayat",
    url: "https://github.com/nbintang",
  },
  openGraph: {
    title: "Bxntang | Activity",
    url: `${mainURL}/activity`,
    description: "This is Bxntang activity page",
    ...metaDataOpenGraph,
  },
});
