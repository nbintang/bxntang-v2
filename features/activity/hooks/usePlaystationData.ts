import { useQuery, UseQueryResult } from "@tanstack/react-query";
import getFilteredPsData from "@/features/activity/data/playstation";

const usePlaystationData = (): UseQueryResult<FilteredPSDataProps, Error> => {
  return useQuery({
    queryKey: ["Playstation"],
    queryFn: getFilteredPsData,
    staleTime: 1000 * 60 * 2, // 2 minutes cache
    refetchInterval: (query) => (query.state.error ? false : 10000),
    refetchOnWindowFocus: false,
    retry: false,
    placeholderData: (previousData) => previousData,
  });
};

export default usePlaystationData;
