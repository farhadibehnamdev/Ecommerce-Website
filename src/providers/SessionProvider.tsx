"use client";
import SessionContext from "@/contexts/SessionContext";
import { useQuery } from "@tanstack/react-query";
import { profile } from "@/api/userApi";

const fetchUser = async function () {
  const response = await profile();
  if (response.status >= 400) throw new Error(response.statusText);
  return response.data;
};
const SessionProvider = function ({ children }: { children: React.ReactNode }) {
  const {
    data: user,
    isLoading,
    isSuccess,
    isFetching,
    refetch,
  } = useQuery(["user"], () => fetchUser(), {
    retry: (failureCount: number, error: any) => {
      if (error.response?.status === 401) {
        return false;
      } else if (error.response?.status >= 500 && failureCount > 1) {
        return false;
      }
      return true;
    },
    refetchOnWindowFocus: false,
  });
  return (
    <SessionContext.Provider value={{ user, isLoading, refetch, isFetching }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
