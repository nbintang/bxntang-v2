"use client";
import getFilteredSpotifyData from "@/services/spotify/filter-spotify-data";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useSpotifyData = (): UseQueryResult<SpotifyDataProps, Error> => {
  return useQuery({
    queryKey: ["spotify"],
    queryFn: getFilteredSpotifyData,
    staleTime: 1000 * 10, 
    refetchInterval: 5000, 
    refetchOnWindowFocus: false, 
    placeholderData: (previousData) => previousData, 
  });
};

export default useSpotifyData;
