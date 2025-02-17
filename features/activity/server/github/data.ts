import axios from "axios";
const GITHUB_CONTRIBUTION_SCRAP_API =
  "https://github-contributions-api.jogruber.de/v4/nbintang";

export const getGithubData = async () =>
  (await axios.get(GITHUB_CONTRIBUTION_SCRAP_API!)).data;
