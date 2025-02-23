import axios from "axios";
const GITHUB_CONTRIBUTION_SCRAP_API =
  "https://github-contributions-api.jogruber.de/v4/nbintang";

 const getGithubData = async () => {
  const response = await axios.get(GITHUB_CONTRIBUTION_SCRAP_API);
  const data = response.data as GithubContributionData;
  const validYears = Object.keys(data.total).filter(
    (year) => data.total[year] > 20
  );
  const filterContributions = data.contributions.filter((c) => {
    const year = c.date.split("-")[0];
    return validYears.includes(year);
  });
  return { ...data, contributions: filterContributions };
};
export default getGithubData;