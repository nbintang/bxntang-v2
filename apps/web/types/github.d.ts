type ContributionProps = {
    date: string;
    count: number;
    level: number;
  };
  
  type GithubContributionData = {
    total: Record<string, number>;
    contributions: ContributionProps[];
  };
  interface GroupedData {
    [key: string]: { date: string; contributions: number };
  }