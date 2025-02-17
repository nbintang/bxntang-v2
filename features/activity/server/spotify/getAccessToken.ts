"use server";

import axios from "axios";
const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id!}:${client_secret!}`).toString("base64");

const getSpotifyAccessToken = async () => {
  const response = await axios.post(
    SPOTIFY_TOKEN_ENDPOINT,
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken!,
    }),
    {
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
};

export default getSpotifyAccessToken;
