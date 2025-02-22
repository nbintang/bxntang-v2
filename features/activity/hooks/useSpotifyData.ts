"use client";
import getFilteredSpotifyData from "@/features/activity/data/spotify";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useSpotifyData = (): UseQueryResult<SpotifyDataProps | null, Error> => {
  return useQuery({
    queryKey: ["spotify"],
    queryFn: getFilteredSpotifyData,
    staleTime: 1000 * 10,
    refetchInterval: 5000,
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
    select: (data) =>
      data.nowPlaying?.type !== "track" ? { ...data, nowPlaying: null } : data,
  });
};

export default useSpotifyData;
