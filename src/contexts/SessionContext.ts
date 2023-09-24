"use client";
import { User } from "@/api/userApi";
import { createContext } from "react";
export interface ISessionContext {
  user: User | undefined;
  isLoading: boolean;
  refetch: Function;
  isFetching: boolean;
}
const defaultSessionContext: ISessionContext = {
  user: undefined,
  isLoading: false,
  refetch: Function,
  isFetching: false,
};
const SessionContext = createContext<ISessionContext>(defaultSessionContext);

export default SessionContext;
