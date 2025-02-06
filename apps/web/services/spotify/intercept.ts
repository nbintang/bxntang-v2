import axios from 'axios';
import { revalidateTag } from 'next/cache';
import getSpotifyAccessToken from './get-access-token';

const spotifyAPI = axios.create();
spotifyAPI.interceptors.request.use(
  async (config) => {
    const token = await getSpotifyAccessToken();
    config.headers.Authorization = `Bearer ${token.access_token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
spotifyAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      revalidateTag('spotify');

      // Get new access token
      const token = await getSpotifyAccessToken();
      originalRequest.headers.Authorization = `Bearer ${token.access_token}`;
      return spotifyAPI(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default spotifyAPI