import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData } as ValidationError;
};

export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, detail: "Service not found" } as NotFoundError;
};

export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail:
      "Unauthorized access. Please check your credentials and try again, or contact support for help.",
  };
};

export const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail:
      "Sorry, our server encountered an error. We're working to resolve the issue.",
  } as UnhandledException;
};

export const networkErrorStrategy = () => {
  throw {
    detail: "Oops, there seems to be a problem with your internet connection.",
  } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(
      errorData
    ),
  403: unauthorizedErrorStrategy,
  404: notFoundErrorStrategy,
  500: unhandledExceptionStrategy,
};
