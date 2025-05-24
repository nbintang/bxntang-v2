"use client";
import getGithubData from "@/features/activity/data/github";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useGithubDataCharts = (
  username: string
): UseQueryResult<GithubApiResponse, Error> => {
  return useQuery<GithubApiResponse>({
    queryKey: ["github"],
    queryFn: async () => await getGithubData(username),
    staleTime: 1000 * 60 * 60,
  });
};

export default useGithubDataCharts;
