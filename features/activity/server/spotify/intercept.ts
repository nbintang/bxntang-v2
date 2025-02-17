import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { revalidateTag } from "next/cache";
import getSpotifyAccessToken from "./getAccessToken";


interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const onRequest = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const token = await getSpotifyAccessToken();
  config.headers.Authorization = `Bearer ${token.access_token}`;
  return config;
};

const onRequestError = (error: AxiosError) => Promise.reject(error);

const onResponse = (response: AxiosResponse) => response;

const onResponseError = async (error: AxiosError) => {
  const originalRequest = error.config as CustomAxiosRequestConfig;
  if (
    originalRequest &&
    error.response?.status === 401 &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;
    revalidateTag("spotify");
    const token = await getSpotifyAccessToken();
    originalRequest.headers.Authorization = `Bearer ${token.access_token}`;
    return axios(originalRequest);
  }
  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance
};

const spotifyAPI = setupInterceptorsTo(axios.create());

export default spotifyAPI;
