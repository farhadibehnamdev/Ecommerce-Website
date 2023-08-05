import axios, { AxiosError } from "axios";
import {
  ApiError,
  ApiExecutor,
  ApiExecutorArgs,
  ApiRequestConfig,
  WithAbortFn,
} from "./api.types";

const axiosParams = {
  baseURL: "http://localhost:8080/api/",
  // process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "/",
};

const axiosInstance = axios.create(axiosParams);

const didAbort = (error: AxiosError) => axios.isCancel(error);

const getCancelSource = () => axios.CancelToken.source();

//TODO :: Read about user-type guard in typescript
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
