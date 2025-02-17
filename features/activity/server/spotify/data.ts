
import spotifyAPI from "./intercept";

// URL Endpoints
const SPOTIFY_NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const SPOTIFY_PLAYLIST_ENDPOINT =
  "https://api.spotify.com/v1/me/playlists?limit=20&offset=1";
const SPOTIFY_FOLLOWED_ARTIST_ENDPOINT =
  "https://api.spotify.com/v1/me/following?type=artist";

// Fetch Endpoints
export const getSpotifyNowPlaying = async () =>
  (await spotifyAPI.get(SPOTIFY_NOW_PLAYING_ENDPOINT)).data;

export const getSpotifyPlaylist = async () =>
  (await spotifyAPI.get(SPOTIFY_PLAYLIST_ENDPOINT)).data;

export const getSpotifyFollowedArtist = async () =>
  (await spotifyAPI.get(SPOTIFY_FOLLOWED_ARTIST_ENDPOINT)).data;
