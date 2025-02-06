import { useQuery, UseQueryResult } from "@tanstack/react-query";
import getFilteredPsData, {
} from "@/services/playstation/filter-ps-data";

const usePlaystationData = (): UseQueryResult<FilteredPSDataProps, Error> => {
  return useQuery({
    queryKey: ["psnToken"],
    queryFn: getFilteredPsData,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false,
  });
};

export default usePlaystationData;
