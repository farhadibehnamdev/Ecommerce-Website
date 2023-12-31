"use client";
import { User } from "@/api/userApi";
import { createContext } from "react";
export interface ISessionContext {
  user: User | undefined;
  isPending: boolean;
  refetch: Function;
  isFetching: boolean;
  status: string;
  isSuccess: boolean;
}
const defaultSessionContext: ISessionContext = {
  user: undefined,
  isPending: false,
  refetch: Function,
  isFetching: false,
  isSuccess: false,
  status: "",
};
const SessionContext = createContext<ISessionContext>(defaultSessionContext);

export default SessionContext;
