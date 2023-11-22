import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { axiosInstance } from "../api";
export const refreshToken = async () => {
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
};

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  return config;
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
    try {
      await refreshToken();
    } catch (error: any) {
      return Promise.reject(error);
    }
    return axiosInstance(originalRequest);
  }
  return Promise.reject(err);
};
