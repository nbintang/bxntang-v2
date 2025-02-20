import spotifyAPI from "./intercept";
const defaultSpotifyUrl = "https://api.spotify.com/v1/me";
const getSpotifyEndpoint = async (endpoint: string) =>
  (await spotifyAPI.get(`${defaultSpotifyUrl}${endpoint}`)).data;
export default getSpotifyEndpoint;
