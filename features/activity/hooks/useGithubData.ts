import getGithubData from "@/features/activity/data/github";
import { useQuery } from "@tanstack/react-query";

export default function useGithubDataCharts() {
  const { data, isError, isLoading } = useQuery<GithubContributionData>({
    queryKey: ["github"],
    queryFn: getGithubData,
  });

  if (!data || isError)
    return {
      chartData: [],
      totalContributions: 0,
      groupedData: {},
    };
  const sortedContributions = [...data.contributions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const groupedData = sortedContributions.reduce<GroupedData>((acc, item) => {
    const date = new Date(item.date);
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
    if (!acc[key]) acc[key] = { date: key, contributions: 0 };
    acc[key].contributions += item.count;
    return acc;
  }, {});

  const chartData = Object.values(groupedData);
  const totalContributions = Object.values(data.total).reduce(
    (sum, count) => sum + count,
    0
  );
  return {
    isLoading,
    chartData,
    totalContributions,
    groupedData,
  };
}
