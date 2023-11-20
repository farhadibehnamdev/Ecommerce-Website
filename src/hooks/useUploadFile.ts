import { uploadProductMainImage } from "@/api/productApi";
import axios from "axios";
import { useEffect, useReducer, useRef } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

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
const cookie = new Cookies();
export const useUploadFile = <T = unknown>(
  url: string,
  file: File,
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
  const formData = new FormData();

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    if (!url || disabled) return;
    cancelRequest.current = false;
    const fetchData = async () => {
      dispatch({ type: "loading" });
      formData.append("file", file);
      try {
        const res = await uploadProductMainImage(url, formData, dispatch);
        const data = res.data as T;
        if (cancelRequest.current) return;
        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;
        dispatch({ type: "error", payload: true });
        toast("Something went wrong");
      }
    };
    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
};
