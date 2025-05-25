import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
type FetchProps = {
  endpoint: string;
} | string;
export default function useFetchServerData<T>(props: FetchProps): UseQueryResult<T, Error> {
  const endpoint = typeof props === "string" ? props : props.endpoint;
  return useQuery<T, Error>({
    queryKey: [endpoint],
    queryFn: async () => {
      try {
        const response = await axios.get(`/api/server${endpoint}`);
        if (response.status === 404) throw new Error(response.statusText);
        return response.data.data;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch data");
      }
    },
  });
}
