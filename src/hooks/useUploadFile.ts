import axios from "axios";
import { useEffect, useReducer, useRef } from "react";
import toast from "react-hot-toast";

interface State<T> {
  data?: T;
  isLoading: boolean;
  progress?: number;
  error?: boolean;
}
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: boolean }
  | { type: "progress"; payload: number };

type Options = {
  disabled: boolean | undefined;
};

export const useUploadFile = <T = unknown>(
  url: string,
  resourceUrl: string,
  options: Options
) => {
  const { disabled } = options;
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    isLoading: false,
    progress: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...state, isLoading: true };
      case "fetched":
        return { ...state, data: action.payload, isLoading: false };
      case "error":
        return { ...state, error: action.payload, isLoading: false };
      case "progress":
        return { ...state, progress: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url || disabled) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      try {
        const res = await axios.post(url, resourceUrl, {
          headers: {
            "Content-Type": "application/json",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total!
            );
            dispatch({ type: "progress", payload: percentCompleted });
            toast("Something went wrong");
          },
        });
        const data = res.data as T;
        if (cancelRequest.current) return;
        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;
        dispatch({ type: "error", payload: true });
      }
    };
    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
};
