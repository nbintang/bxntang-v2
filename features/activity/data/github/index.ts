
import axios from "axios";
const GITHUB_CONTRIBUTION_SCRAP_API =
  "https://github-contributions-api.jogruber.de/v4/";

const getGithubData = async (username: string): Promise<GithubApiResponse> => {
  const response = await axios.get(
    `${GITHUB_CONTRIBUTION_SCRAP_API}${username}`
  );
  const data = response.data as GithubApiResponse | GithubApiErrorResponse;
  if (response.status !== 200)
    throw new Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as GithubApiErrorResponse).error
      }`
    );

  return data as GithubApiResponse;
};

export default getGithubData;
