import axios, { AxiosError, AxiosInstance } from "axios";
import {
  ApiError,
  ApiExecutor,
  ApiExecutorArgs,
  ApiRequestConfig,
  WithAbortFn,
} from "./api.types";
import {
  requestInterceptor,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
} from "@/api/interceptors";
const axiosParams = {
  baseURL: "http://localhost:8081/",
  headers: {
    "Content-Type": "application/json",
  },
  // process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "/",
};

export const axiosInstance = axios.create(axiosParams);
axiosInstance.defaults.withCredentials = true;
axiosInstance.interceptors.request.use(
  requestInterceptor,
  requestInterceptorError
);

axiosInstance.interceptors.response.use(
  responseInterceptor,
  responseInterceptorError
);

const didAbort = (error: AxiosError) => axios.isCancel(error);

const getCancelSource = () => axios.CancelToken.source();

export const isApiError = (error: unknown): error is ApiError => {
  return axios.isAxiosError(error);
};

const withAbort = <T>(fn: WithAbortFn) => {
  const executor: ApiExecutor<T> = async (...args: ApiExecutorArgs) => {
    const originalConfig = args[args.length - 1] as ApiRequestConfig;
    //Extract abort property from the config
    const { abort, ...config } = originalConfig;

    // Create cancel token and abort method only if abort
    // funtion was passed
    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }
    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn<T>(url, body, config);
      } else {
        const [url] = args;
        return await fn<T>(url, config);
      }
    } catch (error) {
      if (!isApiError(error)) throw error;
      if (didAbort(error)) {
        error.aborted = true;
      } else {
        error.aborted = false;
      }
      throw error;
    }
  };
  return executor;
};

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.get)(url, config),
    delete: <T>(url: string, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.delete)(url, config),
    post: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.post)(url, body, config),
    patch: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.patch)(url, body, config),
    put: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.put)(url, body, config),
  };
};
export default api(axiosInstance);
