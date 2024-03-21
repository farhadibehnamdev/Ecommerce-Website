"use client";
import SessionContext from "@/contexts/SessionContext";

const SessionProvider = function ({ children }: { children: React.ReactNode }) {
  return (
    <SessionContext.Provider
      value={{
        user: undefined,
        isPending: false,
        refetch: Function,
        isFetching: false,
        isSuccess: false,
        status: "",
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
