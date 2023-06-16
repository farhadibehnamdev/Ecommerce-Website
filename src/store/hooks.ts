import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from ".";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
