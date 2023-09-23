import { User } from "@/api/userApi";
import React from "react";
export interface SessionContextType {
  user: User | undefined;
  isLoading: boolean;
  refetch: Function;
  isFetching: boolean;
}
const defaultSessionContext: SessionContextType = {
  user: undefined,
  isLoading: false,
  refetch: Function,
  isFetching: false,
};
const SessionContext = React.createContext<SessionContextType>(
  defaultSessionContext
);

export default SessionContext;
