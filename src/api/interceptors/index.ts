import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { axiosInstance } from "../api";
import Cookies from "universal-cookie";
const cookie = new Cookies();
export const refreshToken = async () => {
  if (cookie.get("refToken")) {
    try {
      const response = await axiosInstance.post("auth/generate/tokens");

      const newAccessToken = response.data?.tokens?.access.token;
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `${newAccessToken}`;

      return newAccessToken;
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = cookie.get("accToken");
  if (token) {
    config.headers!.Authorization = `${token}`;
  }
  return config;
  // }
};

export const requestInterceptorError = (err: any) => {
  return Promise.reject(err);
};

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseInterceptorError = async (err: any) => {
  const originalRequest = err.config;
  if (err.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    await refreshToken();
  }
  return Promise.reject(err);
};
